import { use, useState } from "react";

function LanguageBtn () {
    const [Open, setOpen] = useState(false);
    const [Language, setLanguage] = useState("EN");

    const toggleMenu = () => {
        setOpen (!Open);
    }

    const changeLanguage = (lang) => {
        setLanguage(lang)
        setOpen(false)
    }

    return (
        <div className="languageBtn">
            <button onClick={toggleMenu}> {Language} ↓</button>

            {Open && (
                <div className="languageMenu">
                    <button onClick={() => changeLanguage("EN")}>English</button>
                    <button onClick={() => changeLanguage("SE")}>Swedish</button>

                </div>
            )}
        </div>
    )
}

export default LanguageBtn