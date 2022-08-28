using SalaryService.Domain.Enums;

namespace SalaryService.Domain.Entities;

public class Earnings : BaseEntity
{
    public string Description { get; set; }
    public DateTime ReceiptDate { get; set; }
    public ETypeOfIncomeSource TypeOfIncomeSource { get; set; }
    public decimal Value { get; set; }

    public int BankStatementId { get; set; }
}
