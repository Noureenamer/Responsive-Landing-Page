// script.js
window.onscroll = function(){
    if(window.scrollY > 20){
        document.getElementById('nav').classList.add('navscroll');
       
    }else{
        document.getElementById('nav').classList.remove('navscroll');
        
    }
};
