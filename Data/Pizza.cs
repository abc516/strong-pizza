using System.ComponentModel.DataAnnotations.Schema;

public class Pizza {
    public string Name {get; set; }

    public ICollection<Topping> Toppings {get; set; } = new List<Topping>();

    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id {get; set; }
}