import LanguageBtn from "./LanguageBtn"
import "./Navbar.css"

function Navbar() {
    return (
        <div className="navbar">
            <h2 className="logo">iTask</h2>

            <div className="navRight">
                <LanguageBtn></LanguageBtn>
            </div>
        </div>
    )
} 

export default Navbar