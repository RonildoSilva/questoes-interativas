/**
 * Variáveis CSS Globais do Tema
 * Importar este arquivo em main.jsx para usar as variáveis em toda a aplicação
 */

import { theme } from '../config/theme.js';

// Criar um estilo global com as variáveis CSS
const themeStyles = `
:root {
  --primary: ${theme.primary};
  --primary-light: ${theme.primaryLight};
  --primary-dark: ${theme.primaryDark};
  
  --secondary: ${theme.secondary};
  --secondary-light: ${theme.secondaryLight};
  --secondary-dark: ${theme.secondaryDark};
  
  --success: ${theme.success};
  --success-light: ${theme.successLight};
  --success-dark: ${theme.successDark};
  
  --error: ${theme.error};
  --error-light: ${theme.errorLight};
  --error-dark: ${theme.errorDark};
  
  --info: ${theme.info};
  --info-light: ${theme.infoLight};
  --info-dark: ${theme.infoDark};
  
  --dark: ${theme.dark};
  --dark-text: ${theme.darkText};
  --light-text: ${theme.lightText};
  --light: ${theme.light};
  --lighter: ${theme.lighter};
  --border: ${theme.border};
  --border-light: ${theme.borderLight};
}
`;

// Injetar as variáveis CSS no documento
export const injectThemeStyles = () => {
  const styleElement = document.createElement('style');
  styleElement.textContent = themeStyles;
  document.head.appendChild(styleElement);
};

export default themeStyles;
