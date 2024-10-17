import React, { useState } from 'react';
import './notification.css';


function Notification() {

    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [notifications, setNotifications] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && message) {
            const newNotification = { id: Date.now(), title, message };
            setNotifications([...notifications, newNotification]);
            setTitle('');
            setMessage('');
        }
    };

    return (
        <div className="notification-container">
            <h1 className="notification-title">Notification</h1>

            <div className="notification-block">
                <div className="create-notification-block">
                    <h2 className="notification-title">Create Notification</h2>
                    <form className="notification-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Title:</label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="button">Create Notification</button>
                    </form>
                </div>

                <div className="notification-list-section">
                    <h3>Notifications</h3>
                    <ul className="notification-list">
                        {notifications.length > 0 ? (
                            notifications.map((notif) => (
                                <li key={notif.id} className="notification-item">
                                    <span className="category-badge">admin</span>
                                    <h4>{notif.title}</h4>
                                    <p>{notif.message}</p>
                                </li>
                            ))
                        ) : (
                            <p>No notifications yet.</p>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Notification;
