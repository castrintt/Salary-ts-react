using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;
using SalaryService.Domain.Entities;
using SalaryService.Domain.Interfaces.RepositoryContracts;
using SalaryService.Infra.ORM.Context;

namespace SalaryService.Infra.Repositories;

public class BankStatementRepository : IBankStatementRepository
{
    private readonly SalaryServiceContext _context;
    private DbSet<BankStatement> _dbSet => _context.Set<BankStatement>();

    public BankStatementRepository(SalaryServiceContext context)
    {
        _context = context;
    }


    public void Dispose() => _context.Dispose();

    private async Task<bool> CommintSaveInDb() => await _context.SaveChangesAsync() > 0;

    public async Task<BankStatement> FindbyAsync(int bankStatementId, Func<IQueryable<BankStatement>, IIncludableQueryable<BankStatement, object>> include = null, bool asNotracking = false)
    {
        var query = (IQueryable<BankStatement>)_dbSet;

        if (asNotracking)
            query = _dbSet.AsNoTracking();

        if (include != null)
            query = include(query);

        return await query.FirstOrDefaultAsync(c => c.Id == bankStatementId);
    }

    public async Task<bool> SaveAsync(BankStatement bankStatement)
    {
        _context.Entry(bankStatement).State = EntityState.Added;

        return await CommintSaveInDb();
    }

    public async Task<bool> UpdateAsync(BankStatement bankStatement)
    {
        _context.Entry(bankStatement).State = EntityState.Modified;

        return await CommintSaveInDb();
    }

    public async Task<bool> DeleteAsync(int bankStatementId)
    {
        var bankStatement = await _dbSet.FindAsync(bankStatementId);

        if (_context.Entry(bankStatement).State == EntityState.Detached)
            _dbSet.Attach(bankStatement);

        _dbSet.Remove(bankStatement);

        return await CommintSaveInDb();
    }
}
