var objQuestionD = new QuestionDetails();
function QuestionDetails() {

}
QuestionDetails.prototype.init = function () {
  
}


Question.prototype.GetQuestionDetails = function (Id) {
    var h = 0;
    $.ajax({
        url: "https://api.stackexchange.com/2.3/questions/" + "{" + Id + "}/answers?order=desc&sort=activity&site=stackoverflow",
        dataType: "json",
        data: {},
        type: "get",
        success: function (data, status) {
            var totalRowsCount = data.items.length;
            var htnl = "";
            if (data.items.length > 0) {
                html = "<table id='tblProduction' class='table table-striped table-bordered table-condensed dataTable no-footer table-hover' cellspacing='0' width='100%'>" +
                    "<thead>" +
                    "<tr>" +
                    "<th'>Question Title</th>" +
                    "<th>Link</th>" +
                    "<th></th>" +
                    "</tr>" +
                    "</thead>";
                for (var i = 0; i < data.items.length; ++i) {

                    html += "<tr>" +
                        "<td>" + data.items[i].title + "</td>" +
                        "<td>" + data.items[i].link + "</td>" +
                        "<td>" + "<button id='btnRoutingStopButton_" + RoutingentryRowId + "' type='button' class='btn btn-default btn-success' onclick='objQuestion.RedirectToQuestionDetails(" + data.items[i].Question - Id + ")'>" + "</td>" +
                        "</tr>";
                }
                "</table>";
            }
            $("#QuestionList").html(html);

        }
    })
}
Question.prototype.RedirectToQuestionDetails = function (Id) {

    window.open("https://localhost:44389/Question/GetQuestionDetails?QuestionId?", "_self");
    objQuestion.GetQuestionDetails(Id);
}