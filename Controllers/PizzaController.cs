using Microsoft.AspNetCore.Mvc;
using strong_pizza.Services.Interfaces;

namespace strong_pizza.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PizzaController : ControllerBase
{
       private readonly IPizzaService _pizzaService;

    public PizzaController(IPizzaService pizzaService)
    {
        _pizzaService = pizzaService;
    }

    [HttpGet]
    public IEnumerable<Pizza> Get()
    {
        var pizzas = _pizzaService.GetPizzas();
        return (pizzas);
    }

    [HttpGet("{id}")]
    public ActionResult<Pizza> GetById(int id)
    {
        var pizza = _pizzaService.GetPizzaById(id);

        if (pizza == null)
        {
            return NotFound();
        }

        return Ok(pizza);
    }

    [HttpPost]
    public ActionResult<Pizza> Create([FromBody] Pizza pizza)
    {
        if (pizza == null)
        {
            return BadRequest();
        }

        _pizzaService.AddPizza(pizza);
        return CreatedAtAction(nameof(GetById), new { id = pizza.Id }, pizza);
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, [FromBody] Pizza updatedPizza)
    {
        if (updatedPizza == null || updatedPizza.Id != id)
        {
            return BadRequest();
        }

        Pizza existingPizza = _pizzaService.GetPizzaById(id);

        if (existingPizza == null)
        {
            return NotFound();
        }

        _pizzaService.UpdatePizza(updatedPizza);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var existingPizza = _pizzaService.GetPizzaById(id);

        if (existingPizza == null)
        {
            return NotFound();
        }

        _pizzaService.DeletePizza(id);
        return NoContent();
    }
}
