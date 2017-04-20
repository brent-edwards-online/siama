using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace siama_api.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "InspectionReports",
                columns: table => new
                {
                    InspectionNo = table.Column<string>(maxLength: 6, nullable: false),
                    DeckType = table.Column<string>(maxLength: 10, nullable: false),
                    InspectionDate = table.Column<DateTime>(nullable: false),
                    IsHighwayBridge = table.Column<bool>(nullable: false),
                    IsMantenanceRequired = table.Column<bool>(nullable: false),
                    StructureNo = table.Column<string>(maxLength: 6, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InspectionReports", x => x.InspectionNo);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "InspectionReports");
        }
    }
}
