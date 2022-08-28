using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SalaryService.Domain.Entities;

namespace SalaryService.Infra.ORM.EntitiesMappings
{
    public class AccountMapping : IEntityTypeConfiguration<Account>
    {
        public void Configure(EntityTypeBuilder<Account> builder)
        {
            builder.ToTable(nameof(Account));
            builder.HasKey(a => a.Id);

            builder.Property(a => a.ClientId).HasColumnName("Client_Id").IsRequired();

            builder.Property(a => a.Login).HasColumnType("varchar(20)").IsUnicode()
                .HasColumnName("login").IsRequired();

            builder.Property(a => a.Password).HasColumnType("varchar(20)").IsUnicode()
                .HasColumnName("password").IsRequired();
        }
    }
}
