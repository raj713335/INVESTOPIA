using System;
using System.Collections.Generic;
using System.Text;
using FinancialToolsforLongevity.DAL.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Data.SqlClient;
using System.Data;

namespace FinancialToolsforLongevity.DAL
{
    public class InvestopiaRepository
    {
        INVESTOPIAContext context;

        public InvestopiaRepository()
        {
            context = new INVESTOPIAContext();
        }


        public List<Userdetail> GetUserDetails()
        {
            List<Userdetail> usersList = null;
            try
            {
                usersList = context.Userdetails
                                     .FromSqlRaw("SELECT * FROM ufn_GetUserDetails()").ToList();
            }
            catch (Exception)
            {
                usersList = null;
            }
            return usersList;
        }


        public int RegisterNewUser(string FIRSTNAME, string LASTNAME, string EMAILID, string PASSWORD)
        {

            int result = -1;
            int returnResult = 0;
            try
            {
                SqlParameter prmFIRSTNAME = new SqlParameter("@FIRSTNAME", FIRSTNAME);
                SqlParameter prmLASTNAME = new SqlParameter("@LASTNAME", LASTNAME);
                SqlParameter prmEMAILID = new SqlParameter("@EMAILID", EMAILID);
                SqlParameter prmPASSWORD = new SqlParameter("@PASSWORD", PASSWORD);
      


                SqlParameter prmReturnResult = new SqlParameter("@ReturnResult", System.Data.SqlDbType.Int);
                prmReturnResult.Direction = System.Data.ParameterDirection.Output;

                result = context.Database.ExecuteSqlRaw("EXEC @ReturnResult = usp_RegisterUser @FIRSTNAME, @LASTNAME, @EMAILID, @PASSWORD", new[] { prmReturnResult, prmFIRSTNAME, prmLASTNAME, prmEMAILID, prmPASSWORD});
                returnResult = Convert.ToInt32(prmReturnResult.Value);

                Console.WriteLine(Convert.ToInt32(result));
                Console.WriteLine(returnResult);

            }
            catch (Exception)
            {
                returnResult = -99;
            }
            return returnResult;
        }



        public int LoginValidation(string EMAILID, string PASSWORD)
        {

            int result = -1;
            int returnResult = 0;
            try
            {
                
                SqlParameter prmEMAILID = new SqlParameter("@EMAILID", EMAILID);
                SqlParameter prmPASSWORD = new SqlParameter("@PASSWORD", PASSWORD);



                SqlParameter prmReturnResult = new SqlParameter("@ReturnResult", System.Data.SqlDbType.Int);
                prmReturnResult.Direction = System.Data.ParameterDirection.Output;

                result = context.Database.ExecuteSqlRaw("EXEC @ReturnResult = usp_LoginValidation @EMAILID, @PASSWORD", new[] { prmReturnResult, prmEMAILID, prmPASSWORD });
                returnResult = Convert.ToInt32(prmReturnResult.Value);

                Console.WriteLine(Convert.ToInt32(result));
                Console.WriteLine(returnResult);

            }
            catch (Exception)
            {
                returnResult = -99;
            }
            return returnResult;
        }



