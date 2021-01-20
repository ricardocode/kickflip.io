$(document).ready(function () {
    $('.carousel').carousel()
});

try {
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop(); // Identifico el valor de scroll
        
        if (scroll > 500) { //Si el scroll es superior a 90px el header se hace fijo
            $('header').addClass('header__color');

            
            
        } else {// Al volver al top, el header se normaliza
            $('header').removeClass('header__color');
            

          
        }

        if (scroll > 80) { //Si el scroll es superior a 90px el header se hace fijo
            $('.ricardo-logo').addClass('showLogo');    
            
        } else {// Al volver al top, el header se normaliza
            $('.ricardo-logo').removeClass('showLogo');

        }
    });
    } catch (error) {

    }