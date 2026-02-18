/**
 * Embaralha um array usando o algoritmo Fisher-Yates
 * @param {Array} array - Array a ser embaralhado
 * @returns {Array} - Novo array embaralhado
 */
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Embaralha apenas o conteúdo das alternativas, mantendo as letras (A, B, C, D, E) em ordem
 * @param {Array} alternativas - Array de alternativas com id, letra, texto, ehResposta, explicacao
 * @returns {Array} - Alternativas com conteúdo embaralhado mas letras em ordem
 */
export const shuffleAlternativasContent = (alternativas) => {
  // Extrai apenas os conteúdos (sem as letras)
  const conteudos = alternativas.map((alt) => ({
    texto: alt.texto,
    ehResposta: alt.ehResposta,
    explicacao: alt.explicacao,
  }));

  // Embaralha os conteúdos
  const conteudosEmbaralhados = shuffleArray(conteudos);

  // Reatribui os conteúdos embaralhados às letras em ordem (A, B, C, D, E...)
  const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  
  return conteudosEmbaralhados.map((conteudo, index) => ({
    id: `alt_${letras[index].toLowerCase()}`,
    letra: letras[index],
    texto: conteudo.texto,
    ehResposta: conteudo.ehResposta,
    explicacao: conteudo.explicacao,
  }));
};
