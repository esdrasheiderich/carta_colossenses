/**
 * map.js — Mapa Leaflet interativo do Vale do Lico
 * Carta aos Colossenses | Painel Interativo
 */

const LOCATIONS = [
  { id: 'efeso',           nome: 'Éfeso',                          lat: 37.939, lng: 27.340, tipo: 'cidade' },
  { id: 'hierapolis',      nome: 'Hierápolis',                     lat: 37.924, lng: 29.132, tipo: 'cidade' },
  { id: 'laodiceia',       nome: 'Laodicéia',                      lat: 37.833, lng: 29.097, tipo: 'cidade' },
  { id: 'colossos',        nome: 'Colossos',                       lat: 37.783, lng: 29.268, tipo: 'cidade' },
  { id: 'monte_cadmo',     nome: 'Monte Cadmo',                    lat: 37.680, lng: 29.130, tipo: 'monte'  },
  { id: 'fontes_quentes',  nome: 'Fontes Termais de Hierápolis',   lat: 37.954, lng: 29.152, tipo: 'termal' },
];

const SECONDARY = [
  { nome: 'Pérgamo',     lat: 39.132, lng: 27.184 },
  { nome: 'Esmirna',     lat: 38.418, lng: 27.139 },
  { nome: 'Tiatira',     lat: 38.920, lng: 27.836 },
  { nome: 'Sardes',      lat: 38.488, lng: 28.048 },
  { nome: 'Mileto',      lat: 37.530, lng: 27.278 },
  { nome: 'Filadélfia',  lat: 38.357, lng: 28.516 },
  { nome: 'Icônio',      lat: 37.865, lng: 32.485 },
];

const TIPO_ICON = {
  cidade: '🏛️',
  monte:  '⛰️',
  termal: '♨️',
};

let mapInstance = null;
const markerElements = {}; // id -> wrapper DOM element

function buildPinIcon(location) {
  const emoji = TIPO_ICON[location.tipo] || '📍';
  return L.divIcon({
    className: '',
    html: `
      <div class="map-leaflet-pin" id="pin-${location.id}">
        <div class="map-pin-icon"><span>${emoji}</span></div>
        <div class="map-pin-label">${location.nome}</div>
      </div>`,
    iconSize: [60, 60],
    iconAnchor: [30, 54],
    popupAnchor: [0, -54],
  });
}

function buildSecondaryIcon(nome) {
  return L.divIcon({
    className: '',
    html: `<div class="map-secondary-pin" title="${nome}"></div>`,
    iconSize: [8, 8],
    iconAnchor: [4, 4],
  });
}

function renderCityDetailsLeaflet(city) {
  const container = document.getElementById('map-details-container');
  if (!container) return;

  container.innerHTML = `
    <div class="city-detail-header">
      <span class="biblical-ref-tag">${city.referenciaBiblica}</span>
      <h3 style="margin-top:10px;">${city.nome}</h3>
    </div>

    <div class="city-info-row">
      <div class="city-info-label">Localização</div>
      <div class="city-info-val">${city.localizacao}</div>
    </div>

    <div class="city-info-row">
      <div class="city-info-label">Geografia no Vale</div>
      <div class="city-info-val">${city.distancia}</div>
    </div>

    <div class="city-info-row" style="flex-grow: 1;">
      <div class="city-info-label">Contexto e Importância Histórica</div>
      <div class="city-info-val" style="font-size:0.88rem; line-height:1.5; color:var(--text-main); text-align: justify;">
        ${city.contexto}
      </div>
    </div>
  `;
}

window.initLeafletMap = function () {
  if (mapInstance) return;

  mapInstance = L.map('leaflet-map', {
    center: [37.85, 29.12],
    zoom: 9,
    minZoom: 7,
    maxZoom: 13,
    zoomControl: true,
  });

  // Camada base: mapa físico com cores naturais de terreno (ESRI)
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; <a href="https://www.esri.com/">Esri</a>, DeLorme, NAVTEQ',
    maxZoom: 13,
  }).addTo(mapInstance);

  // Camada de sombreamento de relevo semi-transparente (ESRI Hill Shade)
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Elevation/World_Hillshade/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; <a href="https://www.esri.com/">Esri</a>',
    maxZoom: 13,
    opacity: 0.35,
  }).addTo(mapInstance);

  // Camada de rótulos/rodovias por cima (OpenStreetMap)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 13,
    opacity: 0.7,
  }).addTo(mapInstance);

  // Marcadores secundários (sem interatividade)
  SECONDARY.forEach(loc => {
    L.marker([loc.lat, loc.lng], { icon: buildSecondaryIcon(loc.nome) })
      .addTo(mapInstance);
  });

  // Marcadores principais (interativos)
  LOCATIONS.forEach(loc => {
    const marker = L.marker([loc.lat, loc.lng], { icon: buildPinIcon(loc) })
      .addTo(mapInstance);

    marker.on('click', () => {
      // Remove active de todos
      Object.values(markerElements).forEach(el => el && el.classList.remove('active'));

      // Ativa o clicado
      const pinEl = document.getElementById('pin-' + loc.id);
      if (pinEl) {
        pinEl.classList.add('active');
        markerElements[loc.id] = pinEl;
      }

      // Busca dados e renderiza
      const cityData = DATA.cidades.find(c => c.id === loc.id);
      if (cityData) {
        renderCityDetailsLeaflet(cityData);
      }
    });

    // Guarda referência para uso posterior
    markerElements[loc.id] = null; // será preenchido após o DOM existir
  });

  // Abre Colossos por padrão após renderização
  setTimeout(() => {
    const pinEl = document.getElementById('pin-colossos');
    if (pinEl) pinEl.click();
    else {
      const colossos = LOCATIONS.find(l => l.id === 'colossos');
      if (colossos) {
        const cityData = DATA.cidades.find(c => c.id === 'colossos');
        if (cityData) renderCityDetailsLeaflet(cityData);
      }
    }
  }, 300);
};
