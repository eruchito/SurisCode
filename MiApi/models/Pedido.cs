// Models/Pedido.cs
using System.Collections.Generic;

namespace MiApi.Models
{
    public class Pedido
    {
        public List<string> Articulos { get; set; }  // Lista de códigos de artículos
    }
}
