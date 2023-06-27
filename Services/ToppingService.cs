using strong_pizza.Services.Interfaces;

public class ToppingService : IToppingService
{

    private StrongPizzaContext _context;
    public ToppingService(StrongPizzaContext context){
        _context = context;
    }
    public void AddTopping(Topping topping)
    {
        _context.Add<Topping>(topping);
        _context.SaveChanges();
    }

    public void DeleteTopping(int id)
    {
        Topping tp = _context.Toppings.Find(id);
        _context.Toppings.Remove(tp);
    }

    public Topping GetToppingById(int id)
    {
       return _context.Toppings.Find(id);
    }

    public IEnumerable<Topping> GetToppings()
    {
        return _context.Toppings.AsEnumerable();
    }

    public void UpdateTopping(Topping? updatedTopping)
    {
        throw new NotImplementedException();
    }
}