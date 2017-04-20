namespace siama_api.Entities
{
    using Microsoft.EntityFrameworkCore;

    public class SiamaDbContext : DbContext
    {
        public SiamaDbContext(DbContextOptions<SiamaDbContext> options) : base(options)
        {

        }

        public DbSet<InspectionReport> InspectionReports { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<InspectionReport>().ToTable("InspectionReports");
        }

    }
}
