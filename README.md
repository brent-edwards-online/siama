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







