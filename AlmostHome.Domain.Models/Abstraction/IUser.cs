using AlmostHome.Domain.Models.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace AlmostHome.Domain.Models.Abstraction
{
    public interface IUser
    {
        int Id { get; set; }
        string Name { get; set; }
        string Surname { get; set; }
        int Age { get; set; }
        string Email { get; set; }
        GenderType Gender { get; set; }
    }
}
