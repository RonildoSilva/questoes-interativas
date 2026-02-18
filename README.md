# Sistema Interativo de Questões de Estudo

Um sistema web interativo para prática de questões, desenvolvido com React e Vite.

## 🎯 Features

✅ **Questões Dinâmicas** - Sistema genérico compatível com qualquer disciplina
✅ **Alternativas Embaralhadas** - Cada questão apresenta alternativas em ordem aleatória
✅ **Resposta Única ou Múltipla** - Suporta questões com diferentes tipos
✅ **Imagens Flexíveis** - Questões podem ter 0, 1 ou múltiplas imagens
✅ **Modal de Explicação** - Feedback imediato com justificativa detalhada
✅ **Navegação Intuitiva** - Setas para avançar/voltar entre questões
✅ **Barra de Progresso** - Acompanhamento visual do progresso
✅ **Validação Automática** - Sistema valida respostas automaticamente
✅ **Responsivo** - Funciona em desktop, tablet e mobile

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

1. **Carregamento** - A primeira questão é carregada com alternativas embaralhadas
2. **Seleção** - Usuário seleciona alternativa(s) e clica em "Confirmar Resposta"
3. **Feedback** - Modal aparece com resultado e explicação
4. **Próxima** - Usuário avança para próxima questão
5. **Navegação** - Pode voltar para questões anteriores a qualquer momento

## 🎨 Personalizações

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
    enunciado: "Nova questão aqui...",
    imagens: [],
    alternativas: [
      // ... 
    ],
    justificativa: "...",
    dificuldade: "facil",
    ano: 2024
  }
];
```

### Mudar Estilos

- Cores e gradientes: Edite `src/App.css`
- Estilos globais: Edite `src/index.css`
- Estilos dos componentes: Edite os arquivos `.css` correspondentes

## 🔌 Integração com Banco de Dados

O projeto está preparado para integração com bancos de dados NoSQL (MongoDB, Firebase, etc.):

1. Crie uma API que retorna questões no mesmo formato
2. Substitua o import de `questoes.js` por uma chamada fetch
3. Salve progressos do usuário no BD

Exemplo:

```javascript
const [questoes, setQuestoes] = useState([]);

useEffect(() => {
  fetch('/api/questoes')
    .then(res => res.json())
    .then(data => setQuestoes(data));
}, []);
```

## 📱 Responsividade

O projeto é totalmente responsivo:
- **Desktop**: Layout completo com máxima usabilidade
- **Tablet**: Ajustado para telas médias
- **Mobile**: Adapta todos os componentes para telas pequenas

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
