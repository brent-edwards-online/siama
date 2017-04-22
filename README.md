# Siama Demo Application

# Online Demo

Web Site: http://siama.brentedwardsonline.com

Api : http://siama-api.brentedwardsonline.com/

Endpoints:

GET api/report/{inspectionNo}
Gets a list or single inspection report

PUT api/report/
Updates an existing inspection report
Body is an inspection report Json object

{	
	"deckType":"Concrete",
	"inspectionNo":"11111A",
	"inspectionDate":"2014-01-31T14:00:00.000Z",
	"isHighwayBridge":true,
	"isMaintenanceRequired":true,
	"structureNo":"999999"
}

# Build Instructions

1:  Clone Repository
> git clone https://github.com/brent-edwards-online/siama.git

2:  Build Api:

2.1:  From the project directory ~\siama\siama_api\siama_api
Run: dotnet restore

2.2:  Use existing AWS database or create local db
You can either use the online AWS db I set up by keeping the current dbcontext in Startup.cs
// Entity Framework DbContext
services.AddDbContext<SiamaDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("SiamaOnline")));

or 

Change the dbcontext to use internal database
services.AddDbContext<SiamaLocal>(options => options.UseSqlServer(Configuration.GetConnectionString("SiamaOnline")));

You may need to edit connection string in appsettings.json
"SiamaLocal": "Server=(localdb)\\mssqllocaldb;Database=Siama;Trusted_Connection=True;MultipleActiveResultSets=true"

To create the database and seed with dummy date go to project folder 
Run: dotnet ef database update


Start Server: dotnet run

Or just open Visual Studio solution and 


3 Build Angular2 Web Site:


# Run Instructions




