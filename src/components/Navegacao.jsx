import './Navegacao.css';

export function Navegacao({
  questaoAtual,
  totalQuestoes,
  onAnterior,
  onProxima,
  temResposta,
  respostasFeitas = {},
}) {
  const jaFoiRespondida = Object.keys(respostasFeitas).length > 0;

  return (
    <div className="navegacao-container">
      <button
        className="btn-nav btn-anterior"
        onClick={onAnterior}
        disabled={questaoAtual === 0}
        title="Questão anterior"
      >
        ← Anterior
      </button>

      <div className="progresso">
        <span className="questao-info">
          Questão {questaoAtual + 1} de {totalQuestoes}
          {jaFoiRespondida && <span className="respondida-badge">✓ Respondida</span>}
        </span>
        <div className="progresso-bar">
          <div
            className="progresso-fill"
            style={{
              width: `${((questaoAtual + 1) / totalQuestoes) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      <button
        className="btn-nav btn-proxima"
        onClick={onProxima}
        disabled={questaoAtual === totalQuestoes - 1 || !temResposta}
        title={!temResposta ? 'Selecione uma resposta antes de avançar' : 'Próxima questão'}
      >
        Próxima →
      </button>
    </div>
  );
}
