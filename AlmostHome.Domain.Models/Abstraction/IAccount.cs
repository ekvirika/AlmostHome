using System;
using System.Collections.Generic;
using System.Text;
using AlmostHome.Domain.Models.Enums;
using AlmostHome.Domain.Models.Implementation;

namespace AlmostHome.Domain.Models.Abstraction
{
    public interface IAccount
    {
        int Id { get; set; }
        //User User { get; set; }  
        string Name { get; set; }
        string Surname { get; set; }
        int Age { get; set; }
        string Email { get; set; }
        GenderType Gender { get; set; }
        string Password { get; set; }  
/*        List<Animal> AnimalsAdopted { get; set; }
        List<Animal> AnimalsPosted { get; set; }*/
        string ImageUrl { get; set; }
    }
}
