using SalaryService.Domain.Entities;
using SalaryService.Domain.Extensions;
using SalaryService.Domain.Handlers.DTOs.Request.ClientRequest;
using SalaryService.Domain.Interfaces.OthersContracts;
using SalaryService.Domain.Interfaces.RepositoryContracts;
using SalaryService.Domain.Interfaces.ServiceContracts;
using SalaryService.Infra.Services.Base;

namespace SalaryService.Infra.Services;

public class ClientService : BaseService<Client>, IClientService
{
    private readonly IClientRepository _clientRepository;

    //implementar Notificação e Validação futuramente..
    public ClientService(INotificationHandler notificationHandler,
                         IClientRepository clientRepository) 
        : base(notificationHandler)
    {
        _clientRepository = clientRepository;
    }

    public void Dispose() => _clientRepository.Dispose();


    public async Task<bool> Login(ClientLoginRequest login) => await _clientRepository.LoginAsync(login.Login, login.Password);

    public async Task<bool> SaveAsync(ClientRegisterSaveRequest saveRequest)
    {
        var client = saveRequest.MapTo<ClientRegisterSaveRequest, Client>();

        return await _clientRepository.SaveAsync(client);
    }

    public async Task<bool> DeleteAsync(int clientId)
    {
        return await _clientRepository.DeleteAsync(clientId);
    }
}
