import './ModalExplicacao.css';

export function ModalExplicacao({
  isOpen,
  questao,
  respostaCorreta,
  selecionadas,
  onFechar,
}) {
  if (!isOpen || !questao) return null;

  const todasAsRespostasCorretas =
    questao.tipo === 'unica'
      ? selecionadas.length === 1 && questao.alternativas.find((alt) => alt.id === selecionadas[0])?.ehResposta
      : selecionadas.every((id) =>
          questao.alternativas.find((alt) => alt.id === id)?.ehResposta
        ) &&
        questao.alternativas.filter((alt) => alt.ehResposta).length === selecionadas.length;

  return (
    <div className="modal-overlay" onClick={onFechar}>
      <div className="modal-conteudo" onClick={(e) => e.stopPropagation()}>
        <button className="modal-fechar" onClick={onFechar} title="Fechar">
          ✕
        </button>

        <div className={`modal-result ${todasAsRespostasCorretas ? 'acertou' : 'errou'}`}>
          <h2>{todasAsRespostasCorretas ? '✓ Parabéns!' : '✗ Resposta Incorreta'}</h2>
          <p>{todasAsRespostasCorretas ? 'Você acertou esta questão!' : 'Você errou esta questão.'}</p>
        </div>

        <div className="modal-explicacao">
          <h3>Explicação:</h3>
          <p>{questao.justificativa}</p>

          {questao.referencias && questao.referencias.length > 0 && (
            <div className="modal-referencias">
              <h4>Referências:</h4>
              <ul>
                {questao.referencias.map((ref, idx) => (
                  <li key={idx}>{ref}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal-dificuldade">
            <span className="dificuldade-label">Dificuldade:</span>
            <span className={`dificuldade-nivel ${questao.dificuldade}`}>
              {questao.dificuldade.charAt(0).toUpperCase() + questao.dificuldade.slice(1)}
            </span>
            <span className="dificuldade-label">ENADE {questao.ano}</span>
          </div>
        </div>

        <button className="modal-fechar-btn" onClick={onFechar}>
          Entendi
        </button>
      </div>
    </div>
  );
}
