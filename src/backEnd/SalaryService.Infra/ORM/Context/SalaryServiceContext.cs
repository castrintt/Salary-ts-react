using Microsoft.EntityFrameworkCore;
using SalaryService.Domain.Entities;

namespace SalaryService.Infra.ORM.Context;

public class SalaryServiceContext : DbContext
{
    DbSet<Account> Accounts { get; set; }
    DbSet<Client> Clients { get; set; }
    DbSet<BankStatement> BankStatements { get; set; }
    DbSet<Earnings> Earnings { get; set; }
    DbSet<Expenditure> Expenditures { get; set; }

    public SalaryServiceContext(DbContextOptions<SalaryServiceContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(SalaryServiceContext).Assembly);
    }
}
