using HRData.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HRData
{
    public interface IDataRepository
    {

        Task<List<Worker>> GetWorkers();
        Task<List<AbsenceAsset>> GetAbsenceAssets();

        Task<List<AbsenceAsset>> GetAbsenceHistoryAssets();

        Task<Absence> AddNewAbsence(NewAbsenceAsset asset);

        Task<List<Absence>> DeleteAbsences(List<Absence> absencestoRemove);
    }
}
