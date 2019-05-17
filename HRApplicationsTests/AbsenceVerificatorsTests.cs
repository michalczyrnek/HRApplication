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
            DateTime end = DateTime.Now;
            DateTime start = DateTime.Now;
            end = end.AddMonths(2);
            start = start.AddMonths(3);

            var result = verificator.DateVeryficator(start, end);

            Assert.IsFalse(result);

        }

        [TestMethod]
        public void ShouldReturnFalseForAbsenceStartInPast()
        {
            DateTime end = DateTime.Parse("10.05.2018");
            DateTime start = DateTime.Parse("08.05.2018");


            var result = verificator.DateVeryficator(start, end);

            Assert.IsFalse(result);

        }

        [TestMethod]
        public void ShouldReturnFalseForTimeSpanLongerThanLimit()
        {
            DateTime end = DateTime.Now;
            DateTime start = DateTime.Now;
            end = end.AddDays(10);
            int limit = 5;

            var result = verificator.AbsenceLimitVeryficator(limit, start, end);

            Assert.IsFalse(result);

        }

        [TestMethod]
        public void ShouldReturTrueForTimeSpanShorterThanLimit()
        {
            DateTime end = DateTime.Now;
            DateTime start = DateTime.Now;
            end = end.AddDays(5);
            int limit = 15;

            var result = verificator.AbsenceLimitVeryficator(limit, start, end);

            Assert.IsTrue(result);

        }



    }
}
