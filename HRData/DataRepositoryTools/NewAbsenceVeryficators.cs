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

        public bool AbsenceLimitVeryficator(int absencesLeft, DateTime absenceStart, DateTime absenceEnd)
        {
            var absenceSpan = absenceEnd.Date.Subtract(absenceStart.Date);
            int daysOfAbsence = (absenceSpan.Days + 1) - FreeDaysCounter.CountFreeDays(absenceStart, absenceEnd);
            return (daysOfAbsence <= absencesLeft) ? true : false;
            
        }

    }
}
