using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SalaryService.Domain.Entities;

namespace SalaryService.Infra.ORM.EntitiesMappings;

public class BankStatementMapping : IEntityTypeConfiguration<BankStatement>
{
    public void Configure(EntityTypeBuilder<BankStatement> builder)
    {
        builder.ToTable(nameof(BankStatement));
        builder.HasKey(b => b.Id);

        builder.Property(b => b.ClientId).HasColumnName("Client_Id").IsRequired();

        builder.Property(b => b.StatementBalance).HasColumnType("decimal(12,2)")
            .HasColumnName("statement_balance").IsRequired();

        builder.HasMany(b => b.Earnings).WithOne()
            .HasForeignKey(e => e.BankStatementId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasMany(b => b.Expenditures).WithOne()
            .HasForeignKey(e => e.BankStatementId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
