using SalaryService.Domain.Interfaces.OthersContracts;

namespace SalaryService.Infra.Services.Base;

public class BaseService<TEntity> where TEntity : class
{
    private readonly INotificationHandler _notificationHandler;

	public BaseService(INotificationHandler notificationHandler)
	{
		_notificationHandler = notificationHandler;
	}
}
