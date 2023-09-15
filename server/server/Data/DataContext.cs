﻿
using Microsoft.EntityFrameworkCore;
using server.Model;

namespace server.Data
{
    public class DataContext : DbContext
    { 
        public DataContext(DbContextOptions<DataContext> options):base(options){}

        public DbSet<User> Users  {get; set;}
        
    }
    
}