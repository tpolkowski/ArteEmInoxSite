using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SiteBruno.Models
{
    public class ServicosViewModel
    {
       

        public ServicosViewModel()
        {
            Servicos = new List<Servico>();
        }
   
        public List<Servico> Servicos { get; set; }
        public string Nome { get; set; }
       
    }

    public class Servico
    {

        public Servico()
        {
              Materiais = new List<Materiais>();
        }

        public Servico(string nome, string descricao, string imagem, List<Materiais> materiais, string controllerName, string actionName)
        {
            Nome = nome;
            Descricao = descricao;
            Imagem = imagem;
            Materiais = materiais;
            ControllerName = controllerName;
            ActionName = actionName;
        }


        public string Nome { get; set; }
        public string Descricao { get; set; }
        public string Imagem { get; set; }

        public List<Materiais> Materiais { get; set; }

        public string ControllerName { get; set; }
        public string ActionName { get; set; }

    }


    public class Materiais
    {
        public Materiais()
        {
                
        }
        public Materiais(string nome, string descricao, string imagem)
        {
            Nome = nome;
            Descricao = descricao;
            Imagem = imagem;
        }

        public string Nome { get; set; }
        public string Descricao { get; set; }
        public string Imagem { get; set; }

 

    }
}