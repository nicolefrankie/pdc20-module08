function validate(){
    if (document.employeeForm.employeeId.value==""){
        document.getElementById("idError").innerHTML = "Please Enter your Employee ID."
        return false;
    }

    if (document.employeeForm.firstName.value==""){
        document.getElementById("firstNameError").innerHTML = "Please Enter your First Name."
        return false;
    }

    if (document.employeeForm.lastName.value==""){
        document.getElementById("lastNameError").innerHTML = "Please Enter your Last Name."
        return false;
    }

    if (document.employeeForm.address.value==""){
        document.getElementById("addressError").innerHTML = "Please Enter your Address."
        return false;
    }

    if (document.employeeForm.email.value==""){
        document.getElementById("emailError").innerHTML = "Please Enter your E-mail address"
        return false;
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(document.employeeForm.email.value)==false){
            alert("Please enter a valid E-mail Address");
            return false;
        }
    }

    if (document.employeeForm.contact.value==""){
        document.getElementById("contactError").innerHTML = "Please Enter your Contact Number."
        return false;
    }

    if (document.employeeForm.salary.value==""){
        document.getElementById("salaryError").innerHTML = "Please Enter your Salary."
        return false;
    }

    if (document.employeeForm.username.value==""){
        document.getElementById("usernameError").innerHTML = "Please Enter your Username."
        return false;
    }
}
