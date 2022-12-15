using LibrarySystemUI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Mvc;

namespace LibrarySystemUI.Controllers
{
    public class CategoryController : Controller
    {
        // GET: Category
        //public ActionResult Category(FormCollection collection)
        //{
           
        //    List<Category> objCategory = null;
        //    HttpClient hc = new HttpClient();
        //    hc.BaseAddress = new Uri("https://localhost:44374/api/Category/");

        //    var consumeapi = hc.GetAsync("Category");
        //    consumeapi.Wait();
        //    var data = consumeapi.Result;
        //    if (data.IsSuccessStatusCode)
        //    {
        //        var displaydata = data.Content.ReadAsAsync<List<Category>>();
        //        displaydata.Wait();
        //        objCategory = displaydata.Result;

        //    }
        //    ViewData["ListItems"] = objCategory;
        //}
    }
}