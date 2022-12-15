using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using LibrarySystemUI.Models;
using System.Net.Http;
using Newtonsoft.Json;

namespace LibrarySystemUI.Controllers
{
    public class BookController : Controller
    {
        [HttpGet]
        public ActionResult BookCollection(int? ParentCategoryId, int? SubCategoryId)
        {
            if (ParentCategoryId == null) ParentCategoryId =0;
            if (SubCategoryId == null) SubCategoryId = 0;
            List<Book> objBook = null;
            HttpClient hc = new HttpClient();
            hc.BaseAddress = new Uri("https://localhost:44374/api/Book");
            //ar consumeapi = hc.GetAsync("Book?ParentCategoryId=1&SubCategoryId=4");
            var consumeapi = hc.GetAsync("Book?ParentCategoryId=" + ParentCategoryId.ToString() + "&SubCategoryId=" + SubCategoryId.ToString());
            consumeapi.Wait();           
            var data = consumeapi.Result;
            if (data.IsSuccessStatusCode)
            {
                var displaydata = data.Content.ReadAsAsync<List<Book>>();
                displaydata.Wait();
                objBook = displaydata.Result;
            }
           
            ModelState.Clear();
           
            return View(objBook);
        }
    }
}