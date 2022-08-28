using SalaryService.Domain.Handlers.Notifications;

namespace SalaryService.Domain.Interfaces.OthersContracts;

public interface INotificationHandler
{
    bool HasNotification();
    List<DomainNotification> GetNotifications();
    bool AddNotification(string description, string value);
    void AddNotification(DomainNotification notification);
    void AddNotifications(Dictionary<string, string> notifications);
}
