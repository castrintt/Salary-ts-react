using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SalaryService.Domain.Entities;

namespace SalaryService.Infra.ORM.EntitiesMappings;

public class ExpenditureMapping : IEntityTypeConfiguration<Expenditure>
{
    public void Configure(EntityTypeBuilder<Expenditure> builder)
    {
        builder.ToTable(nameof(Expenditure));
        builder.HasKey(e => e.Id);

        builder.Property(e => e.BankStatementId).HasColumnName("BankStatement_Id").IsRequired();

        builder.Property(e => e.PaymentDate).HasColumnType("datetime2")
            .HasColumnName("payment_date").IsRequired();

        builder.Property(e => e.Description).HasColumnType("varchar(50)").IsUnicode()
            .HasColumnName("description").IsRequired();

        builder.Property(e => e.TypeOfExpense)
            .HasColumnName("type_of_expense").IsRequired();

        builder.Property(e => e.Value).HasColumnType("decimal(12,2)")
            .HasColumnName("value").IsRequired();
    }
}
