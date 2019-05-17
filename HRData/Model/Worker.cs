using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace HRData.Model
{
    public class Worker
    {
        [Required]
        public int ID { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Position { get; set; }
        [Required]
        public int AbsenceLimit { get; set; }
        [Required]
        public int Year { get; set; }
    }
}
