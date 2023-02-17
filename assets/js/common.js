$(function(){





    // 헤더메니 클릭 js 
    // const gnb = document.querySelectorAll(".header .group-gnb a")
    // const sections = document.querySelectorAll(".container section")
    // const firstTop = sections[0].offsetTop
    // const secondTop = sections[1].offsetTop
    // const thirdTop = sections[2].offsetTop
    // const fourthTop = sections[3].offsetTop

    // gnb[0].onclick = function(){
    //     window.scroll({top:firstTop, behavior :'smooth'})
    // }
    // gnb[1].onclick = function(){
    //     window.scroll({top:secondTop, behavior :'smooth'})
    // }
    // gnb[2].onclick = function(){
    //     window.scroll({top:thirdTop, behavior :'smooth'})
    // }
    // gnb[3].onclick = function(){
    //     window.scroll({top:fourthTop, behavior :'smooth'})
    // }






    // hamburger 
    $('.header .btn-hamburger').click(function(e){
        e.preventDefault();
        $('.accodian-menu, .header .group-hamburger .btn-close').addClass('on');
        $('.header .btn-hamburger').addClass('off');
        $('body').addClass('hidden');
    })
    $('.header .group-hamburger .btn-close').click(function(e){
        e.preventDefault();
        $('.accodian-menu, .header .group-hamburger .btn-close').removeClass('on');
        $('.header .btn-hamburger').removeClass('off');
        $('body').removeClass('hidden');
    })




    // footer 
    footerMotion = gsap.timeline({
        scrollTrigger:{
            trigger:".footer",
            start:"0% 50%",
            end : "100% 100%",
            // markers : true,
            scrub : 1
        },
    })
        footerMotion
        .addLabel('a')
            .to('.footer .flex-area > * ',{
                y : 0,
                opacity : 1,
            },'a')
            .to('.footer .group-elements .elem01, .footer .group-elements .elem02, .footer .group-elements .elem03',{
                x : 0, y:0, z:0,
                opacity : 1,
            },'a')


    // .footer .flex-area > * 


    // modal 
    $('.modal').click(function(e){
        e.preventDefault();
        $('.sc-modal').addClass('on');
        $('body').addClass('hidden');
    })
    $('.sc-modal .btn-close ').click(function(e){
        e.preventDefault();
        $('.sc-modal').removeClass('on');
        $('body').removeClass('hidden');

    })


    // checked 
    $('.checked').click(function(e){
        e.preventDefault();
        $('.alert').addClass('on');
    })
    $('input').click(function(e){
        e.preventDefault();
        $('.alert').removeClass('on');
    })
    
    
})