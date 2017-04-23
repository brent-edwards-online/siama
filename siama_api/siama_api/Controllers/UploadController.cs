namespace siama_api.Controllers
{
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using siama_api.Entities;
    using siama_api.Service;
    using System;
    using System.IO;
    using System.Linq;
    using System.Threading.Tasks;

    [Route("api/[controller]")]
    public class UploadFileController : Controller
    {
        private IUploadService _uploadService;
        private IHostingEnvironment _environment;

        public UploadFileController(IUploadService uploadService, IHostingEnvironment environment)
        {
            this._uploadService = uploadService;
            this._environment = environment;
        }

        [HttpPost("{inspectionNo}")]
        public async Task<IActionResult> Post(string inspectionNo, IFormFile file)
        {
            try
            {
                //var result = await this._uploadService.SaveLocal(inspectionNo, file, _environment.WebRootPath);
                var result = await this._uploadService.SaveAWS(inspectionNo, file);
                if (result)
                {
                    return Ok(new { Result = "Success" });
                }
                else
                {
                    return BadRequest(new { ErrorMessage = "Could not upload file" });
                }
            }
            catch(Exception ex)
            {
                string msg = "Could not upload file";
                if (ex.Message.Length > 0 )
                {
                    msg += ": " + ex.Message;
                }

                return BadRequest(new { ErrorMessage = msg });
            }
        }
    }
}
