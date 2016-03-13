using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SiteBruno.Models;

namespace SiteBruno.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var viewModel = new HomeViewModel();
            viewModel.Imagens.Add("2.jpg");
            viewModel.Imagens.Add("3.jpg");
            viewModel.Imagens.Add("4.jpg");
            return View(viewModel);
        }
    }
}
