// Display today's day and date when planner is opened
var currentDay = moment().format("MMM Do" + ", YYYY");
$("#currentDay").append(currentDay);
var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);
