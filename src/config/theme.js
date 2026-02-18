/**
 * Configuração de Tema da Aplicação
 * Altere as cores aqui para customizar a aparência de toda a aplicação
 */

export const theme = {
  // Cores Primárias
  primary: '#ff6900',      // Laranja - Elementos principais
  primaryLight: '#ffb84d', // Laranja claro - Hover/backgrounds
  primaryDark: '#e85a00',  // Laranja escuro - Estados ativos

  // Cores Secundárias
  secondary: '#fcb900',    // Amarelo - Acentos, badges
  secondaryLight: '#ffd966', // Amarelo claro
  secondaryDark: '#e6a700', // Amarelo escuro

  // Estados de Sucesso (Acertos)
  success: '#00d084',      // Verde - Resposta correta
  successLight: '#7bdcb5', // Verde claro - Background de sucesso
  successDark: '#00b870',  // Verde escuro - Border/destaque

  // Estados de Erro (Erros)
  error: '#cf2e2e',        // Vermelho - Resposta errada
  errorLight: '#f78da7',   // Vermelho claro - Background de erro
  errorDark: '#b82626',    // Vermelho escuro - Border/destaque

  // Informações e Links
  info: '#0693e3',         // Azul - Links, informações
  infoLight: '#8ed1fc',    // Azul claro - Background info
  infoDark: '#0575c7',     // Azul escuro - Hover

  // Neutras
  dark: '#1a1a1a',         // Muito escuro - Backgrounds
  darkText: '#333333',     // Texto escuro
  lightText: '#666666',    // Texto cinza
  light: '#f5f7fa',        // Fundo claro
  lighter: '#ffffff',      // Branco
  border: '#e0e0e0',       // Borders
  borderLight: '#f0f0f0',  // Borders leves

  // Gradientes úteis
  gradients: {
    primary: `linear-gradient(135deg, #ff6900 0%, #ffb84d 100%)`,
    secondary: `linear-gradient(135deg, #fcb900 0%, #ffd966 100%)`,
    success: `linear-gradient(135deg, #00d084 0%, #7bdcb5 100%)`,
    error: `linear-gradient(135deg, #cf2e2e 0%, #f78da7 100%)`,
    sky: `linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)`,
  },

  // Sombras
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.05)',
    md: '0 4px 12px rgba(0, 0, 0, 0.1)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.15)',
    xl: '0 10px 40px rgba(0, 0, 0, 0.2)',
  },

  // Espaçamentos
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    xxl: '30px',
    xxxl: '40px',
  },

  // Raio de borda padrão
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '999px',
  },
};
