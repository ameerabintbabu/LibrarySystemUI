using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace LibrarySystemUI.Models
{
    public class Book
    {
        [Key]
        public int BookId { get; set; }
        public string BookName { get; set; }
        public string Category { get; set; }
        public string SubCategory { get; set; }
        public string Publication { get; set; }
        public int NoOfCopies { get; set; }
        public string Description { get; set; }
    }
}