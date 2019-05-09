using System;
using System.Collections.Generic;
using System.Text;

namespace HRData.Model
{
    public class AbsenceAsset
    {
        public int ID { get; set; }

        public int WorkerID { get; set; }

        public string Name { get; set; }

        public string Position { get; set; }

        public DateTime AbsenceStart { get; set; }

        public DateTime AbsenceEnd { get; set; }
    }
}
