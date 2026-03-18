import NotificationBell from "./NotificationBell"
import "./Navbar.css"

function Navbar({notifications}) {
    return (
        <div className="navbar">
            <h2 className="logo">iTask</h2>

            <div className="navRight">
                <NotificationBell notifications={notifications}/>
            </div>
        </div>
    )
} 

export default Navbar