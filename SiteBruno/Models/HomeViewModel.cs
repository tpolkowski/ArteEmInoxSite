using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SiteBruno.Models
{
    public class HomeViewModel
    {
        public HomeViewModel()
        {
           Imagens = new List<string>();
        }
        public List<string> Imagens { get; set; }
    }
}