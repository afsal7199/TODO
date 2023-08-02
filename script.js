function checkFunction(callback){
   event.preventDefault();
     var email = document.getElementById("username");
      var pass = document.getElementById("password"); 
      let err = document.getElementById("err");

        if(pass.value==='12345' && email.value==="admin"){
             callback();
             }
             else
             { 
                err.innerText="INVALID PASS OR USERNAME"; 
            } 
        }
         function validate(){
             window.location = "loginLogout.html";
        } 