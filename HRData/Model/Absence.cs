using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace HRData.Model
{
    public class Absence
    {
        [Required]
        public int ID { get; set; }
        [Required]
        public int WorkerID { get; set; }
        [Required]
        public DateTime AbsenceStart { get; set; }
        [Required]
        public DateTime AbsenceEnd { get; set; }

        [Required]
        public bool L4 { get; set; }
    }
}
