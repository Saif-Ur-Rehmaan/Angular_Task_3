using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace Api.Models
{
    public class teacherModel
    {
        [Key]
        public int Id { get; set; }
        [AllowNull]
        public string Name { get; set; }
        [AllowNull]
        public string email { get; set; }
        [AllowNull]
        public string password { get; set; }
    }
}
