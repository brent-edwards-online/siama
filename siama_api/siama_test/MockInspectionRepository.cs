namespace siama_test
{
    using siama_api.Repository;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using siama_api.Entities;

    class MockInspectionReportRepository : IInspectionReportRepository
    {
        private List<InspectionReport> _mockData;

        public MockInspectionReportRepository()
        {
            _mockData = new List<InspectionReport>();
            _mockData.Add(new InspectionReport
            {
                InspectionNo = "11111A",
                InspectionDate = new DateTime(2014, 01, 31, 14, 00, 00),
                StructureNo = "654321",
                DeckType = "Concrete",
                IsMaintenanceRequired = true,
                IsHighwayBridge = true
            });

            _mockData.Add(new InspectionReport
            {
                InspectionNo = "11111B",
                InspectionDate = new DateTime(2014, 06, 21, 00, 00, 00),
                StructureNo = "157935",
                DeckType = "Sealed",
                IsMaintenanceRequired = true,
                IsHighwayBridge = true
            });

            _mockData.Add(new InspectionReport
            {
                InspectionNo = "12345C",
                InspectionDate = new DateTime(2017, 04, 13, 14, 00, 00),
                StructureNo = "123456",
                DeckType = "Earth",
                IsMaintenanceRequired = true,
                IsHighwayBridge = false
            });

            _mockData.Add(new InspectionReport
            {
                InspectionNo = "222222",
                InspectionDate = new DateTime(2014, 04, 12, 00, 00, 00),
                StructureNo = "123597",
                DeckType = "Steel",
                IsMaintenanceRequired = true,
                IsHighwayBridge = true
            });
            _mockData.Add(new InspectionReport
            {
                InspectionNo = "ABCDEF",
                InspectionDate = new DateTime(2016, 06, 12, 00, 00, 00),
                StructureNo = "354891",
                DeckType = "Earth",
                IsMaintenanceRequired = false,
                IsHighwayBridge = false
            });
        }

        public void Delete(object id)
        {
            throw new NotImplementedException();
        }

        public void Delete(InspectionReport entityToDelete)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<InspectionReport> GetAll()
        {
            return _mockData;
        }

        public InspectionReport GetById(object id)
        {
            var inspectionNo = Convert.ToString(id);
            return _mockData.Where(r => r.InspectionNo == inspectionNo).FirstOrDefault();
        }

        public void Insert(InspectionReport entity)
        {
            throw new NotImplementedException();
        }

        public void Update(InspectionReport entityToUpdate)
        {
            var report = _mockData.Where(r => r.InspectionNo == entityToUpdate.InspectionNo).FirstOrDefault();
            if(report != null)
            {
                var idx = _mockData.IndexOf(report);
                if(idx >=0)
                {
                    _mockData[idx] = entityToUpdate;
                }
            }
        }
    }
}
