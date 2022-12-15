var objQuestion = new Question();
function Question() {

}
Question.prototype.init = function () {
    
        objQuestion.GetLastfiftyQuestions();
}


Question.prototype.GetLastfiftyQuestions = function () {
    $("#QuestionDetails").html("");
    $("#div_details").hide();
    $("#div_questions").show();
    var h = 0;
    $.ajax({
        url: "https://api.stackexchange.com/2.3/questions?pagesize=50&order=desc&sort=activity&site=stackoverflow",
        dataType: "json",
        data: {},
        type: "get",
        success: function (data, status) {
            var totalRowsCount = data.items.length;
            var html = "";
            if (data.items.length > 0) {
                    html = "<table id='tblProduction' class='table table-striped table-bordered table-condensed dataTable no-footer table-hover' cellspacing='0' width='100%'>" +
                        "<thead>" +
                        "<tr>" +
                        "<th>Question Title</th>" +
                        "<th></th>" +
                        "</tr>" +
                        "</thead>";
                for (var i = 0; i < data.items.length; ++i) {                 
                    
                        html += "<tr>" +
                            "<td>" + data.items[i].title + "</td>" +
                            "<td>" + "<button id='btnRoutingStopButton_" + i + "' type='button' class='btn btn-default btn-success' onclick='objQuestion.GetQuestionDetails(" + i + ")'>Details</button>" + "</td>" +
                            "</tr>";
                    }
                    "</table>";                    
            }
            $("#QuestionList").html(html);
             
        }
    })
}
Question.prototype.GetQuestionDetails = function (Id) {
    $("#QuestionList").html("");
    $("#div_questions").hide();
    
  
    var h = 0;
    $.ajax({
        url: "https://api.stackexchange.com/2.3/questions?pagesize=50&order=desc&sort=activity&site=stackoverflow",
        dataType: "json",
        data: {},
        type: "get",
        success: function (data, status) {
            var totalRowsCount = data.items.length;
            var html = "";
            if (data.items.length > 0) {
                $("#spn_QuestionId").html(data.items[Id].question_id);
                $("#spn_Title").html(data.items[Id].title);
                $("#spn_Link").html(data.items[Id].link);
                $("#spn_user_id").html(data.items[Id].owner.user_id);
                $("#spn_display_name").html(data.items[Id].owner.display_name);
                $("#spn_user_type").html(data.items[Id].owner.user_type);
                $("#spn_answer_count").html(data.items[Id].answer_count);
                $("#spn_view_count").html(data.items[Id].view_count);
                $("#div_details").show();
            }
           

        }
    })
}
