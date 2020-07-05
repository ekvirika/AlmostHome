using AlmostHome.Domain.Models.Abstraction;
using AlmostHome.Domain.Models.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace AlmostHome.Domain.Models.Implementation
{
    [Table("Animals")]
    public class Animal : IAnimal
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string LocationCity { get; set; }
        [Required]
        public AnimalCategory AnimalCategory { get; set; }
        public string AnimalBreed { get; set; }
        [Required]
        public string Color { get; set; }
        [Required]
        public GenderType Sex { get; set; }
        [Required]
        public string Condition { get; set; }
        [Required]
        public string ReasonToAdopt { get; set; }
        [Required]
        public string FoundDate { get; set; }
        [Required]
        public string ImageUrl { get; set; }
        [Required]
        public double Age { get; set; }
    }
}
