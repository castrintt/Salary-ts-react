namespace SalaryService.Domain.Entities;

public class Account : BaseEntity
{
    public string Login { get; set; }
    public string Password { get; set; }

    public int ClientId { get; set; }
}
