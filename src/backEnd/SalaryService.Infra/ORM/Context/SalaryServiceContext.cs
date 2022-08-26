using Microsoft.EntityFrameworkCore;

namespace SalaryService.Infra.ORM.Context
{
    public class SalaryServiceContext : DbContext
    {
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
}
