using SalaryService.Domain.Interfaces.RepositoryContracts;
using SalaryService.Domain.Interfaces.ServiceContracts;
using SalaryService.Infra.Repositories;
using SalaryService.Infra.Services;

namespace SalaryService.API.Settings
{
    public static class ServiceAndRepositoryDInjection
    {
        public static void AddServiceAndRepositoryDInjection(this IServiceCollection services)
        {
            services.AddScoped<IClientRepository, ClientRepository>();
            services.AddScoped<IBankStatementRepository, BankStatementRepository>();


            services.AddScoped<IClientService, ClientService>();


        }
    }
}