        public int AddUserInformation(string EMAILID, string GENDER, int AGE, string DISABILITIES, int DEPENDENTS, string COUNTRY, string STATE, string COUNTRY_STATUS, string PIN_CODE,
            string TAXID, string PASSPORTID, string NOMINEE, string RELATIONSHIP_WITH_NOMINEE, decimal CURRENT_SALARY, decimal SAVINGS, string HEALTH_INSURANCE, string OTHER_INSURANCE,
            string SMOKE, string HEALTH_ISSUE, string EXERCISE, decimal ALCOHOL, decimal BMI, decimal EXPECTED_AGE_TO_LIVE, decimal YEARLY_SAVINGS_REQUIRED)
        {

            int result = -1;
            int returnResult = 0;
            try
            {
                SqlParameter prmEMAILID = new SqlParameter("@EMAILID", EMAILID);
                SqlParameter prmGENDER = new SqlParameter("@GENDER", GENDER);
                SqlParameter prmAGE = new SqlParameter("@AGE", AGE);
                SqlParameter prmDISABILITIES = new SqlParameter("@DISABILITIES", DISABILITIES);
                SqlParameter prmDEPENDENTS = new SqlParameter("@DEPENDENTS", DEPENDENTS);
                SqlParameter prmCOUNTRY = new SqlParameter("@COUNTRY", COUNTRY);
                SqlParameter prmSTATE = new SqlParameter("@STATE", STATE);
                SqlParameter prmCOUNTRY_STATUS = new SqlParameter("@COUNTRY_STATUS", COUNTRY_STATUS);
                SqlParameter prmPIN_CODE = new SqlParameter("@PIN_CODE", PIN_CODE);
                SqlParameter prmTAXID = new SqlParameter("@TAXID", TAXID);
                SqlParameter prmPASSPORTID = new SqlParameter("@PASSPORTID", PASSPORTID);
                SqlParameter prmNOMINEE = new SqlParameter("@NOMINEE", NOMINEE);
                SqlParameter prmRELATIONSHIP_WITH_NOMINEE = new SqlParameter("@RELATIONSHIP_WITH_NOMINEE", RELATIONSHIP_WITH_NOMINEE);
                SqlParameter prmCURRENT_SALARY = new SqlParameter("@CURRENT_SALARY", CURRENT_SALARY);
                SqlParameter prmSAVINGS = new SqlParameter("@SAVINGS", SAVINGS);
                SqlParameter prmHEALTH_INSURANCE = new SqlParameter("@HEALTH_INSURANCE", HEALTH_INSURANCE);
                SqlParameter prmOTHER_INSURANCE = new SqlParameter("@OTHER_INSURANCE", OTHER_INSURANCE);
                SqlParameter prmSMOKE = new SqlParameter("@SMOKE", SMOKE);
                SqlParameter prmHEALTH_ISSUE = new SqlParameter("@HEALTH_ISSUE", HEALTH_ISSUE);
                SqlParameter prmEXERCISE = new SqlParameter("@EXERCISE", EXERCISE);
                SqlParameter prmALCOHOL = new SqlParameter("@ALCOHOL", ALCOHOL);
                SqlParameter prmBMI = new SqlParameter("@BMI", BMI);
                SqlParameter prmEXPECTED_AGE_TO_LIVE = new SqlParameter("@EXPECTED_AGE_TO_LIVE", EXPECTED_AGE_TO_LIVE);
                SqlParameter prmYEARLY_SAVINGS_REQUIRED = new SqlParameter("@YEARLY_SAVINGS_REQUIRED", YEARLY_SAVINGS_REQUIRED);


                SqlParameter prmReturnResult = new SqlParameter("@ReturnResult", System.Data.SqlDbType.Int);
                prmReturnResult.Direction = System.Data.ParameterDirection.Output;

                result = context.Database.ExecuteSqlRaw("EXEC @ReturnResult = USP_INSERT_USER_INFORMATION @EMAILID, @GENDER, @AGE, @DISABILITIES, @DEPENDENTS, @COUNTRY, @STATE, @COUNTRY_STATUS," +
                    "@PIN_CODE, @TAXID, @PASSPORTID, @NOMINEE, @RELATIONSHIP_WITH_NOMINEE, @CURRENT_SALARY, @SAVINGS, @HEALTH_INSURANCE, @OTHER_INSURANCE, @SMOKE, @HEALTH_ISSUE, @EXERCISE, @ALCOHOL, @BMI, @EXPECTED_AGE_TO_LIVE, @YEARLY_SAVINGS_REQUIRED ", 
                    new[] { prmReturnResult, prmEMAILID, prmGENDER, prmAGE, prmDISABILITIES, prmDEPENDENTS, prmCOUNTRY, prmSTATE, prmCOUNTRY_STATUS, prmPIN_CODE, prmTAXID, prmPASSPORTID, prmNOMINEE,
                    prmRELATIONSHIP_WITH_NOMINEE, prmCURRENT_SALARY, prmSAVINGS, prmHEALTH_INSURANCE, prmOTHER_INSURANCE, prmSMOKE, prmHEALTH_ISSUE, prmEXERCISE, prmALCOHOL, prmBMI, prmEXPECTED_AGE_TO_LIVE, prmYEARLY_SAVINGS_REQUIRED});
                returnResult = Convert.ToInt32(prmReturnResult.Value);

                Console.WriteLine(Convert.ToInt32(result));

            }
            catch (Exception)
            {
                returnResult = -99;
            }
            return returnResult;
        }



        public List<Userinformation> GetAllUserInformation()
        {
            List<Userinformation> usersList = null;
            try
            {
                usersList = context.Userinformations
                                     .FromSqlRaw("SELECT * FROM ufn_GetUserINFORMATION()").ToList();
            }
            catch (Exception)
            {
                usersList = null;
            }
            return usersList;
        }



        public List<Userinformation> GetUserFinance(string emailid)
        {
            List<Userinformation> lstProduct = null;
            try
            {
                SqlParameter prmEMAILID = new SqlParameter("@EMAILID", emailid);

                lstProduct = context.Userinformations
                                     .FromSqlRaw("SELECT * FROM ufn_GetSpecificUserINFORMATION(@EMAILID)", prmEMAILID).ToList();
            }
            catch (Exception)
            {
                lstProduct = null;
            }
            return lstProduct;
        }
    }
}
