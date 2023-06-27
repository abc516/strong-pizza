using System.ComponentModel.DataAnnotations.Schema;

public class Pizza {
    public string Name {get; internal set; }

    public IEnumerable<Topping> Toppings {get; internal set; }

    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id {get; internal set; }
}