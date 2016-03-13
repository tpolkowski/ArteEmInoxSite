using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SiteBruno.Models;

namespace SiteBruno.Controllers
{
    public class FotosController : Controller
    {
        //
        // GET: /Fotos/
        public ActionResult Index()
        {
            var viewModel = new CorrimaoViewModel();
            viewModel.Imagens.Add("papagaio", "2.jpg");
            viewModel.Imagens.Add("floresta", "3.jpg");
            viewModel.Imagens.Add("praia", "4.jpg");
            viewModel.Imagens.Add("papagaio navamente", "2.jpg");
            viewModel.Imagens.Add("floresta novamente", "3.jpg");
            viewModel.Imagens.Add("praia novamente", "4.jpg");
            return View(viewModel);
        }

    }
}
