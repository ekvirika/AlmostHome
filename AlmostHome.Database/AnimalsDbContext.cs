using AlmostHome.Domain.Models.Implementation;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace AlmostHome.Database
{
    public class AnimalsDbContext : DbContext
    {
        public AnimalsDbContext(DbContextOptions<AnimalsDbContext> options) : base(options) { }
        public DbSet<Animal> Animals { get; set; }
    }
}
