var objBook = new Book()
function Book() {
   
}
Book.prototype.init = function () {
    objBook.FillParentCategory();
    $(document.body).on('change', '#filterParentCategory', function (e) {
        var CategoryId = $("#filterParentCategory").val();
        objBook.FillSubCategory(CategoryId);
    });

    $(document.body).on('change', '#filterSubCategory', function (e) {
        var ParentCategoryId = $("#filterParentCategory").val();
        var SubCategoryId = $("#filterSubCategory").val();
        objBook.GetAllBooks(ParentCategoryId,SubCategoryId);
    });
}
Book.prototype.FillParentCategory = function () {

    $.ajax({
        type: "Get",
        url: "https://localhost:44374/api/" + "Category/GetAllParentCategory",
        async: false,
        data: {},
        success: function (data) {
            var htmloption = "";
          
            var CategoryList = data.length;
            if (data.length > 0) {
                htmloption = "<option value='0'>Select Category</option>";
                $.each(data, function (key, value) {
                  
                        htmloption += "<option value=" + value.CategoryId + ">" + value.CategoryName + "</option>";
                   
                });
            }


            $("#filterParentCategory").html(htmloption);
        }
         
    });
}

Book.prototype.FillSubCategory = function (ParentCategoryId) {
    var h = 0;
    $.ajax({
        type: "Get",
        url: "https://localhost:44374/api/" + "Category/GetSubCategory",
        async: false,
        data: { "CategoryId":  parseInt(ParentCategoryId)},
        success: function (data) {
            var htmloption = "";
          
            var CategoryList = data.length;
            if (data.length > 0) {
                htmloption = "<option value='0'>Select SubCategory</option>";
                $.each(data, function (key, value) {

                    htmloption += "<option value=" + value.CategoryId + ">" + value.CategoryName + "</option>";

                });
            }
            $("#filterSubCategory").html(htmloption);
        }

    });
}

Book.prototype.GetAllBooks = function (ParentCategoryId,SubCategoryId) {
  
    $.ajax({
        type: "Get",
        url: "https://localhost:44389/" + "Book/BookCollection",
        async: false,
        data: { "ParentCategoryId": ParentCategoryId, "SubCategoryId": SubCategoryId},
        success: function (data) {
           
        }

    });
}
Book.prototype.RedirectToQuestion = function () {
   
    window.open("https://localhost:44389/Question/GetLastFiftyQuestions", "_self");
}