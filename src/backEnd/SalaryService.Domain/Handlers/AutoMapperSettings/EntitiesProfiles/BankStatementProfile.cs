using AutoMapper;
using SalaryService.Domain.Entities;
using SalaryService.Domain.Handlers.DTOs.Request.BankStatementRequest;
using SalaryService.Domain.Handlers.DTOs.Response.BankStatementResponse;

namespace SalaryService.Domain.Handlers.AutoMapperSettings.EntitiesProfiles;

public class BankStatementProfile : Profile
{
    public BankStatementProfile()
    {
        CreateMap<BankStatement, BankStatementSaveRequest>()
            .ReverseMap();

        CreateMap<BankStatement, BankStatementSearchResponse>();
    }
}
