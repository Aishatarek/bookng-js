var ready1=document.getElementById("preloader");
var loading=document.querySelector(".spinner");
window.addEventListener('DOMContentLoaded', ready);
function ready() {
    setTimeout(function(){ready1.classList.add("complete");
    loading.parentElement.removeChild(loading)}, 3000);
}

function myfuncion(){
    var mymessage=document.getElementById("message").value;
    var email=document.getElementById("email").value;
    var myerror=document.getElementById("error");
    var name1=document.getElementById("name").value;
    if (name1==""){
        myerror.innerHTML="Enter  your Name ";
    }
    
    else if (name1.length<5){
      myerror.innerHTML="Enter Name more than 5 character"; 

      }else if(email==""){
        myerror.innerHTML="Enter your Email";
      }
     





    
    
    else if(email.indexOf("@")== -1){
        myerror.innerHTML="Enter valid Email";
       

    }else if(mymessage==""){
        myerror.innerHTML="Enter your Message";
    }else if(mymessage.length<15){
        myerror.innerHTML="Enter Message more than 15 character";
    }else{
        alert("Message had been sent Successfully")
    }
    return false;
}