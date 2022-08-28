using SalaryService.Domain.Entities;

namespace SalaryService.Domain.Handlers.DTOs.Response.BankStatementResponse;

public class BankStatementSearchResponse
{
    public int Id { get; set; }
    public decimal StatementBalance { get; set; }

    public List<Expenditure> Expenditures { get; set; }
    public List<Earnings> Earnings { get; set; }
}
