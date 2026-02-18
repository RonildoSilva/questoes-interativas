import { useState } from 'react';
import './Alternativas.css';

export function Alternativas({
  alternativas,
  tipo,
  selecionadas,
  onSelecionar,
  desabilitado = false,
  mostrarRespasta = false,
  respondida = false,
}) {
  const [expandedAlt, setExpandedAlt] = useState(null);

  const handleClick = (altId) => {
    if (desabilitado) return;

    if (tipo === 'unica') {
      // Para resposta única, sempre substitui a seleção
      onSelecionar([altId]);
    } else {
      // Para múltipla escolha, alterna a seleção
      if (selecionadas.includes(altId)) {
        onSelecionar(selecionadas.filter((id) => id !== altId));
      } else {
        onSelecionar([...selecionadas, altId]);
      }
    }
  };

  const toggleExplanacao = (altId, e) => {
    e.stopPropagation();
    setExpandedAlt(expandedAlt === altId ? null : altId);
  };

  return (
    <div className="alternativas-container">
      <p className="alternativas-label">
        {tipo === 'unica' ? 'Selecione a alternativa correta:' : 'Selecione as alternativas corretas:'}
      </p>

      <div className="alternativas-lista">
        {alternativas.map((alt) => {
          const isSelected = selecionadas.includes(alt.id);
          const isCorreta = alt.ehResposta;
          const mostrarCorreta = mostrarRespasta && isCorreta;
          const mostrarErrada = mostrarRespasta && isSelected && !isCorreta;
          const mostrarIncorretaNaoSelecionada = mostrarRespasta && !isCorreta && !isSelected;
          const isExpanded = expandedAlt === alt.id;

          return (
            <div key={alt.id} className="alternativa-wrapper">
              <div className="alternativa-row">
                <button
                  className={`alternativa ${isSelected ? 'selecionada' : ''} ${
                    mostrarCorreta ? 'correta' : ''
                  } ${mostrarErrada ? 'errada' : ''} ${
                    mostrarIncorretaNaoSelecionada ? 'incorreta-nao-selecionada' : ''
                  }`}
                  onClick={() => handleClick(alt.id)}
                  disabled={desabilitado}
                >
                  <span className="alternativa-letra">{alt.letra}</span>
                  <span className="alternativa-texto">{alt.texto}</span>
                  {mostrarCorreta && <span className="icone-correto">✓</span>}
                  {mostrarErrada && <span className="icone-errado">✗</span>}
                </button>
                {respondida && alt.explicacao && (
                  <button
                    className="btn-explicacao"
                    onClick={(e) => toggleExplanacao(alt.id, e)}
                    title="Ver explicação"
                  >
                    📋
                  </button>
                )}
              </div>
              {respondida && alt.explicacao && isExpanded && (
                <div className={`alternativa-explicacao ${isCorreta ? 'correta' : 'incorreta'}`}>
                  <p className="explicacao-label">
                    {isCorreta ? '✓ Por que é correta:' : '✗ Por que é incorreta:'}
                  </p>
                  <p className="explicacao-texto">{alt.explicacao}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
