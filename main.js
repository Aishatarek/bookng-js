var ready1=document.getElementById("preloader");
var loading=document.querySelector(".spinner");
window.addEventListener('DOMContentLoaded', ready);
function ready() {
    setTimeout(function(){ready1.classList.add("complete");
    loading.parentElement.removeChild(loading)}, 3000);
}
/************************** */


class TypeWriter {
    constructor(txtElement, words, wait = 500) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 7);
        this.type();
        this.isDeleting = false;
    }
    type() {
        const current = this.wordIndex % this.words.length;
        const fulltxt = this.words[current];
        if (this.isDeleting) {
            this.txt = fulltxt.substring(0, this.txt.length - 1);


        } else {
            this.txt = fulltxt.substring(0, this.txt.length + 1);
        }
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
        let typeSpeed = 300;
        if (this.isDeleting) {
            typeSpeed /= 2;
        }
        if (!this.isDeleting && this.txt === fulltxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 50;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

document.addEventListener('DOMContentLoaded', init);
function init() {
    const txtElement = document.querySelector('.txttype');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait);


}
/************************************ */
fetch('data.json').then(function(response){
    return response.json();
}).then(function (obj){
    console.log(obj);
    for(var i=0;i<obj.user.length;i++){
        document.getElementById('deom').innerHTML += 
`<div class="col-md-3 col-sm-12" ><div class="card "  style="width: 80%;">
  <img src="${obj.user[i].image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${obj.user[i].name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Show More</a>
  </div>
</div>
</div>`
    }
    
}).catch(function(error){
console.log("something went wrong");
console.error(error);
})
/****************************************************** */

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
/************************* */


