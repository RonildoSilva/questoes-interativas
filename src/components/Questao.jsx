import './Questao.css';

export function Questao({ questao, numeroQuestao }) {
  return (
    <div className="questao-container">
      <div className="questao-header">
        <span className="area-badge">{questao.area}</span>
        {questao.sub_area && <span className="sub-area-badge">{questao.sub_area}</span>}
        <span className={`tipo-badge ${questao.tipo}`}>
          {questao.tipo === 'unica' ? 'Resposta Única' : 'Múltipla Escolha'}
        </span>
      </div>

      <div className="questao-numero">Questão {numeroQuestao}</div>

      <div className="questao-enunciado">
        <p>{questao.enunciado}</p>
      </div>

      {questao.imagens && questao.imagens.length > 0 && (
        <div className="questao-imagens">
          {questao.imagens.map((img) => (
            img.url && (
              <figure key={img.id} className="imagem-container">
                <img src={img.url} alt={img.alt} className="questao-img" />
                {img.legenda && <figcaption>{img.legenda}</figcaption>}
              </figure>
            )
          ))}
        </div>
      )}
    </div>
  );
}
