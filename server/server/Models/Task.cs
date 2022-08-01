using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class Task
    {
        public int ID { get; set; }

        public string Title { get; set; }

        public string Status { get; set; }

        public int EmployeID { get; set; }
    }
}
