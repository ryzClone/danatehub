import React, { useState } from 'react';
import './notification.css';
import BlockComponent from '../Viewblock/BlockComponent';

function Notification() {
    // State to handle form inputs
    const [userCount, setUserCount] = useState(200);
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [category, setCategory] = useState('Yangiliklar'); // Default category
    const [notifications, setNotifications] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && message && category) {
            const newNotification = { id: notifications.length + 1, title, message, category };
            setNotifications([newNotification, ...notifications]); // Add new notification
            setTitle(''); // Clear form fields
            setMessage('');
        }
    };

    return (
        <div className="notification-container">
            <h1 className="notification-title">Notification</h1>
            <div className="notification-block-container">
                <BlockComponent title="Total Users" count={userCount} iconType="users" />
                <BlockComponent title="Sessions" count="1,500" iconType="sessions" />
                <BlockComponent title="Bounce Rate" count="40%" iconType="bounceRate" />
                <BlockComponent title="Avg Session Duration" count="5m 12s" iconType="avgSessionDuration" />
            </div>
            
            {/* New Block for Create Notification */}
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
                    <div className="form-group">
                        <label htmlFor="category">Category:</label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="Yangiliklar">Yangiliklar</option>
                            <option value="So'nggi harakatlar">So'nggi harakatlar</option>
                            <option value="Muhim voqealar">Muhim voqealar</option>
                        </select>
                    </div>
                    <button type="submit" className="button">Create Notification</button>
                </form>
            </div>

            <h3>Notifications</h3>
            <ul className="notification-list">
                {notifications.length > 0 ? (
                    notifications.map((notif) => (
                        <li key={notif.id} className="notification-item">
                            <span className="category-badge">{notif.category}</span>
                            <h4>{notif.title}</h4>
                            <p>{notif.message}</p>
                        </li>
                    ))
                ) : (
                    <p>No notifications yet.</p>
                )}
            </ul>
        </div>
    );
}

export default Notification;
