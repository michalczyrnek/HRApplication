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
            CheckIsNewYear();
            var assets = await  (from absence in _dataContext.Absences
                          join worker in _dataContext.Workers
                               on absence.WorkerID equals worker.ID
                               where absence.AbsenceEnd.Date >= DateTime.Now.Date
                          select new AbsenceAsset
                          {
                              ID = absence.ID,
                              WorkerID = worker.ID,
                              Name = worker.Name,
                              Position = worker.Position,
                              AbsenceEnd = absence.AbsenceEnd.Date,
                              AbsenceStart = absence.AbsenceStart.Date
                          }).ToListAsync();
            return assets;
        }

       

        public async Task<List<AbsenceAsset>> GetAbsenceHistoryAssets()
        {
             var assets = await  (from absence in _dataContext.Absences
                          join worker in _dataContext.Workers
                               on absence.WorkerID equals worker.ID
                               where absence.AbsenceEnd.Date < DateTime.Now.Date
                          select new AbsenceAsset
                          {
                              ID = absence.ID,
                              WorkerID = worker.ID,
                              Name = worker.Name,
                              Position = worker.Position,
                              AbsenceEnd = absence.AbsenceEnd.Date,
                              AbsenceStart = absence.AbsenceStart.Date
                          }).ToListAsync();
            return assets;
        }

        public async Task<List<Worker>> GetWorkers()
        {
            var workers = await _dataContext.Workers.ToListAsync();
            return workers;

        }

        public async Task<Absence> AddNewAbsence(NewAbsenceAsset asset)
        {
            Absence newAbsence = new Absence()
            {
               
                AbsenceStart = asset.AbsenceStart,
                AbsenceEnd = asset.AbsenceEnd,
                WorkerID = _dataContext.Workers.First(x=>x.Name==asset.Worker).ID
            };

            var absenceSpan = asset.AbsenceEnd.Subtract(asset.AbsenceStart);
            if (absenceSpan.Days > 0)
            {
                _dataContext.Workers.First(x => x.Name == asset.Worker).AbsenceLimit -= (absenceSpan.Days+1);
            }
            else
            {
                _dataContext.Workers.First(x => x.Name == asset.Worker).AbsenceLimit -= 1;
            }


           await _dataContext.Absences.AddAsync(newAbsence);
            await _dataContext.SaveChangesAsync();

            return newAbsence;
        }

        public async Task<List<Absence>> DeleteAbsences(List<Absence> absencestoRemove)
        {
            foreach (var absence in absencestoRemove)
            {
                var absenceSpan = absence.AbsenceEnd.Subtract(absence.AbsenceStart);
                _dataContext.Absences.Remove(absence);
                _dataContext.Workers.First(x => x.ID == absence.WorkerID).AbsenceLimit += (absenceSpan.Days + 1);
            }

            await _dataContext.SaveChangesAsync();

            return absencestoRemove;

        }
        private async void CheckIsNewYear()
        {
            if (!(_dataContext.Workers.ToList()[0].Year == DateTime.Now.Year))
            {
                foreach (var worker in _dataContext.Workers)
                {
                    worker.Year = DateTime.Now.Year;
                    worker.AbsenceLimit += 20;
                }
                await _dataContext.SaveChangesAsync();
            }
        }

    }
}
