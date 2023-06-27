using System.ComponentModel.DataAnnotations.Schema;

public class Topping 
{
    public string Name {get; internal set; }
    public string Flavor {get; internal set; }


    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int? Id { get; internal set; }
}

public enum FlavorEnum {
    Sweet,
    Salty,
    Spicy,
    Bitter
}