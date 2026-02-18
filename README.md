# Sistema Interativo de Questões de Estudo

Um sistema web interativo para prática de questões, desenvolvido com React e Vite.

## 🎯 Features

- ✅ **Questões Dinâmicas** - Sistema genérico compatível com qualquer disciplina
- ✅ **Questões Embaralhadas** - Ordem aleatória a cada sessão
- ✅ **Alternativas Embaralhadas** - Conteúdo aleatório mantendo letras A-B-C-D-E em ordem
- ✅ **Resposta Única ou Múltipla** - Suporta questões com diferentes tipos
- ✅ **Resposta Imediata** - Clique na alternativa muda de cor instantaneamente
- ✅ **Explicações Inline** - Botão 📋 expande/colapsa explicação por alternativa
- ✅ **Feedback Visual** - Verde ✓ (correta), Vermelho ✗ (errada), Cinza (ignorada)
- ✅ **Imagens Flexíveis** - Questões podem ter 0, 1 ou múltiplas imagens
- ✅ **Navegação Intuitiva** - Avançar/voltar entre questões respondidas
- ✅ **Barra de Progresso** - Acompanhamento visual com badge "✓ Respondida"
- ✅ **Header Customizável** - Logo com 33% da largura e título configurável
- ✅ **Tema em Cores** - Sistema de cores baseado em CSS variables
- ✅ **Responsivo** - Funciona em desktop, tablet e mobile

## 🚀 Primeiros Passos

### Requisitos
- Node.js 16.0 ou superior
- npm ou yarn

### Instalação

