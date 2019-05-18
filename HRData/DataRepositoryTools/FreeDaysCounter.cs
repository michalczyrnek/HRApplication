using System;
using System.Collections.Generic;
using System.Text;

namespace HRData.DataRepositoryTools
{
   public static class FreeDaysCounter
    {
        public static int CountFreeDays(DateTime start, DateTime end)
        {
            int freeDays = 0;

            do
            {
                if ((start.DayOfWeek == DayOfWeek.Saturday) 
                    || start.DayOfWeek == DayOfWeek.Sunday)
                {
                    freeDays++;
                }
                start = start.AddDays(1);

            } while (end>=start);

            return freeDays;

        }

    }

}
