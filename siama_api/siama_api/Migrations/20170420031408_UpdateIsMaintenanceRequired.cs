using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace siama_api.Migrations
{
    public partial class UpdateIsMaintenanceRequired : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IsMantenanceRequired",
                table: "InspectionReports",
                newName: "IsMaintenanceRequired");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IsMaintenanceRequired",
                table: "InspectionReports",
                newName: "IsMantenanceRequired");
        }
    }
}
