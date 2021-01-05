// Display today's day and date when planner is opened
var currentDay = moment().format("MMM Do" + ", YYYY");
$("#currentDay").append(currentDay);
var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

//JQuery document ready function
$(document).ready(function () {
  // Save button function
  $(".saveBtn").on("click", function () {
    // On click, get values of the description and time
    var description = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // Save description in local storage for that specific time
    localStorage.setItem(time, description);
  });
});