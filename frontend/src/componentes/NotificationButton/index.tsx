import foto from '../../assets/img/notification-icon.svg'

import'./styles.css'

function NotificationButton() {
    return (
        <>
            <div className="dsmeta-red-btn">
                <img src={foto} alt="Notificar" />
            </div>
        </>
    )
}

export default NotificationButton