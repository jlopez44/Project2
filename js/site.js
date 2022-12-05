//Team: This java file will be used for all pages

//Contact page
function checkForm() {
    var firstName = document.forms["contactForm"]["first_name"].value
    var lastName = document.forms["contactForm"]["last_name"].value
    var email= document.forms["contactForm"]["email_info"].value
    if ((!firstName) || (!lastName) || (!email)) {
        alert("Please fill out all the starred fields");
        return false;
    }
    else {
        alert("You have successfully submitted this form. Thank you!");
    }
}
