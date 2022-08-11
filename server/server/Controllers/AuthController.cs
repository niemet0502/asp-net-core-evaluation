using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using server.Models;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ExamenContext _context;
        private IConfiguration _config;


        public AuthController(ExamenContext context, IConfiguration config)
        {
            _context = context;
            _config = config;
        }

        [HttpPost("Login")]
        public IActionResult Login([FromBody] UserLogin userLogin)
        {

            var user = Authenticate(userLogin);

            

            if (user != null)
            {
                var token = Generate(user);
                return Ok(token);
            }

            return NotFound("User not found");
        }

        private string Generate(Utilisateur user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.FirstName),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.GivenName, user.LastName),
            };


            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Audience"],
              claims,
              expires: DateTime.Now.AddMinutes(15),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
        private  Utilisateur Authenticate(UserLogin user)
        {
            var currentUser =  _context.Utilisateurs.Where(u => u.Email == user.Email).Where(u => u.password == user.Password).FirstOrDefault();


            if (currentUser != null)
            {
                return (Utilisateur)currentUser;
            }

            return null;
            
           
        }
    }
}
