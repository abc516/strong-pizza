using Microsoft.EntityFrameworkCore;

public class StrongPizzaContext : DbContext
{
  public StrongPizzaContext(DbContextOptions<StrongPizzaContext> options) : base(options)
  {

  }

  public DbSet<Pizza> Pizzas { get; set; }
  public DbSet<Topping> Toppings { get; set; }
}