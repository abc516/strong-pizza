using Microsoft.AspNetCore.Mvc;
using strong_pizza.Services.Interfaces;

namespace strong_pizza.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PizzaController : ControllerBase
{
       private readonly IPizzaService _pizzaRepository;

    public PizzaController(IPizzaService pizzaRepository)
    {
        _pizzaRepository = pizzaRepository;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Pizza>> Get()
    {
        var pizzas = _pizzaRepository.GetPizzas();
        return Ok(pizzas);
    }

    [HttpGet("{id}")]
    public ActionResult<Pizza> GetById(int id)
    {
        var pizza = _pizzaRepository.GetPizzaById(id);

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

        _pizzaRepository.AddPizza(pizza);
        return CreatedAtAction(nameof(GetById), new { id = pizza.Id }, pizza);
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, [FromBody] Pizza updatedPizza)
    {
        if (updatedPizza == null || updatedPizza.Id != id)
        {
            return BadRequest();
        }

        Pizza existingPizza = _pizzaRepository.GetPizzaById(id);

        if (existingPizza == null)
        {
            return NotFound();
        }

        _pizzaRepository.UpdatePizza(updatedPizza);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var existingPizza = _pizzaRepository.GetPizzaById(id);

        if (existingPizza == null)
        {
            return NotFound();
        }

        _pizzaRepository.DeletePizza(id);
        return NoContent();
    }
}
