using System;
using System.Collections.Generic;
using System.Text;

namespace HRData.Model
{
    public class NewAbsenceAsset
    {
        public string Worker { get; set; }
        public DateTime AbsenceStart { get; set; }
        public DateTime AbsenceEnd { get; set; }
    }
}
