using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRData;
using HRData.DataRepositoryTools;
using HRData.Model;
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

        
        [HttpGet("workers")]
        public async Task<IActionResult> GetWorkers()
        {
            var workers = await _repo.GetWorkers();
            return Ok(workers);
        }

          [HttpGet("absences")]
        public async Task<IActionResult> GetAbsence()
        {
            var absence = await _repo.GetAbsenceAssets();
            return Ok(absence);
        }

          [HttpGet("absenceshistory")]
        public async Task<IActionResult> GetAbsenceHistory()
        {
            var absencehistory = await _repo.GetAbsenceHistoryAssets();
            return Ok(absencehistory);
        }

        [HttpPost ("newabsence")]

        public async Task<IActionResult> ApplyNewAbsence(NewAbsenceAsset asset )
        {
            if (new NewAbsenceVeryficators().DateVeryficator(asset.AbsenceStart, asset.AbsenceEnd))
            {
                var absence = await _repo.AddNewAbsence(asset);
                return StatusCode(201);
            }
            else
            {
                return BadRequest("Can't add new absence. Check data correctness.");
            }
        }

        [HttpDelete ("deleteabsences")]

        public async Task<IActionResult> DeleteAbsences (List<Absence> absencesToRemove)
        {
            
            await _repo.DeleteAbsences(absencesToRemove);
            return StatusCode(202);
        }
       
    }
}
