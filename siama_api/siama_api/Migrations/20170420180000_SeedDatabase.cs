using Microsoft.EntityFrameworkCore.Migrations;

namespace siama_api.Migrations
{
    public partial class SeedDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO InspectionReports (InspectionNo, InspectionDate,StructureNo, DeckType, IsMaintenanceRequired, IsHighwayBridge) VALUES ('12345C','2015-02-20T00:00:00','123456','Concrete', 0, 1)");
            migrationBuilder.Sql("INSERT INTO InspectionReports (InspectionNo, InspectionDate,StructureNo, DeckType, IsMaintenanceRequired, IsHighwayBridge) VALUES ('11111A','2014-02-21T00:00:00','157935','Sealed', 0, 1)");
            migrationBuilder.Sql("INSERT INTO InspectionReports (InspectionNo, InspectionDate,StructureNo, DeckType, IsMaintenanceRequired, IsHighwayBridge) VALUES ('11111B','2014-06-21T00:00:00','157935','Sealed', 1, 1)");
            migrationBuilder.Sql("INSERT INTO InspectionReports (InspectionNo, InspectionDate,StructureNo, DeckType, IsMaintenanceRequired, IsHighwayBridge) VALUES ('222222','2014-04-12T00:00:00','123597','Steel', 1, 1)");
            migrationBuilder.Sql("INSERT INTO InspectionReports (InspectionNo, InspectionDate,StructureNo, DeckType, IsMaintenanceRequired, IsHighwayBridge) VALUES ('ABCDEF','2016-06-12T00:00:00','354891','Earth', 0, 0)");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            
        }
    }
}
