function validateForm(val) {

    if (val.firstName.value == "") {
        alert("Please type your FIRST NAME.");
        val.firstName.focus();
        
    return false;
    }
    
    if (val.lastName.value == "") {
        alert("Please type your LAST NAME.");
        val.lastName.focus();
        
    return false;
    }

    if (val.streetAddress.value == "") {
        alert("Please type your STREET ADDRESS.");
        val.streetAddress.focus();
        
    return false;
    }

    if (val.cityName.value == "") {
        alert("Please type your CITY NAME.");
        val.cityName.focus();
        
    return false;
    }

    if (val.state.options[val.state.selectedIndex].value == "") {
        alert("Please select your STATE.");
        val.state.focus();
            
    return false;
    }

    if (val.zipCode.value == "") {
        alert("Please type your ZIP CODE.");
        val.zipCode.focus();
        
    return false;
    }

    if (val.areaCode.value == "") {
        alert("Please type your AREA CODE.");
        val.areaCode.focus();
        
    return false;
    }

    if (val.phone.value == "") {
        alert("Please type your 7-DIGIT PHONE NUMBER. NO DASHES.");
        val.phone.focus();
        
    return false;
    }

    if (val.email.value == "") {
        alert("Please type your EMAIL");
        val.email.focus();
        
    return false;
    }

    var myemail = val.email.value;
    var formatemail = myemail.match(/\b(^(\S+@).+((\.com)|(\.net)|(\.edu)|(\.mil)|(\.gov)|(\.org)|(\..{2,2}))$)\b/gi);
    
    if (!formatemail) {
        alert(myemail + " This Email has an invalid format. Please correct.");
		val.email.focus();

	return false;
	}    
        
    if(val.confirmEmail.value=="" || val.confirmEmail.value!=val.email.value){
        alert("Email confirmation is missing, or incorrect. Please confirm.");
        val.confirmEmail.focus();
    
    return false;
    }

    var confemail = val.confirmEmail.value;
	var confformat = confemail.match(/\b(^(\S+@).+((\.com)|(\.net)|(\.edu)|(\.mil)|(\.gov)|(\.org)|(\..{2,2}))$)\b/gi);
    
    if (!confformat) {
        alert(confemail + " This Email has an invalid format. Please correct.");
		val.confirmEmail.focus();

	return false;
	}
    
    if (validateMeals(val.meals) == "") {
        alert("Please select your meal preference. Cannot be blank");
           
    return false;
    }

    if (validateContact(val.contact) == "") {
        alert("Please select your contact method. Cannot be blank.");
           
    return false;
    }
}                               /* end of validateForm function */

function validateMeals(mealsVal) {
    
    var value = mealsVal.value
          
    for (var i=0; i<mealsVal.length; i++) {
             
        if (mealsVal[i].checked) {
            value = mealsVal[i].value
            break
            }

        else {
            value = ""
            }
        
    }    
    return value;
}                               /* end of validateMeals function */

function validateContact() {

    var contactMethod = false;
    
        for (var i=0; i<4; i++) {
                 
            if(document.registrationform.contact[i].checked == true) {
            contactMethod = true;
            
            break;  
            }
   
        else {
        contactMethod = false;
        }

    }
    
    return contactMethod;
}                               /* end of validateContact function */

function resetForm() {
    document.getElementById("registrationform").reset();
  }