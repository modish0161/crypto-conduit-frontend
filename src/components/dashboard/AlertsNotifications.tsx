import React, { useState, useEffect } from 'react';
// Assuming fetchAlerts is a function you've defined to fetch alert data from your backend
import { fetchAlerts } from '../../utils/api';

interface Alert {
    id: string;
    message: string;
    timestamp: string; // Assuming timestamp is a string for simplicity
    read: boolean;
}

export const AlertsNotifications: React.FC = () => {
    const [alerts, setAlerts] = useState<Alert[]>([]);

    useEffect(() => {
        fetchAlerts()
            .then(setAlerts)
            .catch(console.error); // Proper error handling is essential
    }, []);

    const markAsRead = (id: string) => {
        // Implement functionality to mark an alert as read
        // This would typically involve sending a request to your backend
        setAlerts(alerts.map(alert => alert.id === id ? { ...alert, read: true } : alert));
    };

    return (
        <div className="alerts-notifications">
            <h2 className="text-lg font-semibold mb-4">Alerts & Notifications</h2>
            <ul>
                {alerts.map((alert) => (
                    <li key={alert.id} className={`mb-2 ${alert.read ? 'opacity-50' : ''}`}>
                        <div className="alert-message text-sm">{alert.message}</div>
                        <div className="alert-timestamp text-xs">{alert.timestamp}</div>
                        {!alert.read && (
                            <button
                                className="mark-as-read-btn text-xs text-blue-500 hover:text-blue-700"
                                onClick={() => markAsRead(alert.id)}
                            >
                                Mark as Read
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};
