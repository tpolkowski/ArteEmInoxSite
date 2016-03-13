using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SiteBruno.Models;

namespace SiteBruno.Controllers
{
    public class ServicosController : Controller
    {
        //
        // GET: /Corrimao/

        public ActionResult Index()
        {
            var viewModel = new ServicosViewModel();
            var acoInox = new Materiais("Aço Inox", "descriçao do aço inox", "");
            var acoCarbono = new Materiais("Aço Carbono", "descriçao do aço carbono", "");
            var aluminio = new Materiais("Aluminio", "descriçao do aluminio", "");
            var vidro = new Materiais("Vidro", "descriçao do vidro", "");

            viewModel.Servicos.Add(new Servico("Corrimao", "Descricao do corrimao", "2.jpg", new List<Materiais> { acoInox, acoCarbono, aluminio }, "servicos", "corrimao"));
            viewModel.Servicos.Add(new Servico("Guarda-corpo / Mezanino", "Descricao do Guarda-corpo / Mezanino", "3.jpg", new List<Materiais> { acoInox, acoCarbono, aluminio, vidro }, "servicos", "GuardaCorpo_Mezanino"));
            viewModel.Servicos.Add(new Servico("Pergolado", "Descricao do Guarda-corpo / Mezanino", "4.jpg", new List<Materiais> { acoInox, acoCarbono, aluminio }, "servicos", "Pergolado"));

            return View(viewModel);
        }

        public ActionResult Corrimao()
        {
            var viewModel = new ServicosViewModel();
            return View(viewModel);
        }

        public ActionResult GuardaCorpo_Mezanino()
        {
            var viewModel = new ServicosViewModel();
            return View(viewModel);
        }

        public ActionResult Pergolado()
        {
            var viewModel = new ServicosViewModel();
            return View(viewModel);
        }

    }
}
