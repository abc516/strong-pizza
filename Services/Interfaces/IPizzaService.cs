namespace strong_pizza.Services.Interfaces;

public interface IPizzaService
{
    void AddPizza(Pizza pizza);
    void DeletePizza(int id);
    Pizza GetPizzaById(int id);
    IEnumerable<Pizza> GetPizzas();
    void UpdatePizza(Pizza? updatedPizza);
}