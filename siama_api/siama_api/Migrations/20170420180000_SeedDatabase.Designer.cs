using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using siama_api.Entities;

namespace siama_api.Migrations
{
    [DbContext(typeof(SiamaDbContext))]
    [Migration("20170420180000_SeedDatabase")]
    partial class SeedDatabase
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "1.1.1");
        }
    }
}
