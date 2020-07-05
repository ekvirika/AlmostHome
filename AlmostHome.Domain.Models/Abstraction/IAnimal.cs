using AlmostHome.Domain.Models.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace AlmostHome.Domain.Models.Abstraction
{
    public interface IAnimal
    {
        int Id {get;set;}
        string Name { get; set; }
        string LocationCity { get; set; }
        AnimalCategory AnimalCategory { get; set; }
        string AnimalBreed { get; set; }
        string Color { get; set; }
        GenderType Sex { get; set; }
        string Condition { get; set; }
        string ReasonToAdopt { get; set; }
        string FoundDate { get; set; }
        string ImageUrl { get; set; }
        double Age { get; set; }
    }
}
