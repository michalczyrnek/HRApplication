using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRData;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HRApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HRDataController : ControllerBase
    {
        private readonly IDataRepository _repo;
        public HRDataController(IDataRepository repository)
        {
            _repo = repository;
        }

        // GET: api/HRData
        [HttpGet]
        public async Task<IActionResult> GetWorkers()
        {
            var workers = await _repo.GetWorkers();
            return Ok(workers);
        }

       
    }
}
