using Microsoft.AspNetCore.Mvc;
using TuProyectoBackend.Models;

namespace MiApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PedidosController : ControllerBase
    {
        [HttpPost]
        public ActionResult<string> GenerarPedido([FromBody] Pedido pedido)
        {
            if (pedido.ArticulosSeleccionados.Count == 0)
            {
                return BadRequest("Debe seleccionar al menos un artículo para generar el pedido.");
            }

            // Validaciones adicionales pueden ser implementadas aquí.

            return Ok("Pedido generado exitosamente.");
        }
    }
}
