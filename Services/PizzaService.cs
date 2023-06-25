

using strong_pizza.Services.Interfaces;

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
        return new List<Pizza>();
    }

    public void UpdatePizza(Pizza? updatedPizza)
    {
        throw new NotImplementedException();
    }
}