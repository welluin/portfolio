export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">ИЗБРАННЫЕ РАБОТЫ</span>
          <h2>Проекты и эксперименты</h2>
          <p>
            Практика, в которой я изучаю технологии и превращаю идеи в работающие решения.
          </p>
        </div>

        <div className="projects-grid">
          <a
            href="https://github.com/welluin"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            aria-label="Открыть GitHub — веб-интерфейс"
          >
            <div className="project-visual project-visual-one">
              <span className="project-index">PROJECT / 01</span>
              <div className="project-window">
                <span />
                <span />
                <span />
                <div className="project-window-line" />
                <div className="project-window-block" />
              </div>
            </div>

            <div className="project-body">
              <span className="card-tag">Web · UI</span>
              <h3>Веб-интерфейс</h3>
              <p>
                Разработка структуры страницы, визуальной системы
                и адаптивных элементов интерфейса.
              </p>
              <span className="project-status">
                Учебный / личный проект
              </span>
            </div>
          </a>

          <a
            href="https://github.com/welluin"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            aria-label="Открыть GitHub — программная логика"
          >
            <div className="project-visual project-visual-two">
              <span className="project-index">PROJECT / 02</span>
              <div className="project-code">
                <span>function</span>
                <span>  buildSolution() {'{'}</span>
                <span>    return result;</span>
                <span>{'}'}</span>
              </div>
            </div>

            <div className="project-body">
              <span className="card-tag">Code · Logic</span>
              <h3>Программная логика</h3>
              <p>
                Практика алгоритмов, организации кода и решения
                прикладных задач.
              </p>
              <span className="project-status">
                Учебный / личный проект
              </span>
            </div>
          </a>

          <a
            href="https://github.com/welluin"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            aria-label="Открыть GitHub — работа с данными"
          >
            <div className="project-visual project-visual-three">
              <span className="project-index">PROJECT / 03</span>
              <div className="project-data-shape">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="project-body">
              <span className="card-tag">Data · Structure</span>
              <h3>Работа с данными</h3>
              <p>
                Изучение моделей данных, SQL и взаимодействия
                между компонентами приложения.
              </p>
              <span className="project-status">
                Учебный / личный проект
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}