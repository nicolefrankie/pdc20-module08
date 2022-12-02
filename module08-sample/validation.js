function validate(){
    if (document.myForm.fullname.value==""){
        document.getElementById("nameErr").innerHTML = "Please Enter Full Name"
        return false;
    }

    if (document.myForm.email.value==""){
        document.getElementById("emailErr").innerHTML = "Please Enter your E-mail address"
        return false;
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(document.myForm.email.value)==false){
            alert("Please enter a valid E-mail Address");
            return false;
        }
    }
}
