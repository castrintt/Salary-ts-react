using SalaryService.Domain.Enums;

namespace SalaryService.Domain.Entities
{
    public class Expenditure : BaseEntity
    {
        public string Description { get; set; }
        public DateTime PaymentDate { get; set; }
        public ETypeOfExpense TypeOfExpense { get; set; }
        public decimal Value { get; set; }

        public int BankStatementId { get; set; }
    }
}
