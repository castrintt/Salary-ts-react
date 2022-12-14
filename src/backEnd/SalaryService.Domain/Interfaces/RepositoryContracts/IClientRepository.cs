using Microsoft.EntityFrameworkCore.Query;
using SalaryService.Domain.Entities;

namespace SalaryService.Domain.Interfaces.RepositoryContracts;

public interface IClientRepository : IDisposable
{
    Task<bool> SaveAsync(Client  client);
    Task<bool> UpdateAsync(Client client);
    Task<bool> DeleteAsync(int clientId);
    Task<bool> LoginAsync(string login, string password);

    Task<Client> FindbyAsync(int clientId, Func<IQueryable<Client>, IIncludableQueryable<Client, object>> include = null, bool asNotracking = false);
}
