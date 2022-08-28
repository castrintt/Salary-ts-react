using AutoMapper;
using SalaryService.Domain.Entities;
using SalaryService.Domain.Handlers.DTOs.Request.AccountRequest;

namespace SalaryService.Domain.Handlers.AutoMapperSettings.EntitiesProfiles;

public class AccountProfile : Profile
{
	public AccountProfile()
	{
		CreateMap<Account, AccountSaveRequest>()
			.ReverseMap();
	}
}
