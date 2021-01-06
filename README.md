# 05 Third-Party APIs: Work Day Scheduler

Link to Deployed Application: https://carlypeyton.github.io/Day-Planner/
Link to Github Repository: https://github.com/carlypeyton/Day-Planner

## User Story

-AS AN employee with a busy schedule
-I WANT to add important events to a daily planner
-SO THAT I can manage my time effectively

## Acceptance Criteria
-GIVEN I am using a daily planner to create a schedule
-WHEN I open the planner
-THEN the current day is displayed at the top of the calendar
-WHEN I scroll down
-THEN I am presented with time blocks for standard business hours
-WHEN I view the time blocks for that day
-THEN each time block is color-coded to indicate whether it is in the past, present, or future
-WHEN I click into a time block
-THEN I can enter an event
-WHEN I click the save button for that time block
-THEN the text for that event is saved in local storage
-WHEN I refresh the page
-THEN the saved events persist

Screenshot 1:
<img src = "Screen Shot 2021-01-06 at 1.01.19 PM.png">
Screenshot 2:
<img src = "Screen Shot 2021-01-06 at 1.01.53 PM.png">
Screenshot 3:
<img src = "Screen Shot 2021-01-06 at 1.02.16 PM.png">

I began this assignment by creating Timeblocks spanning from 12am to 12 pm, so that my work day planner would be usable by those who do not work traditional 9 to 5 jobs. I utilized the Bootstrap grid to create containers, rows, and columns for each timeblock, and used Font Awesome to find an icon to include on each timeblock. I also added links for my stylesheet, script, Bootstrap and JQuery, Google Fonts and moment(), before moving onto the Javascript file.

For the JavaScript file, I started by creating variables for the current date and time, and used moment() to set the value of the variables for the month, day, year, as well as the current time (wherever the user is located). Using JQuery, I appended these values to the current day and time IDs in the HTML doc. 

Next, I created a JQuery document ready function, which includes a click event function for the save button. When the user clicks the save button (check mark) on the webpage, the description is saved specific to a particular time block in local storage. 

The track time funciton gets the current hour, and parses the time block ID to get only the number from the timeblock ID, which is then compared to the number value of the current hour. If the value of the timeblock is greater than the current hour, than that timeblock is in the future, and is colored blue on the day planner. If the value of the timeblock is equal to the value of the current hour, that timeblock is in the present, and is colored red on the planner. Timeblocks in the past are colored grey. 

Within this same document ready function, I used JQery to get descriptions for each timeblock from local storage(if they exist), and to display their values. I then called on the track time function to run it. 

Lastly, I ran both my HTML and JS through validators to check for any errors. 
