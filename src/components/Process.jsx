export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Разобраться в задаче',
      description:
        'Определить, что нужно сделать, какие есть ограничения и каким должен быть результат.',
      tag: 'АНАЛИЗ',
    },
    {
      number: '02',
      title: 'Найти понятное решение',
      description:
        'Продумать структуру, выбрать подходящие инструменты и не усложнять там, где это не нужно.',
      tag: 'ПЛАНИРОВАНИЕ',
    },
    {
      number: '03',
      title: 'Создать и проверить',
      description:
        'Реализовать основные функции, проверить их работу и исправить обнаруженные ошибки.',
      tag: 'РАЗРАБОТКА',
    },
    {
      number: '04',
      title: 'Учиться на практике',
      description:
        'Разбирать свои ошибки, изучать новые подходы и применять полученные знания в следующих проектах.',
      tag: 'РАЗВИТИЕ',
    },
  ];

  return (
    <section id="process" className="process-section">
      <div className="container process-container">
        <div className="process-info">
          <span className="section-eyebrow">МОЙ ПОДХОД</span>

          <h2 className="process-heading">
            Мне важно не просто написать код,
            <span> а разобраться, как всё работает.</span>
          </h2>

          <p className="process-description">
            Каждый проект для меня — возможность разобраться в новой задаче,
            найти подходящее решение и превратить идею в работающий продукт.
            Я стараюсь понимать не только то, что делает код, но и почему он
            устроен именно так.
          </p>

          <div className="process-note">
            <p>
              Для меня разработка — это постоянная практика,
              поиск решений и движение вперёд.
            </p>
          </div>
        </div>

        <div className="process-card">
          <div className="process-card-header">
            <span>ОТ ИДЕИ К РЕЗУЛЬТАТУ</span>
          </div>

          <div className="process-steps">
            {steps.map((step) => (
              <article className="process-step" key={step.number}>
                <span className="process-number">{step.number}</span>

                <div className="process-step-content">
                  <span className="process-step-tag">{step.tag}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>

              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}