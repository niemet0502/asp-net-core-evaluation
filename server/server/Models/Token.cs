using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class Token
    {
        public int ID { get; set; }
        public string Content { get; set; }
        public string ExpirationDate { get; set; }

        public int UtilisateurID { get; set; }
    }
}
