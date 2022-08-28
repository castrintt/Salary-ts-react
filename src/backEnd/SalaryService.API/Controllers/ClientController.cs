using Microsoft.AspNetCore.Mvc;
using SalaryService.Domain.Handlers.DTOs.Request.ClientRequest;
using SalaryService.Domain.Interfaces.ServiceContracts;

namespace SalaryService.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        private readonly IClientService _clientService;

        public ClientController(IClientService clientService)
        {
            _clientService = clientService;
        }

        [HttpPost("Register")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<bool> Post(ClientRegisterSaveRequest saveRequest) =>
            await _clientService.SaveAsync(saveRequest);

        [HttpPost("Login")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<bool> Post(ClientLoginRequest saveRequest) =>
            await _clientService.Login(saveRequest);
    }
}
