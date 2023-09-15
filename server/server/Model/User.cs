using System.ComponentModel.DataAnnotations;

namespace server.Model
{
    public class User
    {
        public int Id { get; set; }
        [Required]
        [MinLength(2)]
        public String Name { get; set; }
        [Required]
        [MinLength(4)]
        [MaxLength(6)]
        public String Gender { get; set; }
        [Required]
        public int Age { get; set; }
        [Required]
        public String Email { get; set; }
    }
}
