using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using TuProyectoBackend.Data;
using TuProyectoBackend.Models;

namespace TuProyectoBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticulosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ArticulosController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Articulo>> GetArticulos()
        {
            var articulos = _context.Articulos.Where(a => a.Deposito == 1 && a.Precio > 0).ToList();
            return Ok(articulos);
        }
    }
}