```bash
# Instalar dependências (já feito)
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

O projeto estará disponível em `http://localhost:5173/`

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Questao.jsx           # Renderiza a questão
│   ├── Questao.css
│   ├── Alternativas.jsx       # Renderiza as alternativas
│   ├── Alternativas.css
│   ├── Navegacao.jsx          # Renderiza navegação
│   ├── Navegacao.css
│   ├── ModalExplicacao.jsx    # Modal com explicações
│   └── ModalExplicacao.css
├── data/
│   └── questoes.js            # Base de dados das questões
├── utils/
│   └── shuffleUtils.js        # Utilitário para embaralhar arrays
├── App.jsx                    # Componente principal
├── App.css
├── main.jsx
└── index.css
```

## 📊 Estrutura de Dados das Questões

Cada questão segue a seguinte estrutura:

```javascript
{
  id: "q001",                          // ID único da questão
  area: "Redes",                       // Área do conhecimento
  sub_area: "TCP/IP",                  // Subaréa (opcional)
  numero: 1,                           // Número da questão
  tipo: "unica",                       // "unica" ou "multipla"
  enunciado: "Qual é o protocolo...",  // Texto da questão
  imagens: [                           // Array de imagens (opcional)
    {
      id: "img1",
      url: "/images/diagram.png",
      alt: "Descrição",
      legenda: "Legenda"
    }
  ],
  alternativas: [                      // Array de alternativas
    {
      id: "alt_a",
      letra: "A",
      texto: "TCP/IP",
      ehResposta: true
    },
    // ... mais alternativas
  ],
  justificativa: "A resposta correta é...", // Explicação
  referencias: ["RFC 791", "Livro X"],      // Referências (opcional)
  dificuldade: "media",                     // facil, media, dificil
  ano: 2023                                 // Ano
}
```

## 🔄 Fluxo de Funcionamento

1. **Carregamento** - Questões são embaralhadas; primeira é exibida com alternativas em ordem aleatória
2. **Seleção** - Usuário clica em uma alternativa
3. **Feedback Imediato** - A alternativa muda de cor (verde/vermelho) e todas as alternativas são coloridas:
   - 🟢 Verde = Resposta correta
   - 🔴 Vermelho = Resposta selecionada (se errada)
   - ⚫ Cinza = Alternativas posteriores incorretas (não selecionadas)
4. **Explicações** - Botão 📋 aparece em cada alternativa para expandir/colapsar explicação
5. **Próxima** - Usuário só avança ao responder (botão habilitado em questão respondida)
6. **Navegação** - Pode voltar para questões anteriores; respostas são preservadas

## 🎨 Personalizações

### Configuração do App

Edite `src/App.jsx` (linhas 15-17):

```javascript
const APP_TITULO = 'Questões de Estudo'; // Mude o título
const APP_IMAGEM = '/logo.webp';                 // URL da logo (deixar vazio para emoji)
```

### Adicionar Novas Questões

Edite o arquivo `src/data/questoes.js`:

```javascript
export const questoes = [
  // ... questões existentes
  {
    id: "q005",
    area: "Redes",
    numero: 5,
    tipo: "unica",
    enunciado: "Nova questão aqui...\n\nCom quebras de linha se precisar",
    imagens: [
      {
        id: "fig-1",
        url: "/images/questao-5.png",  // ou deixar vazio para não renderizar
        alt: "Descrição",
        legenda: "Figura 1.1"
      }
    ],
    alternativas: [
      {
        id: "alt_a",
        letra: "A",
        texto: "Opção A",
        ehResposta: false,
        explicacao: "Por que está errada..."
      },
      {
        id: "alt_b",
        letra: "B",
        texto: "Opção B",
        ehResposta: true,
        explicacao: "Por que está correta..."
      }
      // ... mais alternativas
    ],
    justificativa: "Explicação completa da questão",
    referencias: ["Referência 1", "Referência 2"],
    dificuldade: "media",
    ano: 2024
  }
];
```

### Colocar Imagens

1. Crie o diretório `public/images/` (se não existir)
2. Coloque suas imagens lá (exemplo: `public/images/questao-5.png`)
3. Referencie como `/images/nome-da-imagem.png` no arquivo `questoes.js`
4. Se `url` estiver vazio, a imagem não será renderizada

### Mudar Estilos e Cores

- **Tema de Cores**: Edite `src/config/theme.js` (primary, secondary, success, error, etc.)
- **Aplicar Tema**: As cores são injetadas como CSS variables automaticamente
- **Estilos Globais**: Edite `src/App.css` e `src/index.css`
- **Componentes Individuais**: Edite os arquivos `.css` correspondentes

Veja `CUSTOMIZAR_CORES.md` para guia completo de personalização

## 🔌 Integração com Banco de Dados

O projeto está preparado para integração com APIs/bancos de dados:

1. Crie uma API que retorna questões no mesmo formato (veja estrutura acima)
2. Em `src/App.jsx`, substitua o import de `questoes.js` por uma chamada fetch
3. Salve progressos do usuário no BD (respostas são armazenadas em `respostas` state)

Exemplo:

```javascript
const [questoesEmbaralhadas, setQuestoesEmbaralhadas] = useState([]);

useEffect(() => {
  fetch('/api/questoes')
    .then(res => res.json())
    .then(data => setQuestoesEmbaralhadas(shuffleArray(data)));
}, []);
```

## 📱 Responsividade

O projeto é totalmente responsivo:
- **Desktop**: Layout completo com máxima usabilidade, logo 33% da largura
- **Tablet**: Ajustado para telas médias, logo 40% da largura
- **Mobile**: Adapta todos os componentes para telas pequenas

Testes realizados em resolução mínima de 320px (mobile) até 1920px (desktop)

## 🛠️ Tecnologias

- **React** 18.x - Framework UI
- **Vite** 7.x - Build tool
- **CSS3** - Estilos modernos com Flexbox e Grid

## 📝 Licença

Este projeto é de código aberto. Use livremente!

## 🤝 Contribuições

Para adicionar questões, melhorias ou correções:
1. Edite os arquivos correspondentes
2. Teste localmente
3. Verifique se não há erros

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique se todas as dependências estão instaladas
2. Certifique-se de que o Node.js é a versão correta
3. Limpe o cache: `rm -rf node_modules && npm install`

---

