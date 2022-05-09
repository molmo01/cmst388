/*
		Your Name: <Enter Your Name>
		Last Modified Date: <Enter The Date in mm/dd/yyyy format>
		File: event_registration.js
		File Description: <Enter a brief paragraph to describe the purpose of this file>
*/

// Set the minimum and maximum number of tickets able to be purchased
var minTickets = 1;
var maxTickets = 3;
// Set variables for the ticket cost
var costPerTicket = 5.00;
var ticketSurcharge = 0.50;

/*** YOUR CODE STARTS BELOW HERE ***/


  
// Reference Citation: 	Florin Pop(2020, Jan 21). Simple Countdown Timer with JavaScript - Day 21. 
//						URL: source: https://www.youtube.com/watch?v=x7WJEmxNlEs

// **NOTE: Edited to account for negative time when counter reaches zero mins, zero secs.

const startingMinutes = 1;
let time = startingMinutes * 60;
let refreshIntervalId = setInterval(updateCountdown, 1000);

function updateCountdown() {

	const mins = Math.floor(time / 60);

	let secs = time % 60;

	secs = secs < 10 ? '0' + secs : secs;

	const clock = document.getElementById("timer");

	clock.innerHTML = `${mins}:${secs}`;

	time--;

	if (time < 0) { //stops the setInterval when time = 0 to avoid negative time
		clearInterval(refreshIntervalId);
			window.location.replace(src="event_registration.html");
	   // when time = 0:00, replaces into a new page, but same URL. Prevents the use of "backbutton".
	  }
   
		if (time == 0) {
			alert("Your 10 minutes have expired. You will be redirected to the start point on this same page. Please try again.");
		}
   
   }
   