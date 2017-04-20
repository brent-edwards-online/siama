namespace siama_api.Service
{
    using siama_api.Entities;
    using System.Collections.Generic;

    public interface IInspectionReportService
    {
        IEnumerable<InspectionReport> GetInspectionReportByInspectionNo(string inspectionNo);
        void UpdateInspectionReport(InspectionReport report);
    }
}
