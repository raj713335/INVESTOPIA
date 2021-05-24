using System;
using System.Collections.Generic;

#nullable disable

namespace FinancialToolsforLongevity.DAL.Models
{
    public partial class Userdetail
    {
        public int Userid { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Emailid { get; set; }
        public string Password { get; set; }
        public string Roleid { get; set; }
    }
}
