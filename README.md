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

## 1:  Clone Repository
> git clone https://github.com/brent-edwards-online/siama.git

## 2:  Build Api:

### 2.1:  From the project directory ~\siama\siama_api\siama_api

Run: dotnet restore

### 2.2:  Use existing AWS database or create local db

You can either use the online AWS db I set up by keeping the current dbcontext in Startup.cs
```
services.AddDbContext<SiamaDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("SiamaOnline")));
```
or 

Change the dbcontext to use internal database
```
services.AddDbContext<SiamaLocal>(options => options.UseSqlServer(Configuration.GetConnectionString("SiamaOnline")));
```
You may need to edit connection string in appsettings.json
```
"SiamaLocal": "Server=(localdb)\\mssqllocaldb;Database=Siama;Trusted_Connection=True;MultipleActiveResultSets=true"
```
To create the database and seed with dummy date go to project folder 

Run: 
```
dotnet ef database update
```
Start Api: 
```
dotnet run
```
Or just open Visual Studio solution and debug the solution


## 3 Build Angular2 Web Site:

### 3.1 Edit InspectionReportService.ts to choose if access a local api endpoint or just use the AWS online version

// Online Api endpoint
  
private readonly BASE_URL: string = "http://siama-api.brentedwardsonline.com/api/report/";

// Local api enpoint if required
/*private readonly BASE_URL: string = "http://localhost:5000/api/report/";*/

### 3.2 Install NPM packages  

From the angular project directory ~\siama\siama_ng2
```  
npm install
```  
### 3.3 Run using Angular-cli

From the angular project directory ~\siama\siama_ng2
```
ng serve
```  
### 3.4 Open browser
```  
http://localhost:4200
```
# Run Instructions

## 1: Angular-Cli should start the application at: https://localhost:4200
## 2: Navigate to https://localhost:4200/report for a list of inspection reports
## 3: Use the links on the reports page to go to inspection reports or use the following routes
  https://localhost:4200/report/11111A
  https://localhost:4200/report/11111B
  https://localhost:4200/report/12345C
  https://localhost:4200/report/222222
  https://localhost:4200/report/ABCDEF


# Common problems


