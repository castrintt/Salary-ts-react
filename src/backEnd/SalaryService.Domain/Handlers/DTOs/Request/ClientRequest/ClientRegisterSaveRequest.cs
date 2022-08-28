using SalaryService.Domain.Handlers.DTOs.Request.AccountRequest;
using SalaryService.Domain.Handlers.DTOs.Request.BankStatementRequest;

namespace SalaryService.Domain.Handlers.DTOs.Request.ClientRequest;

public class ClientRegisterSaveRequest
{
    public string FirstName { get; set; }
    public string LastName { get; set; }

    public AccountSaveRequest Account { get; set; }
    public BankStatementSaveRequest BankStatement { get; set; }
}
