using Microsoft.EntityFrameworkCore;
using SalaryService.Domain.Handlers.Notifications;
using SalaryService.Domain.Interfaces.OthersContracts;
using SalaryService.Infra.ORM.Context;

namespace SalaryService.API.Settings
{
    public static class DependencyInjectionHandler
    {
        public static void SetDependencyInjectionHandler(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<SalaryServiceContext>(config =>
                config.UseSqlServer(configuration.GetConnectionString("MyConnection")));

            services.AddScoped<SalaryServiceContext>();

            services.AddScoped<INotificationHandler, NotificationHandler>();
            services.AddServiceAndRepositoryDInjection();
        }
    }
}
