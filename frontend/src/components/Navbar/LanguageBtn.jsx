import { useState } from "react";

function LanguageBtn () {
    const [open, setOpen] = useState(false);
    const [language, setLanguage] = useState("EN");

    const toggleMenu = () => {
        setOpen (!open);
    }

    const changeLanguage = (lang) => {
        setLanguage(lang)
        setOpen(false)
    }

    return (
        <div className="languageBtn">
            <button onClick={toggleMenu}> {language} ↓</button>

            {open && (
                <div className="languageMenu">
                    <button onClick={() => changeLanguage("EN")}>English</button>
                    <button onClick={() => changeLanguage("SE")}>Swedish</button>

                </div>
            )}
        </div>
    )
}

export default LanguageBtn