using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using siama_api.Entities;

namespace siama_api.Migrations
{
    [DbContext(typeof(SiamaDbContext))]
    [Migration("20170420004711_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("siama_api.Entities.InspectionReport", b =>
                {
                    b.Property<string>("InspectionNo")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(6);

                    b.Property<string>("DeckType")
                        .IsRequired()
                        .HasMaxLength(10);

                    b.Property<DateTime>("InspectionDate");

                    b.Property<bool>("IsHighwayBridge");

                    b.Property<bool>("IsMantenanceRequired");

                    b.Property<string>("StructureNo")
                        .IsRequired()
                        .HasMaxLength(6);

                    b.HasKey("InspectionNo");

                    b.ToTable("InspectionReports");
                });
        }
    }
}
