import './Header.css';

export function Header({ titulo, imagem }) {
  return (
    <div className="app-header">
      <div className="header-banner">
        {imagem ? (
          <img src={imagem} alt="Logo" className="header-banner-img" />
        ) : (
          <div className="header-placeholder">📷</div>
        )}
      </div>

      <div className="header-info">
        <h1>{titulo}</h1>
      </div>
    </div>
  );
}
