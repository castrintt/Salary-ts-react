namespace SalaryService.Domain.Entities;

public class BankStatement : BaseEntity
{
    public decimal StatementBalance { get; set; }

    public int ClientId { get; set; }
    public Client Client { get; set; }
    public List<Expenditure> Expenditures { get; set; }
    public List<Earnings> Earnings { get; set; }
}
