using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LibrarySystemUI.Models
{
    public class QuestionInfo
    {
        [JsonProperty("is_accepted")]
        public bool IsAccepted { get; set; }

        public int Score { get; set; }

        [JsonProperty("answer_id")]
        public int AnswerId { get; set; }

        [JsonProperty("question_id")]
        public int QuestionId { get; set; }
        [JsonProperty("title")]
        public string title { get; set; }
    }
}