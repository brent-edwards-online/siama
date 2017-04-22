namespace siama_test
{
    using System;
    using System.Linq;
    using Microsoft.VisualStudio.TestTools.UnitTesting;
    using siama_api.Repository;
    using siama_api.Entities;
    using System.Collections.Generic;
    using NSubstitute;
    using siama_api.Service;

    [TestClass]
    public class TestInspectionReportService
    {
        private IInspectionReportRepository _repo;
        private IUnitOfWork _unit;
        private InspectionReport _report;

        [TestInitialize()]
        public void Initialize()
        {
            _repo = new MockInspectionReportRepository();
            _unit = Substitute.For<IUnitOfWork>();
            _report = new InspectionReport
            {
                InspectionNo = "ABCDEF",
                InspectionDate = new DateTime(2016, 06, 12, 00, 00, 00),
                StructureNo = "354891",
                DeckType = "Earth",
                IsMaintenanceRequired = false,
                IsHighwayBridge = false
            };
        }

        [TestMethod]
        public void ICanGetAllInspectionReports()
        {
            IInspectionReportService service = new InspectionReportService(_repo, _unit);
            var result = service.GetAllInspectionReports();
            Assert.IsTrue(result.Count() == 5);
        }

        [TestMethod]
        public void ICanGetASpecificInspectionReport()
        {
            IInspectionReportService service = new InspectionReportService(_repo, _unit);
            var result = service.GetInspectionReportByInspectionNo("ABCDEF");
            Assert.IsTrue(result.Count() == 1);
            Assert.IsTrue(result.FirstOrDefault().DeckType == _report.DeckType);
            Assert.IsTrue(result.FirstOrDefault().InspectionDate == _report.InspectionDate);
            Assert.IsTrue(result.FirstOrDefault().IsHighwayBridge == _report.IsHighwayBridge);
        }

        [TestMethod]
        public void ICanNotFindAnInspectionReport()
        {
            IInspectionReportService service = new InspectionReportService(_repo, _unit);
            var result = service.GetInspectionReportByInspectionNo("ABCDEG");
            Assert.IsTrue(result.Count() == 0);
        }

        [TestMethod]
        public void ICanUpdateASpecificInspectionReport()
        {
            IInspectionReportService service = new InspectionReportService(_repo, _unit);
            DateTime dateNow = DateTime.Now;

            var tempReport = new InspectionReport
            {
                InspectionNo = "ABCDEF",
                InspectionDate = dateNow,
                StructureNo = "000000",
                DeckType = "SandPaper",
                IsMaintenanceRequired = true,
                IsHighwayBridge = true
            };

            service.UpdateInspectionReport(tempReport);

            var result = service.GetInspectionReportByInspectionNo("ABCDEF");
            Assert.IsTrue(result.Count() == 1);

            var report = result.FirstOrDefault();

            Assert.IsTrue(report.InspectionNo == tempReport.InspectionNo);
            Assert.IsTrue(report.DeckType == tempReport.DeckType);
            Assert.IsTrue(report.InspectionDate == tempReport.InspectionDate);
            Assert.IsTrue(report.IsHighwayBridge == tempReport.IsHighwayBridge);
            Assert.IsTrue(report.IsMaintenanceRequired == tempReport.IsMaintenanceRequired);
            Assert.IsTrue(report.StructureNo == tempReport.StructureNo);
        }
    }
}
