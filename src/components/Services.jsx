// НАПРАВЛЕНИЯ / КАРТОЧКИ УСЛУГ (SERVICES)
// Показываем, с какими категориями задач вы работаете.

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">ЧЕМ ИНТЕРЕСУЮСЬ</span>
          <h2>Разработка с разных сторон</h2>
          <p>
            Изучаю этапы создания продукта — от структуры до работающего решения.
          </p>
        </div>

        <div className="services-grid">
          <article className="service-card">
            <div className="card-image-placeholder skill-visual skill-visual-one">
              <span>01 / WEB · UI</span>
            </div>
            <div className="card-body">
              <span className="card-tag">Интерфейс</span>
              <h3>Разработка интерфейсов</h3>
              <p>
                Создание понятных и удобных интерфейсов сайтов и приложений с учётом пользовательского опыта и адаптивности.
              </p>
              <div className="card-price">HTML · CSS · JavaScript · React</div>
            </div>
          </article>

          <article className="service-card">
            <div className="card-image-placeholder skill-visual skill-visual-two">
              <span>02 / CODE · LOGIC</span>
            </div>
            <div className="card-body">
              <span className="card-tag">Логика</span>
              <h3>Программирование и базы данных</h3>
              <p>
                Реализация функциональности, обработка данных, проектирование структуры хранения и работа с SQL.
              </p>
              <div className="card-price">C · C++ · C# · Python</div>
            </div>
          </article>

          <article className="service-card">
            <div className="card-image-placeholder skill-visual skill-visual-three">
              <span>03 / DATA · STRUCTURE</span>
            </div>
            <div className="card-body">
              <span className="card-tag">Данные</span>
              <h3>Сопровождение и развитие ПО</h3>
              <p>
                Проверка работоспособности, поиск и исправление ошибок, доработка функций и улучшение существующих решений.
              </p>
              <div className="card-price">SQL · проектирование</div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
