using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using strong_pizza.Services.Interfaces;

[Route("api/[controller]")]
[ApiController]
public class ToppingController : ControllerBase
{
    private readonly IToppingService _toppingsService;

    public ToppingController(IToppingService toppingsService)
    {
        _toppingsService = toppingsService;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Topping>> Get()
    {
        var toppings = _toppingsService.GetToppings();
        return Ok(toppings);
    }

    [HttpGet("{id}")]
    public ActionResult<Topping> GetById(int id)
    {
        Topping topping = _toppingsService.GetToppingById(id);

        if (topping == null)
        {
            return NotFound();
        }

        return Ok(topping);
    }

    [HttpPost]
    public ActionResult<Topping> Create([FromBody] Topping topping)
    {
        if (topping == null)
        {
            return BadRequest();
        }

        _toppingsService.AddTopping(topping);
        return CreatedAtAction(nameof(GetById), new { id = topping.Id }, topping);
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, [FromBody] Topping updatedTopping)
    {
        if (updatedTopping == null || updatedTopping.Id != id)
        {
            return BadRequest();
        }

        var existingTopping = _toppingsService.GetToppingById(id);

        if (existingTopping == null)
        {
            return NotFound();
        }

        _toppingsService.UpdateTopping(updatedTopping);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var existingTopping = _toppingsService.GetToppingById(id);

        if (existingTopping == null)
        {
            return NotFound();
        }

        _toppingsService.DeleteTopping(id);
        return NoContent();
    }
}
