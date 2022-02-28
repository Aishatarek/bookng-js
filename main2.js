var ready1=document.getElementById("preloader");
var loading=document.querySelector(".spinner");
window.addEventListener('DOMContentLoaded', ready);
function ready() {
    setTimeout(function(){ready1.classList.add("complete");
    loading.parentElement.removeChild(loading)}, 3000);
}