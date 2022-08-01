using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace server.Models
{
    public class ExamenContext: DbContext
    {
        public ExamenContext(DbContextOptions<ExamenContext> options) : base(options)
        {

        }

        public DbSet<Utilisateur> Utilisateurs { get; set; }
        public DbSet<Task> Tasks { get; set; }
        public DbSet<Employe> Employes { get; set; }
        public DbSet<Token> Tokens { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Utilisateur>().ToTable("Utilisateur");
            modelBuilder.Entity<Task>().ToTable("Task");
            modelBuilder.Entity<Employe>().ToTable("Employe");
            modelBuilder.Entity<Token>().ToTable("Token");
        }

    }
}
