using Api.Models;

using Microsoft.EntityFrameworkCore;

namespace Api
{
    public class MyAppDbContext:DbContext
    {
        public MyAppDbContext(DbContextOptions<MyAppDbContext> options):base(options){}
        public DbSet<teacherModel> teacher { get; set; }
    }
}
