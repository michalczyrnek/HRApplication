using System;
using HRData.DataRepositoryTools;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace HRApplicationsTests
{


    [TestClass]
    public class AbsenceVerificatorsTests
    {
        private NewAbsenceVeryficators verificator = new NewAbsenceVeryficators();

        [TestMethod]
        public void ShouldReturnFalseForAbsenceEndEarlierThanStart()
        {
            DateTime end = new DateTime();
            DateTime start = new DateTime();
            end.AddMonths(2);
            start.AddMonths(3);

           var result =  verificator.DateVeryficator(start, end);

            Assert.IsFalse(result);

        }

        [TestMethod]
        public void ShouldReturnFalseForAbsenceStartInPast()
        {
            DateTime end = DateTime.Parse("10.05.2018");
            DateTime start = DateTime.Parse("08.05.2018");

            start.AddMonths(-3);

            var result = verificator.DateVeryficator(start, end);

            Assert.IsFalse(result);

        }

        

    }
}
