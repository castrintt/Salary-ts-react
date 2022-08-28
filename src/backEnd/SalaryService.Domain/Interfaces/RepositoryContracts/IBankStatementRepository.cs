using Microsoft.EntityFrameworkCore.Query;
using SalaryService.Domain.Entities;

namespace SalaryService.Domain.Interfaces.RepositoryContracts
{
    public interface IBankStatementRepository : IDisposable
    {
        Task<bool> SaveAsync(BankStatement bankStatement);
        Task<bool> UpdateAsync(BankStatement bankStatement);
        Task<bool> DeleteAsync(int bankStatementId);

        Task<BankStatement> FindbyAsync(int bankStatementId, Func<IQueryable<BankStatement>, IIncludableQueryable<BankStatement, object>> include = null, bool asNotracking = false);
    }
}
