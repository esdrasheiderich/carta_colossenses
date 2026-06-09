// Dados estruturados para o Painel Interativo da Carta aos Colossenses
const DATA = {
  curiosidades: [
    {
      id: "cur-01",
      titulo: "O Monte não Escavado",
      resumo: "Colossos é uma das poucas cidades bíblicas de grande importância que ainda não foi escavada sistematicamente.",
      detalhes: "O local arqueológico de Colossos hoje é um 'tell' (mound/colina artificial) inexplorado situado no Vale do Lico, na atual Turquia. Embora saibamos sua localização exata, nenhuma grande campanha arqueológica moderna foi realizada ali. Isso se deve, em parte, à proximidade de Hierápolis e Laodicéia, que possuem ruínas muito mais visíveis e imponentes na superfície. Escavações futuras no local prometem revelar tesouros inestimáveis sobre o período helenista e o início do cristianismo.",
      imagem: "assets/colossae_tell.png",
      categoria: "Arqueologia"
    },
    {
      id: "cur-02",
      titulo: "A Importância da Lã Colossense",
      resumo: "A cidade era famosa mundialmente na antiguidade por um tipo especial de lã tingida de cor púrpura/violeta.",
      detalhes: "Colossos era famosa por sua indústria têxtil, especialmente pela lã 'colossiana' (colossinus), que possuía uma cor púrpura escura ou violeta única, obtida através de técnicas locais de tingimento utilizando fontes minerais e vegetais do Vale do Lico. Essa reputação comercial gerava grande fluxo de mercadores e riquezas, tornando a cidade um polo multicultural onde ideias religiosas do Oriente e do Ocidente se misturavam constantemente.",
      imagem: "assets/ancient_coins.png",
      categoria: "Economia e Sociedade"
    },
    {
      id: "cur-03",
      titulo: "O Terremoto Devastador de 60 d.C.",
      resumo: "Um grande sismo atingiu o Vale do Lico exatamente na época em que Paulo escrevia sua carta.",
      detalhes: "Por volta do ano 60 ou 61 d.C. (durante o reinado do imperador Nero), um terremoto catastrófico atingiu a região do Vale do Lico, devastando Laodicéia, Hierápolis e Colossos. Enquanto Laodicéia era tão rica que se reconstruiu sem ajuda financeira do senado romano (fato ironizado em Apocalipse 3:17), Colossos nunca recuperou totalmente seu tamanho e prestígio anteriores após esse sismo, entrando em declínio gradual até se tornar uma pequena vila bizantina.",
      imagem: "assets/lycus_valley.png",
      categoria: "História"
    },
    {
      id: "cur-04",
      titulo: "Epafras: O Fundador Local",
      resumo: "Paulo não fundou pessoalmente a igreja em Colossos; ela nasceu através do trabalho de Epafras.",
      detalhes: "Apesar de ser uma 'Epístola Paulina', Paulo deixa claro que nunca visitou pessoalmente as igrejas do Vale do Lico (Colossenses 2:1). O fundador da comunidade local foi Epafras, provavelmente um colossense convertido pelo ministério de Paulo em Éfeso (durante a viagem de 3 anos de Paulo descrita em Atos 19). Epafras viajou até Roma para visitar Paulo na prisão e relatar a situação da igreja, especialmente os perigos da heresia que começava a infiltrar-se na comunidade (Col 1:7-8; 4:12-13).",
      imagem: "assets/epafras.png",
      categoria: "História Bíblica"
    }
  ],
  cidades: [
    {
      id: "efeso",
      nome: "Éfeso (Ephesus)",
      localizacao: "Costa oeste da Ásia Menor (atual Turquia), na foz do rio Caíster.",
      distancia: "Fica a cerca de 180 km a oeste de Colossos.",
      referenciaBiblica: "Atos 19; Efésios; Apocalipse 2:1-7",
      contexto: "A capital e maior metrópole da província da Ásia no século I. Paulo residiu e pregou lá por três anos, tornando Éfeso o polo missionário do qual o Evangelho se espalhou por toda a província (Atos 19:10). Foi aqui que Epafras (fundador da igreja em Colossos) e Filemom se converteram sob a pregação de Paulo e levaram a fé para o Vale do Lico."
    },
    {
      id: "colossos",
      nome: "Colossos",
      localizacao: "Margem sul do rio Lico, próxima ao Monte Cadmo.",
      distancia: "Fica a cerca de 16 km a leste de Laodicéia e 180 km a leste de Éfeso.",
      referenciaBiblica: "Colossenses 1:2",
      contexto: "Era a menor das três cidades do vale no século I, mas possuía uma história mais antiga como grande fortaleza frígia. Sua população era uma mistura de gregos, frígios nativos e uma colônia de judeus. A água da cidade vinha direto do degelo do Monte Cadmo, sendo extremamente fria, refrescante e limpa, ideal para beber. Essa característica de utilidade física (água fria e potável) contrasta com a mornidão de Laodicéia."
    },
    {
      id: "laodiceia",
      nome: "Laodicéia",
      localizacao: "Planalto ao sul do rio Lico.",
      distancia: "16 km a oeste de Colossos.",
      referenciaBiblica: "Colossenses 2:1; 4:13-16; Apocalipse 3:14-22",
      contexto: "O centro administrativo e financeiro do Vale. Conhecida por sua riqueza bancária, escola de medicina e lã preta brilhante. Como não tinha fontes de água próprias, construiu aquedutos para trazer água termal de Hierápolis. Porém, a água corria por cerca de 10 km e chegava morna, sedimentada e intragável. Não servia para curar (como a quente de Hierápolis) nem para refrescar (como a fria de Colossos), servindo de metáfora para a mornidão espiritual da igreja local."
    },
    {
      id: "hierapolis",
      nome: "Hierápolis",
      localizacao: "Encosta norte do Vale do Lico.",
      distancia: "Aproximadamente 25 km a noroeste de Colossos.",
      referenciaBiblica: "Colossenses 4:13",
      contexto: "Famosa por suas fontes termais calcárias brancas (Pamukkale) e pelo 'Plutonium' (santuário pagão). Suas águas termais brotavam quentes e eram mundialmente conhecidas por propriedades terapêuticas e de cura. Essa água quente e medicinal representa uma utilidade eclesial curativa, em oposição à água fria e revigorante de Colossos."
    },
    {
      id: "monte_cadmo",
      nome: "Monte Cadmo (Honaz Dağı)",
      localizacao: "Cordilheira ao sul de Colossos, erguendo-se a mais de 2.500m.",
      distancia: "Paredão montanhoso diretamente ao sul da cidade de Colossos.",
      referenciaBiblica: "Contexto Físico e Geográfico",
      contexto: "Esta imponente cordilheira era a fonte de águas puras e geladas de Colossos, alimentada pelo derretimento da neve de seus picos. As correntes de água desciam a montanha e refrescavam os moradores do vale. Na teologia bíblica e geográfica regional, representa o frescor espiritual e a utilidade da igreja, que deve servir de refrigério aos cansados, diferentemente da água estagnada e morna."
    },
    {
      id: "fontes_quentes",
      nome: "Fontes Termais de Hierápolis",
      localizacao: "Encosta norte do Vale do Lico, atual Pamukkale.",
      distancia: "Cerca de 9 km ao norte de Laodicéia.",
      referenciaBiblica: "Contexto Físico e Clínico",
      contexto: "As águas termais de Hierápolis eram ricas em cálcio e outros minerais, brotando da terra em temperaturas elevadas. Elas formavam piscinas naturais onde pessoas de todo o Império buscavam alívio para dores físicas e doenças de pele. Na analogia das águas do Lico, a água quente simboliza cura, restauração e cuidado ativo, outra forma de utilidade eclesiástica que faltava a Laodicéia."
    }
  ],

  timeline: [
    {
      ano: "52-55 d.C.",
      titulo: "Ministério em Éfeso",
      resumo: "Paulo passa três anos ensinando na escola de Tirano em Éfeso.",
      detalhes: "Durante este longo período, a mensagem cristã se espalha por toda a província romana da Ásia Menor (Atos 19:10). Pessoas das cidades do interior, como Epafras e Filemom de Colossos, viajam para Éfeso para negócios ou estudos, convertem-se e voltam para fundar igrejas em suas cidades natais no Vale do Lico."
    },
    {
      ano: "58-60 d.C.",
      titulo: "Relato de Epafras",
      resumo: "Epafras viaja a Roma para visitar Paulo na prisão.",
      detalhes: "Ao perceber a infiltração de heresias perigosas misturando misticismo judaico, ascetismo e filosofia grega em Colossos, Epafras viaja até Roma. Ele leva um relatório sobre a fé e o amor dos colossenses, mas também manifesta grande preocupação com as falsas doutrinas (Col 1:7-8)."
    },
    {
      ano: "60-62 d.C.",
      titulo: "Redação em Roma",
      resumo: "Paulo escreve Colossenses na prisão domiciliar em Roma.",
      detalhes: "Preso sob custódia militar aguardando julgamento perante César, Paulo escreve Colossenses para combater a heresia, exaltando a supremacia absoluta de Cristo. Ele escreve simultaneamente a carta aos Efésios e a carta pessoal a Filemom (um líder da igreja de Colossos cujo escravo fugitivo, Onésimo, converteu-se com Paulo)."
    },
    {
      ano: "62 d.C.",
      titulo: "A Viagem dos Mensageiros",
      resumo: "Tíquico e Onésimo viajam de volta carregando as cartas.",
      detalhes: "Paulo envia Tíquico como seu representante pessoal para entregar as cartas aos Colossenses e a Filemom, acompanhado por Onésimo, que retorna para seu senhor já reconciliado como um irmão em Cristo (Col 4:7-9). Eles fazem a longa jornada por terra e mar de Roma até o Vale do Lico."
    }
  ],

  casosApologeticos: [
    {
      id: "caso-01",
      membro: "Aristarco de Colossos",
      avatar: "👤",
      relato: "Graça e paz, Epafras. Alguns irmãos que vieram da Judeia estão insistindo que a nossa fé em Cristo não é suficiente. Eles dizem que se nós, os gentios, não nos circuncidarmos e não guardarmos estritamente as luas novas, os sábados e as restrições alimentares da Lei de Moisés, ainda estamos impuros diante de Deus. Estou confuso, pois pensei que a nossa dívida já havia sido paga na cruz. Devo voltar a seguir estas regras e rituais para ser salvo?",
      heresiaCorreta: "Legalismo Judaico",
      opcoesHeresia: [
        "Legalismo Judaico",
        "Misticismo & Culto a Anjos",
        "Ascetismo Rígido",
        "Filosofias Pagãs (Gnosticismo)"
      ],
      passagemCorreta: "Colossenses 2:16-17",
      opcoesPassagem: [
        "Colossenses 1:15-16",
        "Colossenses 2:16-17",
        "Colossenses 2:20-22",
        "Colossenses 3:1-2"
      ],
      explicacao: "Paulo argumenta em Colossenses 2:16-17 que as festas, luas novas e sábados eram apenas 'sombras' que apontavam para o que viria. A realidade, no entanto, encontra-se em Cristo. Impor tais regras é regredir para as sombras, ignorando que Cristo cumpriu e aboliu essas exigências na cruz."
    },
    {
      id: "caso-02",
      membro: "Áfia de Laodiceia",
      avatar: "👩",
      relato: "Saudações, amados líderes. Uma irmã na comunidade disse ter tido visões celestes incríveis. Ela afirma que fomos introduzidos a um nível superior de espiritualidade. Segundo ela, para realmente agradar a Deus e ter proteção contra as forças espirituais do ar, devemos invocar e adorar os anjos e seres celestes intermediários, prestando culto a eles. Ela alega que isso é sinal de verdadeira humildade. Isso procede? As visões dela devem guiar a igreja?",
      heresiaCorreta: "Misticismo & Culto a Anjos",
      opcoesHeresia: [
        "Legalismo Judaico",
        "Misticismo & Culto a Anjos",
        "Ascetismo Rígido",
        "Filosofias Pagãs (Gnosticismo)"
      ],
      passagemCorreta: "Colossenses 2:18-19",
      opcoesPassagem: [
        "Colossenses 1:18-20",
        "Colossenses 2:8",
        "Colossenses 2:18-19",
        "Colossenses 3:5"
      ],
      explicacao: "Em Colossenses 2:18-19, Paulo condena veementemente quem se apoia em visões místicas extravagantes e na adoração de anjos. Ele adverte que esses ensinos são fruto de uma mente carnal e orgulhosa, e que a igreja deve permanecer firmemente 'unida à Cabeça', que é Cristo. Só de Cristo provém o verdadeiro crescimento espiritual."
    },
    {
      id: "caso-03",
      membro: "Onésimo",
      avatar: "🏃‍♂️",
      relato: "Irmãos, tenho buscado a santidade de todas as formas, mas o pecado continua batendo à minha porta. Alguns mestres locais me aconselharam a seguir regras rígidas de autoprivação: não tocar em certas coisas, não provar de certos alimentos e castigar o meu corpo físico através do jejum extremo e da humilhação da carne. Eles dizem que esse ascetismo rígido é o único remédio contra as paixões carnais. Esse autoflagelo realmente purifica a alma?",
      heresiaCorreta: "Ascetismo Rígido",
      opcoesHeresia: [
        "Legalismo Judaico",
        "Misticismo & Culto a Anjos",
        "Ascetismo Rígido",
        "Filosofias Pagãs (Gnosticismo)"
      ],
      passagemCorreta: "Colossenses 2:20-23",
      opcoesPassagem: [
        "Colossenses 1:21-22",
        "Colossenses 2:13-14",
        "Colossenses 2:20-23",
        "Colossenses 3:12-13"
      ],
      explicacao: "Paulo refuta o ascetismo em Colossenses 2:20-23, explicando que essas regras humanas de 'não manuseie, não prove, não toque' têm apenas 'aparência de sabedoria' por causa da pretensa religiosidade, falsa humildade e severidade com o corpo, mas não têm valor algum para refrear os impulsos da carne. A verdadeira vitória sobre o pecado vem da união com Cristo em Sua morte e ressurreição, não do castigo físico."
    },
    {
      id: "caso-04",
      membro: "Filólogo",
      avatar: "👨‍🏫",
      relato: "Graça e paz. Tenho ouvido discursos eloquentes na praça pública de Colossos. Alguns filósofos gregos estão dizendo que a matéria física é inerentemente má, e que o Cristo Divino jamais poderia ter habitado em um corpo humano real e de carne. Eles nos oferecem uma 'sabedoria superior' e especulações profundas sobre o cosmo para além do que ouvimos sobre Jesus. O evangelho de Epafras está incompleto? Precisamos dessa sabedoria grega?",
      heresiaCorreta: "Filosofias Pagãs (Gnosticismo)",
      opcoesHeresia: [
        "Legalismo Judaico",
        "Misticismo & Culto a Anjos",
        "Ascetismo Rígido",
        "Filosofias Pagãs (Gnosticismo)"
      ],
      passagemCorreta: "Colossenses 2:8-9",
      opcoesPassagem: [
        "Colossenses 1:27",
        "Colossenses 2:8-9",
        "Colossenses 2:16",
        "Colossenses 4:5-6"
      ],
      explicacao: "Em Colossenses 2:8-9, Paulo nos alerta a ter cuidado para que ninguém nos escravize a filosofias vãs e enganosas baseadas em tradições humanas e nos princípios elementares deste mundo, e não em Cristo. Ele estabelece o maior fundamento contra o proto-gnosticismo: 'porque nele habita, corporalmente, toda a plenitude da divindade'. Jesus é plenamente Deus e encarnou de forma real e perfeita."
    }
  ],

  hino: [
    {
      versiculo: "15",
      verso: "Ele é a imagem do Deus invisível, o primogênito de toda a criação,",
      exegese: "A palavra grega para imagem é 'eikon', que significa representação perfeita e manifestação visível do próprio Deus. 'Primogênito' (prototokos) não significa o primeiro criado no tempo, mas denota supremacia, herança e prioridade de soberania sobre toda a ordem criada, como o herdeiro universal."
    },
    {
      versiculo: "16a",
      verso: "pois nele foram criadas todas as coisas, nos céus e na terra, as visíveis e as invisíveis...",
      exegese: "Refuta diretamente o misticismo e as filosofias gnósticas incipientes que ensinavam que o mundo físico foi criado por divindades inferiores (demiurgos) e que o mundo invisível continha intermediários espirituais que exigiam adoração. Paulo coloca Jesus como a fonte direta de toda a criação."
    },
    {
      versiculo: "16b",
      verso: "sejam tronos ou soberanias, poderes ou autoridades; todas as coisas foram criadas por ele e para ele.",
      exegese: "Os termos 'tronos', 'soberanias', 'poderes' e 'autoridades' eram categorias angelicais e espirituais que a heresia colossense tentava cultuar. Paulo rebaixa esses seres espirituais à condição de meros subordinados de Jesus: eles foram criados por Ele e para servir ao Seu propósito divino."
    },
    {
      versiculo: "17",
      verso: "Ele é antes de todas as coisas, e nele tudo subsiste.",
      exegese: "Jesus possui preexistência eterna (Ele existia antes do universo). Ele também é o sustentador cósmico: 'subsiste' (synesteken) indica que Ele mantém o universo coeso, impedindo-o de cair no caos. O cosmos não é autossuficiente; ele depende continuamente de Cristo."
    },
    {
      versiculo: "18",
      verso: "Ele é a cabeça do corpo, que é a igreja; é o princípio e o primogênito dentre os mortos, para que em tudo tenha a supremacia,",
      exegese: "Transição da criação física para a nova criação espiritual. Como 'cabeça' (kephale), Jesus é a fonte de vida, direção e autoridade da Igreja. Ele inaugurou a ressurreição ao vencer a morte definitivamente, estabelecendo Sua supremacia absoluta em todas as dimensões da existência."
    },
    {
      versiculo: "19",
      verso: "Pois foi do agrado de Deus que nele habitasse toda a plenitude,",
      exegese: "A palavra 'plenitude' (pleroma) era um termo técnico usado por falsos mestres para descrever a soma total dos poderes e emanações divinas espalhadas pelo cosmos. Paulo afirma que a divindade não está fragmentada: 100% da plenitude de Deus habita corporalmente em Cristo Jesus."
    },
    {
      versiculo: "20",
      verso: "e por meio dele reconciliasse consigo todas as coisas, estabelecendo a paz pelo seu sangue derramado na cruz.",
      exegese: "A cruz não foi uma derrota trágica, mas o altar de reconciliação cósmica. O 'sangue derramado na cruz' é o preço físico que restabeleceu a harmonia violada pelo pecado, conectando a humanidade e o universo de volta ao Criador, destruindo a necessidade de rituais ascéticos ou intermediários místicos."
    }
  ],

  matriz: [
    {
      categoria: "Teologia e Doutrina",
      problemaColossos: "Sincretismo Religioso: Misturar o Evangelho com filosofias pagãs, misticismo oriental e tradições humanas para 'completar' a fé.",
      equivalenteModerno: "Teologia Sincretista / 'Espiritualidade Fluida': A ideia de que Jesus é bom, mas precisamos de astrologia, coaching quântico, filosofias orientais ou ativismo secular para ter plenitude.",
      solucaoCarta: "Paulo exalta que em Cristo habita a plenitude divina e que os crentes estão completos Nele, não precisando de acréscimos filosóficos ou místicos.",
      versiculo: "Colossenses 2:8-10 — 'Tenham cuidado para que ninguém os escravize a filosofias vãs e enganosas... pois em Cristo habita corporalmente toda a plenitude da divindade, e nele vocês receberam a plenitude...'"
    },
    {
      categoria: "Espiritualidade e Misticismo",
      problemaColossos: "Culto aos Anjos e Visões: Uma busca por experiências místicas extravagantes e intermediários espirituais acima do próprio Cristo.",
      equivalenteModerno: "Misticismo Gospel / Hiperespiritualização: Obsessão por revelações extra-bíblicas, anjos, profecias pessoais e experiências emocionais/extravagantes como base da comunhão.",
      solucaoCarta: "Paulo condena a soberba espiritual de quem se apoia em visões e enfatiza a necessidade de permanecer firmemente 'unida à Cabeça' que é Cristo, de quem todo o corpo recebe crescimento.",
      versiculo: "Colossenses 2:18-19 — 'Não permitam que ninguém que tenha prazer numa falsa humildade e na adoração de anjos os impeça de alcançar o prêmio... não estando unida à Cabeça...'"
    },
    {
      categoria: "Prática e Liturgia",
      problemaColossos: "Legalismo Ritualístico: Imposição de regras humanas rígidas sobre comida, bebida, festas e sábados como termômetro de espiritualidade.",
      equivalenteModerno: "Legalismo Eclesiástico / Julgamento Externo: Julgar a comunhão com Deus baseando-se em vestuário, costumes rígidos, restrições alimentares ou agendas ativistas humanas.",
      solucaoCarta: "Essas ordenanças eram apenas sombras de Cristo. A realidade é Cristo. Paulo liberta a igreja da escravidão de preceitos que têm aparência de sabedoria, mas não têm valor algum para refrear os impulsos da carne.",
      versiculo: "Colossenses 2:16-17; 23 — 'Portanto, não permitam que ninguém os julgue pelo que vocês comem ou bebem... Essas regras têm, de fato, aparência de sabedoria... mas não têm valor algum para refrear os impulsos da carne.'"
    },
    {
      categoria: "Comportamento e Estilo de Vida",
      problemaColossos: "Ascetismo e Autonegação: A crença de que castigar o corpo e evitar o mundo físico por completo gera santidade interna.",
      equivalenteModerno: "Moralismo de Aparência / Isolacionismo: A ideia de que a santidade é medida pelo afastamento puritano absoluto da sociedade ou por privações voluntárias impressionantes.",
      solucaoCarta: "A verdadeira santidade é interna e vem da ressurreição com Cristo. Devemos buscar as coisas lá de cima e fazer morrer a natureza terrena no coração, não apenas nas regras externas.",
      versiculo: "Colossenses 3:1-3; 5 — 'Portanto, visto que vocês ressuscitaram com Cristo, procurem as coisas do alto... Mantenham o pensamento nas coisas do alto, e não nas coisas terrenas... Assim, façam morrer tudo o que pertence à natureza terrena de vocês...'"
    }
  ],

  grupo: [
    { nome: "Kelry de Oliveira", funcao: "", avatar: "👩‍🎓" },
    { nome: "Milena de Souza Flores", funcao: "", avatar: "👩‍🎓" },
    { nome: "Cassiano Lamy", funcao: "", avatar: "👨‍🎓" },
    { nome: "Eduardo Alves Valério", funcao: "", avatar: "👨‍🎓" },
    { nome: "Esdras Heiderich", funcao: "", avatar: "👨‍🎓" },
    { nome: "Isaac Tavares Peixoto", funcao: "", avatar: "👨‍🎓" }
  ]
};
