using AlmostHome.Domain.Models.Abstraction;
using AlmostHome.Domain.Models.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace AlmostHome.Domain.Models.Implementation
{
    public class User : IUser
    {
        [Key]
        public int Id { get; set; }
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
    }
}
