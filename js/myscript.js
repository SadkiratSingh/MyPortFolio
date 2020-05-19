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


const allSections=document.querySelectorAll('.section-wrapper');

const projectLinks=document.querySelectorAll('.full-desc-link');

const projects=document.querySelectorAll('.description-wrapper')

const projectSection=document.querySelector('.project-desc')

for(var i=0;i<projectLinks.length;i++){
    projectLinks[i].addEventListener('click',noSectionDisplay);
}

function noSectionDisplay(e){

    for(var i=0;i<allSections.length;i++){
        allSections[i].style.display='none';
    }
    var classes=e.target.classList;
    var p=classes[2];
    projectSection.style.display='block'

    for(var i=0;i<projects.length;i++){
        if(projects[i].id!=p){
            projects[i].style.display='none';
        }
        else{
            projects[i].style.display='block';
        }
    }
    document.documentElement.scrollTop=0;
}

const exitCross=document.querySelector('.img-desc-exit');
const exitButton=document.querySelector('.desc-exit');
exitCross.addEventListener('click',SectionDisplay);
exitButton.addEventListener('click',SectionDisplay);

function SectionDisplay(e){
    
    projectSection.style.display='none'
    document.documentElement.scrollTop=0;
    for(var i=0;i<allSections.length;i++){
        allSections[i].style.display='block';
    }
    for(var i=0;i<projects.length;i++){
        projects[i].style.display='none';
    }
}
