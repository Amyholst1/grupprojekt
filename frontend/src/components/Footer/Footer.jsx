import { useState, useEffect} from "react"
import "./Footer.css";
import { FiMoon } from "react-icons/fi";

function Footer() {
  const [darkMode, setDarkMode] = useState(false)

  function toggleTheme() {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [darkMode]);

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
        <div className="toggle-switch" onClick={toggleTheme}>
          <div className={`toggle-circle ${darkMode ? "active" : ""}`}></div>
          <span className="moon">
       <FiMoon />
      </span>
  </div>
</div>
    </footer>
  );
}

export default Footer;