namespace siama_api.Repository
{
    using siama_api.Entities;

    public class InspectionReportRepository : GenericRepository<InspectionReport>, IInspectionReportRepository
    {
        public InspectionReportRepository(SiamaDbContext context) : base(context)
        {
        }
    }
}
