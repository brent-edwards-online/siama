namespace siama_api
{
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Logging;
    using siama_api.Entities;
    using siama_api.Repository;
    using siama_api.Service;

    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    b => b.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());
            });

            // Entity Framework DbContext
            services.AddDbContext<SiamaDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("SiamaOnline")));

            services.AddTransient<IInspectionReportService, InspectionReportService>();
            services.AddTransient<IInspectionReportRepository, InspectionReportRepository>();
            services.AddTransient<IUnitOfWork, UnitOfWork>();

            // Add framework services.
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, SiamaDbContext dbContext)
        {
            if (env.IsDevelopment())
            {
                dbContext.Database.Migrate(); //this will generate the db if it does not exist

            }

            loggerFactory.AddConsole(Configuration.GetSection("Logging"));

            app.UseCors("CorsPolicy");

            app.UseMvc();
        }
    }
}
