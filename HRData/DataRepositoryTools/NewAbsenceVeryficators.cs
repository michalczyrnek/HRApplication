using System;
using System.Collections.Generic;
using System.Text;

namespace HRData.DataRepositoryTools
{
    public class NewAbsenceVeryficators
    {
        public bool DateVeryficator(DateTime absenceStart, DateTime absenceEnd)
        {

            return (absenceEnd >= absenceStart) && (absenceStart.Date>=DateTime.Now.Date) ? true : false;

        }

    }
}
