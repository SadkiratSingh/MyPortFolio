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

const projectLinks=document.querySelectorAll('.about-project');

const projects=document.querySelectorAll('.description-wrapper')

const projectSection=document.querySelector('.project-desc')

for(var i=0;i<projectLinks.length;i++){
    projectLinks[i].addEventListener('click',noSectionDisplay);
}

function noSectionDisplay(e){
    
    for(var i=0;i<allSections.length;i++){
        allSections[i].style.display='none';
    }
    document.documentElement.scrollTop=0;//its placement is very important//
    var classes=e.target.classList;
    var p=classes[1];
    projectSection.style.display='block'

    for(var i=0;i<projects.length;i++){
        if(projects[i].id!=p){
            projects[i].style.display='none';
        }
        else{
            projects[i].style.display='block';
        }
    }
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

const eduheadings=document.querySelectorAll('.edu-heading');
for(var i=0;i<eduheadings.length;i++){
    eduheadings[i].addEventListener('click',function(e){
        e.target.classList.toggle('ed-detail-active');
        var edudetails=e.target.nextElementSibling;
        if(edudetails.style.maxHeight){
            edudetails.style.maxHeight=null;
        }
        else{
            edudetails.style.maxHeight=edudetails.scrollHeight+'px';
        }
    })
}

const sourceheading=document.querySelector('.sources-heading');
sourceheading.addEventListener('click',function(e){
    e.target.classList.toggle('active-sources');
    var sources=e.target.nextElementSibling;
    if(sources.style.maxHeight){
        sources.style.maxHeight=null;
    }
    else{
        sources.style.maxHeight=sources.scrollHeight+'px';
    }
});

$(document).ready(function(){
    // for navheader //
    var navsec=$('.navheader');
    var logo=$('.logo');
    navsec.addClass('appear');
    logo.addClass('appearlogo');
    // for navheader //

    //introheader//
    var introsec=$('.introsection');
    introsec.addClass('appear');
    //introheader//

    $(document).scroll(function(){
        var pageTop=$(document).scrollTop();
        var pageBottom=pageTop+$(window).height();

        // for all sections //
        var allsections=$('.section-wrapper');
        for(var i=0;i<allsections.length;i++){
            var section=$(allsections[i]);
            if(!section[0].classList.contains('appear')){
                var sec_pos=section.position().top;
                if(sec_pos<pageBottom){
                    section.addClass('appear');
                }
            }
        }
        // for all sections //

        // for skill section //
        var allservices=$('.service');
        for(var i=0;i<allservices.length;i++){
            var service=$(allservices[i]);
            var serv_pos=service.position().top;
            if(serv_pos<pageBottom){
                service.addClass('serviceappear');
            }
        }
        // for skill section //

        // for aboutme section //
        
        var aboutmeitems=$('.aboutme-topic');
        for(var i=0;i<aboutmeitems.length;i++){
            var detail=$(aboutmeitems[i]);
            var detail_pos=detail.position().top;
            if(detail_pos<pageBottom){
                detail.addClass('aboutdetailappear');
            }
        }

        // for aboutme section //

        //for work section//
        var portfolio=$('.portfolio__item');
        var workSub=$('.section__subtitle--work');
        var workSub_pos=workSub.position().top;
        if(pageBottom>workSub_pos)
            workSub.addClass('fadeinsub');
        else
            workSub.removeClass('fadeinsub');
        for(var i=0;i<portfolio.length;i++){
            var item=$(portfolio[i]);
            var item_pos=item.position().top;
            if(pageBottom>item_pos)
                item.addClass('fadeinport');
            else
                item.removeClass('fadeinport');
        }
        //for work section//
    });
});
