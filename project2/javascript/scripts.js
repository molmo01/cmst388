function validateForm(){    
 
    var firstname=document.getElementById("firstname");
    var lastname=document.getElementById("lastname");
    var streetaddress=document.getElementById("streetaddress");
    var city=document.getElementById("city");
    var state=document.getElementById("state");
    var zipcode=document.getElementById("zipcode");   
    var email=document.getElementById("email");
    var confirmemail=document.getElementById("confirmemail");
    var contact=document.getElementById("contact");
    var areacode=getElementById("areacode");
    var phone=getElementById("phone");
    var comments=getElementById("comments");

        if(firstname.value=="" || firstname == null){
            alert("First Name cannot be blank.");
            document.registrationform.firstname.focus();
            return false;
        }        

        if(lastname.value=="" || lastname == null){
            alert("Last Name cannot be blank.");
            document.registrationform.lastname.focus();
            return false;
        }

        if(streetaddress.value=="" || streetaddress == null){
            alert("Please enter your Street Address.");
            document.registrationform.streetaddress.focus();
            return false;
        }

        if(city.value=="" || city == null){
            alert("Please enter your City name.");
            document.registrationform.city.focus();
            return false;
        }

        if(state.selectedIndex==0 || state == null){
            alert("Please select your State.");
            document.registrationform.state.focus();
            return false;
        }

        if(zipcode.value=="" || zipcode == null){
            alert("Please enter your 5-Digit Zip Code.");
            document.registrationform.zipcode.focus();
            return false;
        }

        if(email.value=="" || email == null){
            alert("Please type your Email.");
            document.registrationform.email.focus();
            return false;
        }

        if(confirmemail.value=="" || confirmemail.value!=email.value){
            alert("Email confirmation is missing or incorrect. Please confirm.");
            document.registrationform.confirmemail.focus();
            return false;
        }

        if(contact.value=="" || contact == null){
            alert("Please select TWO contact options.");
            document.registrationform.contact.focus();
            return false;
        }
        
        if(areacode.value=="" || areacode == null){
            alert("Please enter your Area Code.");
            document.registrationform.areacode.focus();
            return false;
        }    
        
        if(phone.value=="" || phone == null){
            alert("Please enter your 7-Digit Phone Number.");
            document.registrationform.phone.focus();
            return false;
        }            
        
        if(comments.value=="" || comments == null){
            alert("Please enter a comment, or type N/A.");
            document.registrationform.comments.focus();
            return false;
        }
     
     else 
        return true;
    
}


function resetForm() {
    document.getElementById("registrationform").reset();
  }