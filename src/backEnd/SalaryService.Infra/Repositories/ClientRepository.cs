using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;
using SalaryService.Domain.Entities;
using SalaryService.Domain.Interfaces.RepositoryContracts;
using SalaryService.Infra.ORM.Context;

namespace SalaryService.Infra.Repositories;

public class ClientRepository : IClientRepository
{
    private readonly SalaryServiceContext _context;
    private DbSet<Client> _dbSet => _context.Set<Client>();

    public ClientRepository(SalaryServiceContext context)
    {
        _context = context;
    }

    public void Dispose() => _context.Dispose();

    private async Task<bool> CommintSaveInDb() => await _context.SaveChangesAsync() > 0;

    public async Task<Client> FindbyAsync(int clientId, Func<IQueryable<Client>, IIncludableQueryable<Client, object>> include = null, bool asNotracking = false)
    {
        var query = (IQueryable<Client>)_dbSet;

        if (asNotracking)
            query = _dbSet.AsNoTracking();

        if (include != null)
            query = include(query);

        return await query.FirstOrDefaultAsync(c => c.Id == clientId);
    }


    public async Task<bool> LoginAsync(string login, string password)
    {
        var client = await _dbSet.FirstOrDefaultAsync(c => c.Account.Login == login && c.Account.Password == password);

        return client != null ? true : false;
    }

    public async Task<bool> SaveAsync(Client client)
    {
        _context.Entry(client).State = EntityState.Added;

        return await CommintSaveInDb();
    }

    public async Task<bool> UpdateAsync(Client client)
    {
        _context.Entry(client).State = EntityState.Modified;

        return await CommintSaveInDb();
    }

    public async Task<bool> DeleteAsync(int clientId)
    {
        var client = await _dbSet.FindAsync(clientId);

        if (_context.Entry(client).State == EntityState.Detached)
            _dbSet.Attach(client);

        _dbSet.Remove(client);

        return await CommintSaveInDb();
    }
}
