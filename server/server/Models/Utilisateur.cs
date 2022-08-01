using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class Utilisateur
    {
        public int ID { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }

        public string Email { set; get; }

        public string password { set; get; }

        public ICollection<Token> Tokens { set; get; }
    }
}
