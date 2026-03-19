import { useState, useRef, useEffect } from "react";
import { FiBell } from "react-icons/fi";

function NotificationBell ({notifications = []}) {
    const [open, setOpen] = useState(false);
    const bellRef = useRef(null)

useEffect(() => {
    function handleClickOutside(event) {
        if (bellRef.current && !bellRef.current.contains(event.target)) {
            setOpen(false);
        }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, []);

    const toggleMenu = () => {
        console.log("klickade på klokcan")
        setOpen (!open);
    }

    return (
        <div className="notificationBell" ref={bellRef}>
            <button onClick={toggleMenu}> 
                <FiBell/>

                {notifications.length > 0 && (
                    <span className="badge">{notifications.length}</span>
                )}
            </button>

            {open && (
                <div className="dropdown">
                    {notifications.length === 0 ? (
                        <p>No notifications</p>
                    ) : (
                    notifications.map((n) => (
                        <p key={n.id}>{n.text}</p>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

export default NotificationBell