const navToggle=document.querySelector('.nav-toggle');

navToggle.addEventListener('click',function(){
    document.body.classList.toggle('nav-open');
})

const linksList=document.querySelectorAll('.nav__link');

linksList.forEach(function(mylink){
    mylink.addEventListener('click',function(){
        document.body.classList.remove('nav-open');
    })
})

const scrollToTop=document.querySelector('.scrolltotop');

document.onscroll=function(){
    
    if(document.documentElement.scrollTop>500){
        scrollToTop.style.display='block';
    }
    else{
        scrollToTop.style.display='none';
    }

}

scrollToTop.addEventListener('click',function(){
    document.documentElement.scrollTop=0;
})


