using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using HRData.Model;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace HRData
{
    public class DataRepository : IDataRepository
    {
        private readonly HRDataContext _dataContext;
        public DataRepository(HRDataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<List<AbsenceAsset>> GetAbsenceAssets()
        {
            var assets = await  (from absence in _dataContext.Absences
                          join worker in _dataContext.Workers
                               on absence.WorkerID equals worker.ID
                          select new AbsenceAsset
                          {
                              ID = absence.ID,
                              Name = worker.Name,
                              Position = worker.Position,
                              AbsenceEnd = absence.AbsenceEnd,
                              AbsenceStart = absence.AbsenceStart
                          }).ToListAsync();
            return assets;
        }

        public async Task<List<Worker>> GetWorkers()
        {
            var workers = await _dataContext.Workers.ToListAsync();
            return workers;

        }
    }
}
