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
  //Function to track the current time and display color blocks on page accordingly
  function trackTime() {
    //Get current hour
    var currentHour = moment().hour();
    //Then loop over time blocks to determine what class each block belongs to
    //based on the current hour
    $(".time-block").each(function () {
      //For each time block, split ID at hour, parse string to change hour# to integer
      //for comparison with the current hour
      var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
      //If timeblock is less than current hour, PAST
      if (timeBlock > currentHour) {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
      }
      //If timeblock is equal to current hour, PRESENT
      else if (timeBlock === currentHour) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
      }
      //If timeblock is greater than current hour, FUTURE
      else {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      }
    });
  }
  // Get descriptions from local storage if they exist for hours 0 to 23
  $("#hour0 .description").val(localStorage.getItem("hour0"));
  $("#hour1 .description").val(localStorage.getItem("hour1"));
  $("#hour2 .description").val(localStorage.getItem("hour2"));
  $("#hour3 .description").val(localStorage.getItem("hour3"));
  $("#hour4 .description").val(localStorage.getItem("hour4"));
  $("#hour5 .description").val(localStorage.getItem("hour5"));
  $("#hour6 .description").val(localStorage.getItem("hour6"));
  $("#hour7 .description").val(localStorage.getItem("hour7"));
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));
  $("#hour18 .description").val(localStorage.getItem("hour18"));
  $("#hour19 .description").val(localStorage.getItem("hour19"));
  $("#hour20 .description").val(localStorage.getItem("hour20"));
  $("#hour21 .description").val(localStorage.getItem("hour21"));
  $("#hour22 .description").val(localStorage.getItem("hour22"));
  $("#hour23 .description").val(localStorage.getItem("hour23"));
  // Call track time function to display color blocks
  trackTime();
});
