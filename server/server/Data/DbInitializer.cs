using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using server.Models;

namespace server.Data
{
    public class DbInitializer
    {
        public static void Initialize(ExamenContext context)
        {
            context.Database.EnsureCreated();
        }
    }
}
