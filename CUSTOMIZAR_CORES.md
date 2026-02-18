# 🎨 Customização de Cores

## Como Mudar as Cores da Aplicação

Todas as cores da aplicação estão centralizadas em um único arquivo para facilitar a customização.

### Arquivo de Configuração

Edit o arquivo: **`src/config/theme.js`**

## Cores Disponíveis

### Cores Primárias
```javascript
primary: '#ff6900'      // Cor principal (laranja)
primaryLight: '#ffb84d' // Versão clara
primaryDark: '#e85a00'  // Versão escura
```
**Usada em:** Botões principais, header, barra de progresso

### Cores Secundárias
```javascript
secondary: '#fcb900'    // Cor secundária (amarelo)
secondaryLight: '#ffd966'
secondaryDark: '#e6a700'
```
**Usada em:** Badges, acentos

### Estados de Sucesso (Acertos)
```javascript
success: '#00d084'      // Verde - Resposta correta
successLight: '#7bdcb5' // Verde claro - Backgrounds
successDark: '#00b870'  // Verde escuro - Borders
```
**Usada em:** Feedback de respostas corretas, modais

### Estados de Erro (Erros)
```javascript
error: '#cf2e2e'        // Vermelho - Resposta errada
errorLight: '#f78da7'   // Vermelho claro - Backgrounds
errorDark: '#b82626'    // Vermelho escuro - Borders
```
**Usada em:** Feedback de respostas erradas, modals

### Informações e Links
```javascript
info: '#0693e3'         // Azul - Links
infoLight: '#8ed1fc'    // Azul claro - Backgrounds
infoDark: '#0575c7'     // Azul escuro - Hover
```
**Usada em:** Links, informações adicionais

### Cores Neutras
```javascript
dark: '#1a1a1a'         // Muito escuro
darkText: '#333333'     // Texto escuro
lightText: '#666666'    // Texto cinza
light: '#f5f7fa'        // Fundo claro
lighter: '#ffffff'      // Branco
border: '#e0e0e0'       // Borders
borderLight: '#f0f0f0'  // Borders leves
```

## Exemplos de Customização

### Exemplo 1: Mudar para Azul
```javascript
primary: '#0693e3',
primaryLight: '#8ed1fc',
primaryDark: '#0575c7',
```

### Exemplo 2: Mudar para Verde
```javascript
primary: '#00d084',
primaryLight: '#7bdcb5',
primaryDark: '#00b870',
```

### Exemplo 3: Mudar para Roxo
```javascript
primary: '#764ba2',
primaryLight: '#9c7fbf',
primaryDark: '#5a3880',
```

## Distribuição das Cores na Aplicação

### Header
- **Logo container:** Bordas em branco com fundo semi-transparente
- **Título e subtitle:** Branco

### Questão
- **Background:** Gradiente de primary + primaryLight
- **Texto:** Branco

### Alternativas
- **Border esquerdo do container:** primary
- **Letra da alternativa:** primary
- **Alternativa correta:** success + successLight
- **Alternativa errada:** error + errorLight

### Navegação
- **Botão Próxima:** primary e primaryDark no hover
- **Barra de progresso:** Gradiente primary → primaryLight

### Modal
- **Resultado acertado:** successLight background com success text
- **Resultado errado:** errorLight background with error text
- **Botão Confirmar:** primary

### Dificuldade
- **Fácil:** success
- **Média:** secondary
- **Difícil:** error

## Como Funciona a Injeção de Cores

As cores do `theme.js` são automaticamente convertidas em **variáveis CSS** e injetadas no `<head>` do documento. Isso permite:

✅ Usar as cores em **qualquer arquivo CSS** com `var(--primary)`
✅ Mudar uma cor e **todos os componentes atualizam automaticamente**
✅ Não precisa recompilação, é **totalmente dinâmico**

## Acesso às Cores em Componentes

Se você precisar acessar as cores em **JavaScript**, importe o tema:

```javascript
import { theme } from './config/theme';

// Usar a cor
const corPrincipal = theme.primary; // #ff6900
```

---

**Dica:** Mantenha coerência Visual! Geralmente:
- Primary: Cor mais vibrante/chamativa
- Success: Verde
- Error: Vermelho
- Secondary: Amarelo ou outra cor complementar
