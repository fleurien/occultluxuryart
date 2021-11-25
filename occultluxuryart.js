window.onscroll = function() {stickybar()};

var nav = document.getElementById("nav");

var sticky = nav.offsetTop;

function stickybar(){
    if (window.pageYOffset >= sticky){
        nav.classList.add("sticky")
    }
    else{
        nav.classList.remove("sticky");
    }
}