using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Model;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        private readonly DataContext _context;
        public UsersController(DataContext context)
        {
            _context = context;
        }


        // GET api/Users
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var Users = await _context.Users.ToListAsync();
            return Ok(Users);
        }

        // GET api/Users/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var value = await _context.Users.FirstOrDefaultAsync(x => x.Id == id);
            return Ok(value);
        }
      


        // POST api/Users
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] User value)
        {
            if (!ModelState.IsValid)
            {
                throw new InvalidOperationException("value is not valid");
            }
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Name == value.Name);
            if (user != null)
            {
                throw new InvalidOperationException("duplicated user name");
            }
            else
            {
                await _context.Users.AddAsync(value);
                await _context.SaveChangesAsync();
            }

            return Ok(value);
        }

        // PUT api/Users/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] User value)
        {
            User user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                throw new InvalidOperationException("id does not exist");
            }
            else
            {

                if (user.Name != value.Name)
                {
                    var chackNameDuplication = await _context.Users.FirstOrDefaultAsync(x => x.Name == value.Name);
                    if (chackNameDuplication != null)
                    {
                        throw new InvalidOperationException("name is taken by another user");

                    }
                }

                user.Name = value.Name;
                user.Age = value.Age;
                user.Gender = value.Gender;
                user.Email = value.Email;

                await _context.SaveChangesAsync();
            }
            return Ok(value);
        }

        // DELETE api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var myModel = await _context.Users.FindAsync(id);
            if (myModel == null)
            {
                return NotFound();
            }

            _context.Users.Remove(myModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
