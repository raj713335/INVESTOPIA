using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinancialToolsforLongevity.DAL.Models
{
    public class UserFinance
    {
        [Key]
        public string Emailid { get; set; }
        public int Age { get; set; }
        public decimal CurrentSalary { get; set; }
        public decimal Savings { get; set; }
        public decimal ExpectedAgeToLive { get; set; }
        public decimal YearlySavingsRequired { get; set; }
    }
}
