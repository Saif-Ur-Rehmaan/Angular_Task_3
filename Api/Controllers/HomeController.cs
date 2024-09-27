using System.Diagnostics;

using Api.Models;

using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private MyAppDbContext _db;

        public HomeController(ILogger<HomeController> logger,MyAppDbContext db)
        {
            _logger = logger;
            _db = db;
        }

        public IActionResult Index()
        {
            var data = _db.teacher.ToList();
            return Ok(data);
        }
        [HttpPut]
        public IActionResult updateTeacher([FromBody] teacherModel teacher)
        {
            var data = _db.teacher.Find(teacher.Id);
            data.email = teacher.email;
            data.password = teacher.password;
            data.Name = teacher.Name;
            _db.SaveChanges();
            return Ok(data);
        }

        [HttpPost]
        public IActionResult CreateTeacher([FromBody]teacherModel teacher)
        {
            
            var newTeacher = new teacherModel
            {
                email = teacher.email,
                password = teacher.password,  
                Name = teacher.Name
            };

            _db.teacher.Add(newTeacher);
            _db.SaveChanges();

            return Ok(newTeacher);

        }
        [HttpDelete]
        public IActionResult deleteTeacher([FromBody] teacherModel teacher)
        {
            var data = _db.teacher.Find(teacher.Id);
            _db.teacher.Remove(data);
            _db.SaveChanges();
            return Ok(data);
        }

         
    }
}