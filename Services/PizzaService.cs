

using Microsoft.EntityFrameworkCore;
using strong_pizza.Services.Interfaces;

// todo properly implement
public class PizzaService : IPizzaService
{
    private StrongPizzaContext _context;
    public PizzaService(StrongPizzaContext context){
        _context = context;
    }
    public void AddPizza(Pizza pizza)
    {
        _context.Add<Pizza>(pizza);
        // Do this so we don't duplicate add entries
        foreach(var topping in pizza.Toppings){
            _context.Entry(topping).State = EntityState.Unchanged;
        }
        _context.SaveChanges();
    }

    public void DeletePizza(int id)
    {
        Pizza pz = _context.Pizzas.Find(id);
        _context.Pizzas.Remove(pz);
        _context.SaveChanges();
    }

    public Pizza GetPizzaById(int id)
    {
        return _context.Pizzas.Find(id);
    }

    public IEnumerable<Pizza> GetPizzas()
    {
        
        return _context.Pizzas.AsEnumerable();

    }

    public void UpdatePizza(Pizza? updatedPizza)
    {
        throw new NotImplementedException();
    }
}