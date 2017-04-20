namespace siama_api.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using siama_api.Entities;
    using siama_api.Service;
    using System.Linq;

    [Route("api/[controller]")]
    public class ReportController : Controller
    {
        private IInspectionReportService _inspectionReportService;

        public ReportController(IInspectionReportService inspectionReportService)
        {
            _inspectionReportService = inspectionReportService;
        }

        [HttpGet("{inspectionNo}")]
        public IActionResult Get(string inspectionNo)
        {
            return new JsonResult( new { Result = _inspectionReportService.GetInspectionReportByInspectionNo(inspectionNo).FirstOrDefault() } );
        }

        [HttpPut]
        public IActionResult Put([FromBody]InspectionReport report)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    _inspectionReportService.UpdateInspectionReport(report);
                    return Ok(new { Result = "Success" });
                }
                catch
                {
                    return BadRequest(new { ErrorMessage = "Could not update report" });
                }
            }

            return BadRequest(new { ErrorMessage = "Model state was invalid" });
        }
    }
}
