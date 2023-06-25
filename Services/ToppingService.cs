using strong_pizza.Services.Interfaces;

public class ToppingService : IToppingService
{
    public void AddTopping(Topping topping)
    {
        throw new NotImplementedException();
    }

    public void DeleteTopping(int id)
    {
        throw new NotImplementedException();
    }

    public Topping GetToppingById(int id)
    {
        throw new NotImplementedException();
    }

    public IEnumerable<Topping> GetToppings()
    {
        // throw new NotImplementedException();
        return new List<Topping>();
    }

    public void UpdateTopping(Topping? updatedTopping)
    {
        throw new NotImplementedException();
    }
}