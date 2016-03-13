using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SiteBruno.Models
{
    public class CorrimaoViewModel
    {
        public CorrimaoViewModel()
        {
           Imagens = new Dictionary<string,string>();
        }
        public Dictionary<string, string> Imagens { get; set; }
    }
}