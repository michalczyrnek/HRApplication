using HRData.Model;
using Microsoft.EntityFrameworkCore;
using System;

namespace HRData
{
    public class HRDataContext : DbContext
    {
        public HRDataContext(DbContextOptions options) : base (options) { }

        public DbSet<Worker> Workers { get; set; }
        public DbSet<Absence> Absences { get; set; }

    }
}
