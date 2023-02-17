$(function(){
    

    // setTimeout(() => {
    //     $('.sc-hero').addClass('on');
    // }, 500);


    gsap.from('.sc-hero .elem08',{
        height:0
    })
    gsap.from('.sc-hero .elem10',{
        scale:0
    })
    // gsap.from



    // lastscroll = 0 , curr = 0 일때 
    // 첫 화면일때 스르륵 에니메이션 
    lastScroll = 0;
    $(window).scroll(function(){
        curr = $(window).scrollTop();

        if (curr == 0){
            $('.sc-hero .sub-tit, .sc-hero .tit01, .sc-hero .tit03, .sc-hero .tit04, .sc-hero .btn.trial, .sc-hero .tit-wrap .dash, .sc-hero .elem02, .sc-hero .elem1, .sc-hero .elem13').addClass('on');
        }

        lastScroll = curr
    })
    $(window).trigger('scroll'); 

    // scHero = gsap.timeline({
    //     scrollTrigger:{
    //         trigger:".sc-hero",
    //         start:"0% 0%",
    //         end:"100% 0%",
    //     },
    // })
    // scHero
    // .addLabel('a')
    // .to('.header',{
    //     y : '50px',
    //     opacity :1 
    // },'a')

    


    // sc-visit  
    scVisit = gsap.timeline({
        scrollTrigger:{
            trigger:".sc-visit",
            start:"0% 70%", //trigger의 시작지점 / 윈도우시작지점 
            end:"100% 0%",
            // markers : true,
            // scrub : 
        },
    })
         scVisit
         .addLabel('a')
        .to('.sc-visit .tit-visit',{ x: 0, opacity : 1, },'a')
        .to('.sc-visit .card-list > *',{ y: 0, opacity :1 , stagger:0.1 },'a')




    // gsap.to('.sc-visit .tit-visit',{
    //     scrollTrigger:{
    //         trigger:".sc-hero",
    //         start:"50% 0%",
    //         end:"100% 0%",
    //         markers : true,
    //     },
    //     x: 0, opacity : 1,
    //     stagger : 0.1

    // })


    // sc-media 
    scMedia = gsap.timeline({
        scrollTrigger:{
            trigger:".sc-visit",
            start:"50% 0%",
            end : "100% 0%",
            // markers : true,
            scrub : 1
        },
    })
        scMedia
        .addLabel('a')
        .to('.sc-media .illustr-area img',{
            scale : 1
        },'a')
        .to('.sc-media .border-area',{
            opacity : 1,
        },'a')
        .to('.sc-media .desc-wrap',{
            x : 0,
            opacity : 1,
        },'a')
        .to('.sc-media .tit-wrap .tit01, .sc-media .tit-wrap .tit02, .sc-media .tit-wrap .tit03',{
            x : 0,
            opacity : 1,
        },'a')

    
    // Audio  
    scAudio = gsap.timeline({
        scrollTrigger:{
            trigger:".sc-media",
            start:"50% 0%",
            end : "100% 0%",
            // markers : true,
            scrub : 1
        },

    })
        scAudio 
        .addLabel('a')
        .to('.sc-audio .group-tit > * ',{
            x : 0,
            opacity : 1
        },'a')

        .to('.sc-audio .audio-list > *',{
            y : 0,
            opacity : 1,
            stagger : 0.1,
           
        },'a')

        // .sc-audio .group-more


    audioBtm = gsap.timeline({
        scrollTrigger:{
            trigger:".sc-audio",
            start:"25% 10%",
            end : "100% 50%",
            // markers : true,
            scrub : 1
        },
    })
     audioBtm
     .addLabel('a')
        .to('.sc-audio .group-more',{
            y : 0,
            opacity : 1,
        },'a')
        




    
})

