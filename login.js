var username = document.getElementById("username");
var password = document.getElementById("password");

function validate(callback){


    if(username.value==""){
        alert("Username cannot be empty");
    }

    else if(password.value==""){
        alert("Password cannot be empty");
    }

    else if(username.value!="admin"){
        alert("Invalid Username");
    }

    else if(password.value!="12345"){
        alert("Invalid Password");
    }

    else{
        callback();
    }
     
}



function login(){
    window.location.href = "./home.html"
}