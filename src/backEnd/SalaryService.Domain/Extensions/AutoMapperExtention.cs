﻿using SalaryService.Domain.Handlers.AutoMapperSettings;

namespace SalaryService.Domain.Extensions;

public static class AutoMapperExtention
{
    public static TDestination MapTo<TSource, TDestination>(this TSource source)
    {
        return AutoMapperHandler.Mapper.Map<TSource, TDestination>(source);
    }

    public static TDestination MapTo<TSource, TDestination>(this TSource source, TDestination destination)
    {
        return AutoMapperHandler.Mapper.Map(source, destination);
    }
}
