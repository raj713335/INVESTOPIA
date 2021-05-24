using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FinancialToolsforLongevity.DAL;
using FinancialToolsforLongevity.DAL.Models;
using FinancialToolsforongevity.ServiceLayer;
using FinancialToolsforongevity.ServiceLayer.Models;


namespace FinancialToolsforongevity.ServiceLayer.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class InvestopiaController : Controller
    {
        public InvestopiaRepository Invest;

        public InvestopiaController()
        {
            Invest = new InvestopiaRepository();
        }

        [HttpGet]
        public JsonResult GetUserDetails()
        {
            List<FinancialToolsforLongevity.DAL.Models.Userdetail> userDetails;
            try
            {

                userDetails = Invest.GetUserDetails();

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                userDetails = null;
            }
            return Json(userDetails);
        }



        [HttpPost]
        public int RegisterNewUser(registerUser obj)
        {
            int result;
            try
            {

                result = Invest.RegisterNewUser(obj.FIRSTNAME, obj.LASTNAME, obj.EMAILID, obj.PASSWORD);

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                result = -99;
            }
            return result;
        }



        



        [HttpPost]
        public int LoginValidation(registerUser obj)
        {
            int result;
            try
            {

                result = Invest.LoginValidation(obj.EMAILID, obj.PASSWORD);

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                result = -99;
            }
            return result;
        }



        [HttpPost]
        public int AddUserInformation(Userinformation obj)
        {
            int result;
            try
            {

                result = Invest.AddUserInformation(obj.Emailid, obj.Gender, obj.Age, obj.Disabilities, obj.Dependents, obj.Country, obj.State, obj.CountryStatus, obj.PinCode, obj.Taxid, obj.Passportid,
                    obj.Nominee, obj.RelationshipWithNominee, obj.CurrentSalary, obj.Savings, obj.HealthInsurance, obj.OtherInsurance, obj.Smoke, obj.HealthIssue, obj.Exercise, obj.Alcohol, obj.Bmi,
                    obj.ExpectedAgeToLive, obj.YearlySavingsRequired);

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                result = -99;
            }
            return result;
        }



        [HttpGet]
        public JsonResult GetAllUserInformations()
        {
            List<FinancialToolsforLongevity.DAL.Models.Userinformation> userDetails;
            try
            {

                userDetails = Invest.GetAllUserInformation();

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                userDetails = null;
            }
            return Json(userDetails);
        }



        [HttpGet]
        public JsonResult GetUserFinance(string EmailId)
        {
            List<FinancialToolsforLongevity.DAL.Models.Userinformation> userDetails;
            try
            {

                userDetails = Invest.GetUserFinance(EmailId);

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                userDetails = null;
            }
            return Json(userDetails);
        }
    }
}
