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
    }
}
