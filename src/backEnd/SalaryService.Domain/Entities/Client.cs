namespace SalaryService.Domain.Entities;

public class Client : BaseEntity
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    
    public Account Account { get; set; }
    public BankStatement BankStatement { get; set; }
}
