using AlmostHome.Domain.Models.Abstraction;
using AlmostHome.Domain.Models.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace AlmostHome.Domain.Models.Implementation
{
    [Table("Accounts")]
    public class Account : IAccount
    {
        [Key]
        public int Id { get; set; }
        //[Required]
        //public User User { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Surname { get; set; }
        [Required]
        public int Age { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public GenderType Gender { get; set; }
/*        [Required]
        public List<Animal> AnimalsAdopted { get; set; } = new List<Animal>();
        [Required]
        public List<Animal> AnimalsPosted { get; set; } = new List<Animal>();*/
        public string ImageUrl { get; set; }
    }
}
