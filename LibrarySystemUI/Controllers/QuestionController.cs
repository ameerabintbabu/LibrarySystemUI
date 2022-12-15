using LibrarySystemUI.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Mvc;

namespace LibrarySystemUI.Controllers
{
    public class QuestionController : Controller
    {
        // GET: Question
        public ActionResult GetLastFiftyQuestions()
        {
            return View();
        }
        
    }
}