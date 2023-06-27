using System.ComponentModel.DataAnnotations.Schema;

public class Pizza {
    public string Name {get; set; }

    public IEnumerable<Topping> Toppings {get; set; }

    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id {get; set; }
}