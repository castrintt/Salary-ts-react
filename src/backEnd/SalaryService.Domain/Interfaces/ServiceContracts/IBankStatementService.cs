using SalaryService.Domain.Entities;
using SalaryService.Domain.Handlers.DTOs.Response.BankStatementResponse;

namespace SalaryService.Domain.Interfaces.ServiceContracts;

public interface IBankStatementService
{
    Task<bool> AddExpenditureAsync(List<Expenditure> expenditures);
    Task<bool> RemoveExpenditureAsync(Expenditure expenditure);
    Task<bool> AddEarningAsync(List<Earnings> earnings);
    Task<bool> RemoveEarningAsync(Earnings earning);

    Task<BankStatementSearchResponse> FindBy(int bankStatementId);
}
