

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
         // Do this so we don't duplicate add entries
       try
       {
         List<Topping> tops = new List<Topping>();
         pizza.Toppings.ToList().ForEach(tp => {
             tops.Add(_context.Toppings.FirstOrDefault(top => top.Id == tp.Id));
         });
         Pizza pz = new Pizza();
         pz.Name = pizza.Name;
         pz.Toppings = tops;
         _context.Add(pz);
         _context.SaveChanges();
       }
       catch (System.Exception ex)
       {
        
        throw new Exception($"{ex.Message}");
       }
    }

    public void DeletePizza(int id)
    {
        try
    {
            Pizza pz = _context.Pizzas.Find(id);
            _context.Pizzas.Remove(pz);
            _context.SaveChanges();
    }
    catch (System.Exception ex)
    {
        throw new Exception($"{ex.Message}");
    }
    }

    public Pizza GetPizzaById(int id)
    {
        try
    {
            return _context.Pizzas.Find(id);
    }
    catch (System.Exception ex)
    {
         throw new Exception($"{ex.Message}");
    }
    }

    public IEnumerable<Pizza> GetPizzas()
    {
        return _context.Pizzas.Include(pz => pz.Toppings).AsEnumerable();

    }

    public void UpdatePizza(Pizza? updatedPizza)
    {
        try
    {
            _context.Pizzas.Update(updatedPizza);
            _context.SaveChanges();
    }
    catch (System.Exception ex)
    {
        throw new Exception($"{ex.Message}");
    }
    }
}