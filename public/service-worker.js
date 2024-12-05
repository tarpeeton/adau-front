self.addEventListener('push', function(event) {
    const options = {
        body: event.data.text(),
        icon: '/icons/notification-icon.png', // Add your notification icon
        badge: '/icons/badge-icon.png', // Add your badge icon
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '1'
        },
        actions: [
            {
                action: 'explore',
                title: 'Открыть блог',
                icon: '/icons/checkmark.png' // Add your action icon
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('ADAU Блог', options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();

    if (event.action === 'explore') {
        // Open your blog page when notification is clicked
        event.waitUntil(
            clients.openWindow('/blog')
        );
    }
});
