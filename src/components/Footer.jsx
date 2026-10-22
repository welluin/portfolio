const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <a href="#top" className="footer-logo">portfolio.</a>
        <p>Учебные проекты и развитие в разработке</p>
        <span>© {CURRENT_YEAR}</span>
      </div>
    </footer>
  );
}
