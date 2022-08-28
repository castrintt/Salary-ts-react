using SalaryService.Domain.Entities;
using SalaryService.Domain.Handlers.DTOs.Request.ClientRequest;

namespace SalaryService.Domain.Interfaces.ServiceContracts;

public interface IClientService : IDisposable
{
    Task<bool> SaveAsync(ClientRegisterSaveRequest client);
    Task<bool> Login(ClientLoginRequest login);
    Task<bool> DeleteAsync(int clientId);
}
