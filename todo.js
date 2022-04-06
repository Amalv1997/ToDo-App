 // Ajax Starting

 ajax();

 function ajax() {
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function () {
     if (this.readyState == 4 && this.status == 200) {
       var response = JSON.parse(this.responseText);
       var output = "";
       for (var i = 0; i < response.length; i++) {
         if (response[i].completed == true) {
               //Listing Jason Files
             output += `<li class="list-group-item list-group-item-danger"><span class="me-2"> ${response[i].id} </span> <input type="checkbox" checked disabled> <span class="ms-3">${response[i].title}<span></li>`;
             
         } else {
             output += `<li class="list-group-item"><span class="me-2"> ${response[i].id} </span><input class="checkbox" type="checkbox" onchange="return checkfunction()"><span class="ms-4">${response[i].title}<span></li>`;
         }
       }
       document.getElementById("posts").innerHTML = output;
     }
   };
   xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
   xhttp.send();
 }
 
           //   Promise for the validation of 5 Tasks
 
    function checkfunction() {
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         var checkbox = document.getElementsByClassName("checkbox");
         var count = 0;
         for (var i = 0; i < checkbox.length; i++) {
             if (checkbox[i].checked == true) {
                 count += 1;
             }
           }
           if (count == 5) {
            resolve(alert("Congrats 5 Tasks have been successfully completed."));
           }
           else{
             reject();
           }
 
        },200);
      })
    }
 
            //  Logout Button
     
       var logout1 = document.getElementsByClassName("log1");
       function logout(){
         alert("Are you sure want to Logout");
         window.location.href = "./index.html"
       }