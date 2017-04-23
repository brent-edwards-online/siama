export class Config {
    public static readonly ONLINE_BASE_URL: string = "http://siama-api.brentedwardsonline.com/api/";

    public static readonly DEV_BASE_URL: string = "http://localhost:5000/api/";

    public static readonly PROD_BASE_URL = Config.ONLINE_BASE_URL;

    public static readonly USE_AWS_S3 = true;
}