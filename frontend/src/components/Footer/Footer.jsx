import "./Footer.css";

function Footer() {

  function toggleTheme() {
    document.body.classList.toggle("dark");
  }

  return (
    <footer className="footer">

      <a
        className="footer-link"
        href="https://github.com/Amyholst1/grupprojekt/blob/main/LICENSE"
        target="_blank"
        rel="noopener noreferrer"
      >
        Copyright © 2026
      </a>

      <div className="theme-toggle">
        <button onClick={toggleTheme}>🌓</button>
      </div>

    </footer>
  );
}

export default Footer;