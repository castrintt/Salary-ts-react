using SalaryService.API.Settings;
using SalaryService.Domain.Handlers.AutoMapperSettings;

var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;

AutoMapperHandler.Initialize();

builder.Services.AddControllersConfiguration();
builder.Services.SetDependencyInjectionHandler(configuration);
builder.Services.AddCorsConfiguration();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("MyPolicy");
app.UseAuthorization();

app.MapControllers();

app.Run();
