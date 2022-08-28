using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SalaryService.Domain.Entities;

namespace SalaryService.Infra.ORM.EntitiesMappings;

public class EarningsMapping : IEntityTypeConfiguration<Earnings>
{
    public void Configure(EntityTypeBuilder<Earnings> builder)
    {
        builder.ToTable(nameof(Earnings));
        builder.HasKey(e => e.Id);

        builder.Property(e => e.BankStatementId).HasColumnName("BankStatement_Id").IsRequired();

        builder.Property(e => e.ReceiptDate).HasColumnType("datetime2")
            .HasColumnName("receipt_date").IsRequired();

        builder.Property(e => e.Description).HasColumnType("varchar(50)").IsUnicode()
            .HasColumnName("description").IsRequired();

        builder.Property(e => e.TypeOfIncomeSource)
            .HasColumnName("type_of_income_source").IsRequired();

        builder.Property(e => e.Value).HasColumnType("decimal(12,2)")
            .HasColumnName("value").IsRequired();
    }
}
