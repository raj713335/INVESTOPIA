using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.Json;
using System.Linq;

#nullable disable

namespace FinancialToolsforLongevity.DAL.Models
{
    public partial class INVESTOPIAContext : DbContext
    {
        public INVESTOPIAContext()
        {
        }

        public INVESTOPIAContext(DbContextOptions<INVESTOPIAContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Userdetail> Userdetails { get; set; }
        public virtual DbSet<Userinformation> Userinformations { get; set; }
        public virtual DbSet<UserFinance> UserFinances { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var builder = new ConfigurationBuilder()
                       .SetBasePath(Directory.GetCurrentDirectory())
                       .AddJsonFile("appsettings.json");
            var config = builder.Build();

            var connectionString = config.GetConnectionString("InvestopiaDBConnectionString");


            if (!optionsBuilder.IsConfigured)
            {
                //#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer(connectionString);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Userdetail>(entity =>
            {
                entity.HasKey(e => e.Emailid)
                    .HasName("pk_EmailId");

                entity.ToTable("USERDETAILS");

                entity.Property(e => e.Emailid)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("EMAILID");

                entity.Property(e => e.Firstname)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("FIRSTNAME");

                entity.Property(e => e.Lastname)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("LASTNAME");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("PASSWORD");

                entity.Property(e => e.Roleid)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("ROLEID");

                entity.Property(e => e.Userid)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("USERID");
            });

            modelBuilder.Entity<Userinformation>(entity =>
            {
                entity.HasKey(e => e.Emailid)
                    .HasName("pk_EmailIds");

                entity.ToTable("USERINFORMATION");

                entity.Property(e => e.Emailid)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("EMAILID");

                entity.Property(e => e.Age).HasColumnName("AGE");

                entity.Property(e => e.Alcohol)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("ALCOHOL");

                entity.Property(e => e.Bmi)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("BMI");

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("COUNTRY");

                entity.Property(e => e.CountryStatus)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("COUNTRY_STATUS");

                entity.Property(e => e.CurrentSalary)
                    .HasColumnType("decimal(20, 2)")
                    .HasColumnName("CURRENT_SALARY");

                entity.Property(e => e.Dependents).HasColumnName("DEPENDENTS");

                entity.Property(e => e.Disabilities)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("DISABILITIES");

                entity.Property(e => e.Exercise)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("EXERCISE");

                entity.Property(e => e.ExpectedAgeToLive)
                    .HasColumnType("decimal(5, 2)")
                    .HasColumnName("EXPECTED_AGE_TO_LIVE");

                entity.Property(e => e.Gender)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("GENDER");

                entity.Property(e => e.HealthInsurance)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("HEALTH_INSURANCE");

                entity.Property(e => e.HealthIssue)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("HEALTH_ISSUE");

                entity.Property(e => e.Nominee)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("NOMINEE");

                entity.Property(e => e.OtherInsurance)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("OTHER_INSURANCE");

                entity.Property(e => e.Passportid)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("PASSPORTID");

                entity.Property(e => e.PinCode)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("PIN_CODE");

                entity.Property(e => e.RelationshipWithNominee)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("RELATIONSHIP_WITH_NOMINEE");

                entity.Property(e => e.Savings)
                    .HasColumnType("decimal(20, 2)")
                    .HasColumnName("SAVINGS");

                entity.Property(e => e.Smoke)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("SMOKE");

                entity.Property(e => e.State)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("STATE");

                entity.Property(e => e.Taxid)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("TAXID");

                entity.Property(e => e.YearlySavingsRequired)
                    .HasColumnType("decimal(20, 2)")
                    .HasColumnName("YEARLY_SAVINGS_REQUIRED");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
