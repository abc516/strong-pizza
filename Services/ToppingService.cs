using strong_pizza.Services.Interfaces;

public class ToppingService : IToppingService
{

    private StrongPizzaContext _context;
    public ToppingService(StrongPizzaContext context){
        _context = context;
    }
    public void AddTopping(Topping topping)
    {
    try
    {
            _context.Add<Topping>(topping);
            _context.SaveChanges();
    }
    catch (System.Exception ex)
    {
       throw new Exception($"{ex.Message}");
    }
    }

    public void DeleteTopping(int id)
    {
        try
        {
            Topping tp = _context.Toppings.Find(id);
            _context.Toppings.Remove(tp);
            _context.SaveChanges();
        }
        catch (System.Exception ex)
        {
           throw new Exception($"{ex.Message}");
        }
    }

    public Topping GetToppingById(int id)
    {
       try
       {
        return _context.Toppings.Find(id);
       }
       catch (System.Exception ex)
       {
        throw new Exception($"{ex.Message}");
       }
    }

    public IEnumerable<Topping> GetToppings()
    {
       try
       {
         return _context.Toppings.AsEnumerable();
       }
       catch (System.Exception ex)
       {
        
        throw new Exception($"{ex.Message}");
       }
    }

    public void UpdateTopping(Topping? updatedTopping)
    {
       try
       {
         _context.Toppings.Update(updatedTopping);
         _context.SaveChanges();
       }
       catch (System.Exception ex)
       {
        
       throw new Exception($"{ex.Message}");
       }
    }
}