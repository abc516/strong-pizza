

using strong_pizza.Services.Interfaces;

// todo properly implement
public class PizzaService : IPizzaService
{
    public void AddPizza(Pizza pizza)
    {
        throw new NotImplementedException();
    }

    public void DeletePizza(int id)
    {
        throw new NotImplementedException();
    }

    public Pizza GetPizzaById(int id)
    {
        throw new NotImplementedException();
    }

    public IEnumerable<Pizza> GetPizzas()
    {
        
        Pizza pz = new Pizza();
        pz.Name = "test";
        Topping t1 = new Topping();
        t1.Name = "test topping";
        // = FlavorEnum.Salty;
        pz.Toppings = new List<Topping>{t1};
        IList<Pizza> pList = new List<Pizza>();
        pList.Add(pz);
        return pList;
    }

    public void UpdatePizza(Pizza? updatedPizza)
    {
        throw new NotImplementedException();
    }
}