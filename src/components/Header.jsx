export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <a href="#top" className="logo">
          portfolio.
        </a>

        <nav className="nav-menu">
          <a href="#services">Навыки</a>
          <a href="#portfolio">Проекты</a>
          <a href="#process">Обо мне</a>
          <a href="#contact">Контакты</a>
        </nav>

        <a href="#contact" className="btn btn-secondary btn-sm">
          Связаться
        </a>
      </div>
    </header>
  );
}
