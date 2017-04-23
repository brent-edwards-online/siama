namespace siama_api.Service
{
    using Microsoft.AspNetCore.Http;
    using System;
    using System.IO;
    using System.Threading.Tasks;

    using Amazon;
    using Amazon.S3;
    using Amazon.S3.Model;


    public class UploadService : IUploadService
    {
        public async Task<bool> SaveAWS(string inspectionNo, IFormFile file)
        {
            try
            {
                var fileUploadClient = new AmazonS3Client(Amazon.RegionEndpoint.APSoutheast2);

                PutObjectRequest uploadRequest = new PutObjectRequest
                {
                    BucketName = "siama-images",
                    Key = inspectionNo + "/" + file.FileName,
                    InputStream = file.OpenReadStream()
                };

                var request = fileUploadClient.PutObjectAsync(uploadRequest);
                await request;
                return true;
            }
            catch (AmazonS3Exception amazonS3Exception)
            {
                if (amazonS3Exception.ErrorCode != null &&
                    (amazonS3Exception.ErrorCode.Equals("InvalidAccessKeyId")
                    ||
                    amazonS3Exception.ErrorCode.Equals("InvalidSecurity")))
                {
                    Console.WriteLine("Check the provided AWS Credentials.");
                    Console.WriteLine(
                        "For service sign up go to http://aws.amazon.com/s3");
                    return false;
                }
                else
                {
                    Console.WriteLine(
                        "Error occurred. Message:'{0}' when writing an object"
                        , amazonS3Exception.Message);
                    return false;
                }
            }
        }

        public async Task<bool> SaveLocal(string inspectionNo, IFormFile file, string uploadBasePath)
        {
            if (file == null) throw new Exception("File is null");
            if (file.Length == 0) throw new Exception("File is empty");

            var uploadPath = Path.Combine(uploadBasePath, "uploads");
            var uploadSpecificPath = Path.Combine(uploadPath, inspectionNo);

            if (file.Length > 0)
            {
                Directory.CreateDirectory(uploadSpecificPath);
                using (var fileStream = new FileStream(Path.Combine(uploadSpecificPath, file.FileName), FileMode.Create))
                {
                    await file.CopyToAsync(fileStream);
                }
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
