using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MVC_React.Entities
{
    public class Email
    {
        public Guid EmailId { get;  protected set; }

        public string BackgroundColour { get; set; }

        public bool FloatingColumn { get; set; }

        public string FloatingColumnColour { get; set; }

        public string HtmlContent { get; set; }

        public string TextColour { get; set; }

        public int TextSize { get; set; }

        public string FontType { get; set; }

        public string MarkdownContent { get; set; }

        public bool Save()
        {
            try
            {
                using (var context = new EmailContext())
                {
                    context.Emails.Add(this);
                    context.SaveChanges();
                }

                return true;
            }
            catch (Exception e)
            {

                throw new System.Exception("Unable to save Email" + e.StackTrace);
            }

        }


        public bool GetEmail(Guid Id)
        {
            try
            {
                using (var context = new EmailContext())
                {
                    Email email = context.Emails.Where(x => x.EmailId == Id).First();
                    
                }

                return true;
            }
            catch (Exception e)
            {

                throw new System.Exception("Unable to retrieve Email" + e.StackTrace);
            }
        }
    }


    public class EmailContext : DbContext
    {


        public EmailContext() : base()
        { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
            .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
            .AddJsonFile("appsettings.json")
            .Build();

            string conn = configuration.GetConnectionString("DefaultConnection");

            optionsBuilder.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
        }

        public DbSet<Email> Emails { get; set; }


    }
}
