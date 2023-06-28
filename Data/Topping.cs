using System.ComponentModel.DataAnnotations.Schema;

public class Topping 
{
    public string Name {get; set; }
    public string Flavor {get; set; }

    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int? Id { get; set; }
}

public enum FlavorEnum {
    Sweet,
    Salty,
    Spicy,
    Bitter
}