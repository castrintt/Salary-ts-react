using SalaryService.Domain.Interfaces.OthersContracts;

namespace SalaryService.Domain.Handlers.Notifications;

public class NotificationHandler : INotificationHandler
{
    private List<DomainNotification> _notifications;

    public NotificationHandler()
    {
        _notifications = new List<DomainNotification>();
    }

    public List<DomainNotification> GetNotifications() => _notifications;

    public bool HasNotification() => _notifications.Any();

    public bool AddNotification(string description, string value)
    {
        _notifications.Add(new DomainNotification(description, value));

        return false;
    }

    public void AddNotification(DomainNotification notification)
    {
        _notifications.Add(notification);
    }

    public void AddNotifications(Dictionary<string, string> notifications)
    {
        foreach (var notification in notifications)
            AddNotification(notification.Key, notification.Value);
    }
}
