using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SalaryService.Domain.Entities;

namespace SalaryService.Infra.ORM.EntitiesMappings;

public class ClientMapping : IEntityTypeConfiguration<Client>
{
    public void Configure(EntityTypeBuilder<Client> builder)
    {
        builder.ToTable(nameof(Client));
        builder.HasKey(c => c.Id);

        builder.Property(c => c.FirstName).HasColumnType("varchar(50)").IsUnicode()
            .HasColumnName("first_name").IsRequired();
        
        builder.Property(c => c.LastName).HasColumnType("varchar(50)").IsUnicode()
            .HasColumnName("last_name").IsRequired();

        builder.HasOne(c => c.Account).WithOne()
            .HasForeignKey<Account>(a => a.ClientId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(c => c.BankStatement).WithOne(b => b.Client)
            .HasForeignKey<BankStatement>(b => b.ClientId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
