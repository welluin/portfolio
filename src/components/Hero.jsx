export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="container hero-layout">
        <div className="hero-content">

          <h1 className="hero-title">
            Создаю цифровые продукты
            <span className="gradient-text"> от идеи до реализации.</span>
          </h1>

          <p className="hero-description">
            От интерфейса до сопровождения — разрабатываю, дорабатываю и развиваю цифровые решения.
          </p>

          <div className="hero-actions">
            <a href="#portfolio" className="btn btn-primary">
              Смотреть проекты
            </a>
            <a href="#about" className="btn btn-outline">
              Мой подход
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}
