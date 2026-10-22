// ПОДВАЛ (FOOTER)
// Копирайт, авторские права и ссылка на авторов.
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <a href="#top" className="footer-logo">portfolio.</a>
        <p>Учебные проекты и развитие в разработке</p>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
