/*
		Your Name: Manuel Olmo
		Last Modified Date: 05/10/2022
		File: event_registration.js
		File Description: To register for an event, purchase tickets, provide final ticket sales,
		and display error messages should the user inputs wrong information.
*/

// Set the minimum and maximum number of tickets able to be purchased
// var minTickets = 1;
// var maxTickets = 3;

// Set variables for the ticket cost
// var costPerTicket = 5.00;
// var ticketSurcharge = 0.50;

/*** YOUR CODE STARTS BELOW HERE ***/

var startTime = new Date().getTime()+600000;  //original time 10:00 mins @600000; test/debug @40000;

var counter = setInterval(function() {
	
var currentTime = new Date().getTime();
var timeLeft = startTime - currentTime;
var mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
var secs = Math.floor((timeLeft % (1000 * 60)) / 1000);

	if (secs < 10) {      // prepends a zero "0" when seconds go lower than 10 seconds
		
		document.getElementById("timer").innerHTML = mins + ":0" + secs;
	}

	else {
		document.getElementById("timer").innerHTML = mins + ":" + secs;	
	}
	
	if (timeLeft < 0) {        // gives user opportunity to start over when time reaches 0:00
		
		clearInterval(counter);
		document.getElementById("transactionTimer").innerHTML = "<span>Timer has expired. To start again click <a href='./event_registration.html' target='_blank'>START OVER</a></span>";
		document.forms["contact"]["numTickets"].value = "";
		document.forms["contact"]["numTickets"].disabled = true;
		document.forms["contact"]["submit"].disabled = true;

	alert("Sorry, your time to complete the form has expired! Please try again if you still wish to purchase tickets.");
	}
		console.log(timeLeft);

}, 1000)

function calculateTotal() {      // amount of tickets computation
	
	let totalTickets = document.getElementById("numTickets").value;
		
	if (totalTickets>0 && totalTickets <4 && !isNaN(totalTickets)) { // validates min & max tickets (1-3)
			
		document.getElementById("contactInformation").style.display = "block";
		document.getElementById("numTickets").style.backgroundColor = "";
		document.getElementById("msgTickets").innerHTML = "";
		sales(totalTickets);
	}
	
	else {
		
		document.getElementById("contactInformation").style.display = "none";
		document.getElementById("msgTickets").innerHTML = "You can only buy between 1 and 3 tickets.";
		document.getElementById("numTickets").style.backgroundColor = "yellow";
		document.getElementById("totalCost").value = "$0.00";
	}

}

function sales(totalTickets) {   // calculates final sales to include surcharge
	
	let costPerTicket = 5;
	let ticketSurcharge = 0.50;

	cost = (totalTickets * costPerTicket) + (totalTickets * ticketSurcharge);
	finalSale = cost.toFixed(2);
	document.getElementById("totalCost").value = "$"+ finalSale;   // displays final sales
}

function completePurchase() {
	
	let customerName = document.forms["contact"]["name"].value;  // obtains initial name
	let customerEmail = document.forms["contact"]["email"].value;  // obtains initial email
	
	if (customerName=="") {   
		
		document.getElementById("msgname").innerHTML = "Please enter your name";
		document.getElementById("name").style.backgroundColor = "";
		
	return false;
	}
	
	else {
		
		document.getElementById("msgname").innerHTML = "";
		document.getElementById("name").style.backgroundColor = "";
	}
	
	let confirmEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	if (!(confirmEmail.test(customerEmail))) {  // validates correct email format and provides message
		
		document.getElementById("msgemail").innerHTML = "Please enter a valid email address";
		document.getElementById("email").style.backgroundColor = "yellow";
	
	return false;
	}
	
	else {
		
		document.getElementById("msgemail").innerHTML = "";
		document.getElementById("email").style.backgroundColor = "";
	}
	
	alert("Thank you for your purchase. Your total cost is: " +  // issues final sales message
	document.getElementById("totalCost").value + ". Please allow 24 hours for electronic delivery.");
	
clearInterval(counter);

}
