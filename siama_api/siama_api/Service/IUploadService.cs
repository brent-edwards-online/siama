namespace siama_api.Service
{
    using Microsoft.AspNetCore.Http;
    using System.Threading.Tasks;

    public interface IUploadService
    {
        Task<bool> SaveLocal(string inspectionNo, IFormFile file, string uploadPath);
        Task<bool> SaveAWS(string inspectionNo, IFormFile file);
    }
}
