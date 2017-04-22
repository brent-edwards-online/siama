namespace siama_api.Service
{
    using siama_api.Entities;
    using siama_api.Repository;
    using System;
    using System.Linq;
    using System.Collections.Generic;

    public class InspectionReportService : IInspectionReportService
    {
        private IInspectionReportRepository _inspectionReportRepository;
        private IUnitOfWork _unitOfWork;

        public InspectionReportService(IInspectionReportRepository inspectionReportRepository, IUnitOfWork unitOfWork)
        {
            this._inspectionReportRepository = inspectionReportRepository;
            this._unitOfWork = unitOfWork;
        }

        public IEnumerable<InspectionReport> GetAllInspectionReports()
        {
            return _inspectionReportRepository.GetAll();
        }

        public IEnumerable<InspectionReport> GetInspectionReportByInspectionNo(string inspectionNo)
        {
            return _inspectionReportRepository.GetAll().Where(i => i.InspectionNo == inspectionNo);
        }

        public void UpdateInspectionReport(InspectionReport report)
        {
            _inspectionReportRepository.Update(report);
            _unitOfWork.SaveChanges();
            
        }
    }
}
