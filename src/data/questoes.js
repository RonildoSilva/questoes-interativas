export const questoes = [
  {
    id: "q005",
    area: "Redes",
    sub_area: "Arquitetura",
    numero: 5,
    tipo: "unica",
    enunciado: "O progresso tecnológico permitiu a transição de sistemas computacionais centralizados para modelos interconectados. No entanto, a literatura técnica estabelece distinções fundamentais entre redes de computadores e sistemas distribuídos.\n\n\n\nConsiderando as características desses sistemas apresentadas por Tanenbaum, avalie as afirmações a seguir:\n\nI. Em um sistema distribuído, o conjunto de computadores independentes aparece para os usuários como um único sistema coerente, frequentemente implementado por uma camada de software chamada middleware.\nII. Nas redes de computadores, a coerência e o modelo de software único estão presentes, permitindo que o sistema operacional oculte a existência de hardware distinto.\nIII. A principal diferença entre os dois sistemas reside no software (especialmente no sistema operacional), e não necessariamente na topologia do hardware.\nIV. A World Wide Web é um exemplo de sistema distribuído que opera sobre a Internet, apresentando um modelo onde tudo tem a aparência de um documento (página Web).\n\nÉ correto o que se afirma em:",
    imagens: [  
        {
        id: "fig-1-1",
        url: "",//"/images/q005.png",
        alt: "Descrição da imagem para acessibilidade",
        legenda: "Figura 1.1, pág. 2"
    }],
    alternativas: [
      {
        id: "alt_a",
        letra: "A",
        texto: "I e II, apenas.",
        ehResposta: false,
        explicacao: "A afirmação II está incorreta. Em uma rede de computadores, a coerência está ausente e os usuários ficam expostos às máquinas reais."
      },
      {
        id: "alt_b",
        letra: "B",
        texto: "I e IV, apenas.",
        ehResposta: false,
        explicacao: "Embora I e IV estejam corretas, a afirmação III também é verdadeira segundo o autor."
      },
      {
        id: "alt_c",
        letra: "C",
        texto: "II e III, apenas.",
        ehResposta: false,
        explicacao: "A afirmação II invalida esta opção, pois redes de computadores não possuem um modelo de software único que oculta o hardware."
      },
      {
        id: "alt_d",
        letra: "D",
        texto: "I, III e IV, apenas.",
        ehResposta: true,
        explicacao: "Sistemas distribuídos buscam transparência via middleware (I), a distinção é definida pelo software (III) e a WWW é o exemplo clássico de sistema distribuído sobre a rede (IV)."
      },
      {
        id: "alt_e",
        letra: "E",
        texto: "I, II, III e IV.",
        ehResposta: false,
        explicacao: "A afirmação II é falsa; em redes de computadores, se as máquinas tiverem hardware distinto, isso é visível para o usuário."
      }
    ],
    justificativa: "Segundo Tanenbaum, a principal diferença entre redes e sistemas distribuídos é a forma como o software organiza o sistema (coesão e transparência). Sistemas distribuídos parecem sistemas únicos (I), enquanto em redes a autonomia das máquinas é visível (III e IV).",
    referencias: ["Tanenbaum, pág. 1-2"],
    dificuldade: "media",
    ano: 2026
  },
  {
    id: "q006",
    area: "Redes",
    sub_area: "Modelos de Referência",
    numero: 6,
    tipo: "unica",
    enunciado: "A respeito da comparação entre os modelos de referência OSI e TCP/IP, analise as asserções a seguir e a relação proposta entre elas:\n\nI. O modelo de referência OSI tornou-se a arquitetura dominante em implementações reais e comerciais, superando a pilha TCP/IP devido à sua perfeição técnica.\n\nPORQUE\n\nII. O modelo OSI foi concebido antes da criação de seus protocolos, o que permitiu uma distinção clara e conceitual entre os serviços, as interfaces e os protocolos de cada camada.\n\nA respeito dessas asserções, assinale a opção correta:",
    imagens: ["Figura 1.21, pág. 32"],
    alternativas: [
      {
        id: "alt_a",
        letra: "A",
        texto: "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.",
        ehResposta: false,
        explicacao: "A asserção I é falsa. O modelo OSI falhou comercialmente frente ao TCP/IP."
      },
      {
        id: "alt_b",
        letra: "B",
        texto: "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.",
        ehResposta: false,
        explicacao: "Novamente, a asserção I não é verdadeira no contexto histórico e comercial."
      },
      {
        id: "alt_c",
        letra: "C",
        texto: "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
        ehResposta: false,
        explicacao: "Inverte a realidade: I é falsa e II é verdadeira."
      },
      {
        id: "alt_d",
        letra: "D",
        texto: "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
        ehResposta: true,
        explicacao: "Historicamente, o OSI falhou comercialmente (I falsa), mas tecnicamente foi o primeiro a separar formalmente serviços, interfaces e protocolos (II verdadeira)."
      },
      {
        id: "alt_e",
        letra: "E",
        texto: "As asserções I e II são proposições falsas.",
        ehResposta: false,
        explicacao: "A asserção II é verdadeira; essa é considerada a maior contribuição do modelo OSI para a teoria de redes."
      }
    ],
    justificativa: "Tanenbaum explica que o modelo OSI falhou por 'momento ruim' e 'tecnologia ruim' (I falsa). Entretanto, sua contribuição teórica ao separar o 'que' uma camada faz (serviço) de 'como' ela faz (protocolo) é amplamente reconhecida (II verdadeira).",
    referencias: ["Tanenbaum, pág. 30-32"],
    dificuldade: "dificil",
    ano: 2026
  },
  {
    id: "q007",
    area: "Redes",
    sub_area: "Hardware",
    numero: 7,
    tipo: "unica",
    enunciado: "A classificação de redes de computadores baseia-se em dimensões como tecnologia de transmissão e escala. Com base na taxonomia apresentada por Tanenbaum, julgue as afirmações abaixo:\n\nI. Redes de broadcast possuem um único canal de comunicação compartilhado; um campo de endereço no pacote especifica o destinatário, fazendo com que as outras máquinas ignorem a transmissão.\nII. As redes metropolitanas (MAN) abrangem tipicamente um país ou continente, enquanto as redes a longas distâncias (WAN) são restritas a um campus.\nIII. O Bluetooth é um exemplo de rede pessoal (PAN) que utiliza o paradigma mestre-escravo para interconectar dispositivos próximos ao usuário.\nIV. Nas redes ponto a ponto, as mensagens (pacotes) podem visitar máquinas intermediárias e utilizar algoritmos de roteamento para encontrar o melhor caminho da origem ao destino.\n\nÉ correto o que se afirma em:",
    imagens: ["Figura 1.4, pág. 11"],
    alternativas: [
      {
        id: "alt_a",
        letra: "A",
        texto: "I e II, apenas.",
        ehResposta: false,
        explicacao: "A afirmação II está incorreta; MAN cobre uma cidade e WAN cobre países/continentes."
      },
      {
        id: "alt_b",
        letra: "B",
        texto: "III e IV, apenas.",
        ehResposta: false,
        explicacao: "Embora III e IV estejam corretas, a afirmação I também é uma descrição válida de broadcast."
      },
      {
        id: "alt_c",
        letra: "C",
        texto: "I, II e III, apenas.",
        ehResposta: false,
        explicacao: "A afirmação II invalida a opção por trocar as escalas de MAN e WAN."
      },
      {
        id: "alt_d",
        letra: "D",
        texto: "I, III e IV, apenas.",
        ehResposta: true,
        explicacao: "Broadcast envia para todos mas apenas o dono do endereço processa (I), Bluetooth é PAN (III) e ponto a ponto exige roteamento (IV)."
      },
      {
        id: "alt_e",
        letra: "E",
        texto: "II, III e IV, apenas.",
        ehResposta: false,
        explicacao: "A afirmação II está factualmente errada quanto à escala geográfica."
      }
    ],
    justificativa: "A escala das redes é definida pela distância: PAN (1m), LAN (10m-1km), MAN (10km) e WAN (100km+). A afirmação II troca os conceitos de MAN e WAN.",
    referencias: ["Tanenbaum, pág. 10-11"],
    dificuldade: "media",
    ano: 2026
  },
  {
    id: "q008",
    area: "Redes",
    sub_area: "Protocolos",
    numero: 8,
    tipo: "unica",
    enunciado: "No modelo cliente-servidor, a comunicação é orquestrada através de primitivas de serviço que permitem a interação entre processos em diferentes máquinas. Considere um serviço orientado a conexões onde o servidor executa `LISTEN`, `ACCEPT`, `RECEIVE` e `SEND`. Analise as seguintes proposições:\n\nI. A primitiva `LISTEN` é geralmente uma chamada de bloqueio que suspende o processo servidor até que surja uma solicitação de conexão.\nII. A primitiva `CONNECT` é executada pelo cliente para iniciar o estabelecimento da conexão.\nIII. A primitiva `ACCEPT` é utilizada pelo cliente para confirmar que recebeu a réplica de dados enviada pelo servidor.\nIV. O encerramento da conexão ocorre quando ambas as máquinas emitem a primitiva `DISCONNECT`.\n\nÉ correto o que se afirma em:",
    imagens: ["Figura 1.15, pág. 24"],
    alternativas: [
      {
        id: "alt_a",
        letra: "A",
        texto: "I e III, apenas.",
        ehResposta: false,
        explicacao: "A afirmação III está errada. ACCEPT é usada pelo servidor para aceitar a conexão, não pelo cliente para confirmar dados."
      },
      {
        id: "alt_b",
        letra: "B",
        texto: "II e IV, apenas.",
        ehResposta: false,
        explicacao: "Embora II e IV estejam corretas, a afirmação I também descreve corretamente a primitiva LISTEN."
      },
      {
        id: "alt_c",
        letra: "C",
        texto: "I, II e IV, apenas.",
        ehResposta: true,
        explicacao: "LISTEN aguarda a conexão (I), CONNECT inicia a partir do cliente (II) e DISCONNECT é o encerramento em ambas as pontas (IV)."
      },
      {
        id: "alt_d",
        letra: "D",
        texto: "II, III e IV, apenas.",
        ehResposta: false,
        explicacao: "A afirmação III invalida a questão por atribuir o ACCEPT ao cliente de forma equivocada."
      },
      {
        id: "alt_e",
        letra: "E",
        texto: "I, II, III e IV.",
        ehResposta: false,
        explicacao: "A afirmação III é falsa; o servidor aceita a conexão, o cliente a solicita."
      }
    ],
    justificativa: "As primitivas de serviço formam a interface entre camadas. No modelo cliente-servidor simplificado, o servidor escuta (LISTEN) e aceita (ACCEPT), enquanto o cliente conecta (CONNECT). O encerramento (DISCONNECT) exige ação de ambos.",
    referencias: ["Tanenbaum, pág. 23-24"],
    dificuldade: "media",
    ano: 2026
  },
  {
    id: "q009",
    area: "Redes",
    sub_area: "Modelos de Referência",
    numero: 9,
    tipo: "unica",
    enunciado: "O modelo de referência usado neste livro propõe uma hierarquia de 5 camadas. Sobre o processo de encapsulamento e o fluxo de dados entre os níveis, avalie as afirmações:\n\nI. A camada de transporte (TCP) fortalece as garantias de entrega da camada de rede, oferecendo abstrações como fluxos de bytes confiáveis.\nII. Na máquina de destino, os cabeçalhos das camadas inferiores são retirados antes que os dados sejam passados à camada superior (n).\nIII. O encapsulamento ocorre quando uma camada n divide a mensagem da camada superior e anexa seu próprio cabeçalho (H_n).\nIV. A comunicação real entre entidades pares na camada 4 ocorre diretamente de forma horizontal, sem passar pelas camadas 1, 2 e 3.\n\nÉ correto o que se afirma em:",
    imagens: ["Figura 1.13, pág. 20"],
    alternativas: [
      {
        id: "alt_a",
        letra: "A",
        texto: "I, II e III, apenas.",
        ehResposta: true,
        explicacao: "Transporte gera confiabilidade (I), destino remove cabeçalhos (II) e encapsulamento adiciona metadados (III). A IV é falsa porque a comunicação física é sempre vertical."
      },
      {
        id: "alt_b",
        letra: "B",
        texto: "I, II e IV, apenas.",
        ehResposta: false,
        explicacao: "A afirmação IV é conceitualmente errada; a comunicação horizontal é virtual, não física."
      },
      {
        id: "alt_c",
        letra: "C",
        texto: "II, III e IV, apenas.",
        ehResposta: false,
        explicacao: "A inclusão da afirmação IV torna a alternativa incorreta."
      },
      {
        id: "alt_d",
        letra: "D",
        texto: "I e IV, apenas.",
        ehResposta: false,
        explicacao: "A afirmação IV é um erro comum de interpretação sobre o modelo de camadas."
      },
      {
        id: "alt_e",
        letra: "E",
        texto: "I, II, III e IV.",
        ehResposta: false,
        explicacao: "A afirmação IV está errada. Sem o meio físico (camada 1), nenhuma comunicação ocorre entre as máquinas."
      }
    ],
    justificativa: "O encapsulamento garante que cada camada adicione seu controle (cabeçalho) no envio e remova no recebimento (I, II e III). A comunicação horizontal entre pares é uma abstração (virtual), pois os dados devem descer toda a pilha física para serem transmitidos (IV falsa).",
    referencias: ["Tanenbaum, pág. 18-20, 30"],
    dificuldade: "dificil",
    ano: 2026
  }
];