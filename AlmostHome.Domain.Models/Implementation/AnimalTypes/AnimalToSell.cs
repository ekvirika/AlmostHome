using AlmostHome.Domain.Models.Abstraction;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace AlmostHome.Domain.Models.Implementation.AnimalTypes
{
    public class AnimalToSell : Animal, IAnimal
    {
        [Required]
        public double Price { get; set; }
        [Required]
        public bool Vaccinated { get; set; }

    }
}
