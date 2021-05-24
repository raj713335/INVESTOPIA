using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace FinancialToolsforLongevity.DAL.Models
{
    public partial class Userinformation
    {
        public string Emailid { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
        public string Disabilities { get; set; }
        public int Dependents { get; set; }
        public string Country { get; set; }
        public string State { get; set; }
        public string CountryStatus { get; set; }
        public string PinCode { get; set; }
        public string Taxid { get; set; }
        public string Passportid { get; set; }
        public string Nominee { get; set; }
        public string RelationshipWithNominee { get; set; }
        public decimal CurrentSalary { get; set; }
        public decimal Savings { get; set; }
        public string HealthInsurance { get; set; }
        public string OtherInsurance { get; set; }
        public string Smoke { get; set; }
        public string HealthIssue { get; set; }
        public string Exercise { get; set; }
        public decimal Alcohol { get; set; }
        public decimal Bmi { get; set; }
        public decimal ExpectedAgeToLive { get; set; }
        public decimal YearlySavingsRequired { get; set; }
    }
}
