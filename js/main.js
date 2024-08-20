$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle')
    });

    const showMenu = (headerToggle, navbarId) =>{
        const toggleBtn = document.getElementById(headerToggle),
        nav = document.getElementById(navbarId)
    
        //validate that variables exist
        if(headerToggle && navbarId){
            toggleBtn.addEventListener('click', ()=>{
    
                nav.classList.toggle('show-menu')

                //change icon ??
            toggleBtn.classList.toggle('fab fa-youtube')
    
            })
        }
    }
    
    showMenu('fa-angle-right','sidebar')

    $(window).on('load scroll', function(){
        $(this).toggleClass('fa-times');
        $('.fa-bars').removeClass('fa-times');
        $('nav').removeClass('nav-toggle');


        if($(window).scrollTop() > 30){
            $('header').css({'background':'#6c5ce7','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
            }else{
             $('header').css({'background':'none','box-shadow':'none'});
            }

    });

    $('.according-header').click(function(){
        $('.according .according-body').slideUp();
        $(this).next('.according-body').slideDown();
        $('.according .according-header span').text('+');
        $(this).children('span').text('-');
    });
  













    
    });