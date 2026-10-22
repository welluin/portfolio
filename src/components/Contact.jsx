
export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      'Спасибо за сообщение! Сейчас эта форма работает в демонстрационном режиме.'
    );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <div className="contact-info">
          <span className="section-eyebrow">НА СВЯЗИ</span>

          <h2>Есть идея? Давайте обсудим.</h2>

          <p>
            Открыта к новым задачам, интересным идеям и возможности
            учиться на практике.
          </p>
        </div>

        <div className="contact-form-card">
          <h3>Написать сообщение</h3>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contact-name">
                Как к вам обращаться?
              </label>

              <input
                id="contact-name"
                type="text"
                placeholder="Имя"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">
                Электронная почта
              </label>

              <input
                id="contact-email"
                type="email"
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">
                Сообщение
              </label>

              <textarea
                id="contact-message"
                placeholder="Расскажите о своей идее..."
                rows="4"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block"
            >
              Отправить сообщение
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
