  //  Logout 

  function logOut(){
    window.location.href = "./index.html"
  }
 
 
 // Ajax 

 ajax();

 function ajax() {
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function () {
     if (this.readyState == 4 && this.status == 200) {
       var response = JSON.parse(this.responseText);
       var output = "";
       for (var i = 0; i < response.length; i++) {
         if (response[i].completed == true) {
             output += `<li class="list-group-item"><input type="checkbox" checked disabled> <span class="text-decoration-line-through text-danger ms-5">${response[i].title}<span></li>`;
             
         } else {
             output += `<li class="list-group-item"><input class="checkbox" type="checkbox" onchange="return taskCapture()"><span class=" ms-5">${response[i].title}<span></li>`;
         }
       }
       document.getElementById("list").innerHTML = output;
     }
   };
   xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
   xhttp.send();
 }
 
           //   Promise
 
    function taskCapture() {
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         var check = document.getElementsByClassName("checkbox");
         var counter = 0;
         for (var i = 0; i < check.length; i++) {
             if (check[i].checked == true) {
                 counter += 1;
             }
           }
           if (counter == 5) {
            resolve(alert("Congratulations 5 Tasks have been successfully completed."));
           }
           else{
             reject(console.log("5 Tasks needed"));
           }
 
        },50);
      })
    }
 
           