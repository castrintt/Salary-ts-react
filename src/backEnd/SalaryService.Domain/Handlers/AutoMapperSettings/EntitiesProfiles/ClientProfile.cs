using AutoMapper;
using SalaryService.Domain.Entities;
using SalaryService.Domain.Handlers.DTOs.Request.ClientRequest;

namespace SalaryService.Domain.Handlers.AutoMapperSettings.EntitiesProfiles;

public class ClientProfile : Profile
{
    public ClientProfile()
    {
        CreateMap<Client, ClientRegisterSaveRequest>()
            .ForMember(cr => cr.Account, map => map.MapFrom(c => c.Account))
            .ForMember(cr => cr.BankStatement, map => map.MapFrom(c => c.BankStatement))
            .ReverseMap();
    }
}
