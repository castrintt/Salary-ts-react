namespace SalaryService.Domain.Handlers.Notifications;

public class DomainNotification
{
    public string Description { get; set; }
    public string Value { get; set; }


    public DomainNotification(string description, string value)
    {
        Description = description;
        Value = value;
    }

    public static IEnumerable<DomainNotification> CreateNotifications(Dictionary<string, string> notifications)
    {
        foreach(var notification in notifications)
            yield return new DomainNotification(notification.Key, notification.Value);
    }
}
