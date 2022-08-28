using AutoMapper;
using System.Reflection;

namespace SalaryService.Domain.Handlers.AutoMapperSettings;

public static class AutoMapperHandler
{
    public static IMapper Mapper { get; private set; }
    public static MapperConfiguration Configuration { get; private set; }

    public static void Initialize()
    {
        Configuration = new MapperConfiguration(configuration =>
        {
            var profiles = Assembly.GetExecutingAssembly()
                .GetExportedTypes().Where(p => p.IsClass && typeof(Profile).IsAssignableFrom(p));

            foreach (var profile in profiles)
            {
                configuration.AddProfile((Profile)Activator.CreateInstance(profile));
            }
        });

        Mapper = Configuration.CreateMapper();
    }
}
