namespace strong_pizza.Services.Interfaces;
public interface IToppingService
{
    void AddTopping(Topping topping);
    void DeleteTopping(int id);
    Topping GetToppingById(int id);
    IEnumerable<Topping> GetToppings();
    void UpdateTopping(Topping? updatedTopping);
}