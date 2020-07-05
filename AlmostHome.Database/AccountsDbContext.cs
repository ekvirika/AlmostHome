using AlmostHome.Domain.Models.Abstraction;
using AlmostHome.Domain.Models.Implementation;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace AlmostHome.Database
{
    public class AccountsDbContext : DbContext
    {
        public AccountsDbContext(DbContextOptions<AccountsDbContext> options) : base(options) { }
        public DbSet<Account> Accounts { get; set; }

    }
}
