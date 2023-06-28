using Microsoft.EntityFrameworkCore;

public class StrongPizzaContext : DbContext
{
  public StrongPizzaContext(DbContextOptions<StrongPizzaContext> options) : base(options)
  {

  }

  protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<Pizza>()
        .HasMany(e => e.Toppings)
        .WithMany(e => e.Pizzas);

    modelBuilder.Entity<Topping>()
        .HasIndex(e =>  e.Name)
        .IsUnique();

    modelBuilder.Entity<Pizza>()
        .HasIndex(e => e.Name)
        .IsUnique();

}


  public DbSet<Pizza> Pizzas { get; set; }
  public DbSet<Topping> Toppings { get; set; }
}