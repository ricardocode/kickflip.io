$(document).ready(function () {
    $('.carousel').carousel()
    $('body').scrollspy({ target: '#list-example' })
});

try {
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop(); // Identifico el valor de scroll
        
        if (scroll > 90) { //Si el scroll es superior a 90px el header se hace fijo
            $('header').addClass('fixedHeader');
            $('img.ricardo-logo-w').addClass('showLogo');
            $('img.ricardo-logo').removeClass('showLogo');
            
            
        } else {// Al volver al top, el header se normaliza
            $('header').removeClass('fixedHeader');
            $('img.ricardo-logo-w').removeClass('showLogo');
            $('img.ricardo-logo').addClass('showLogo');
        }
        //Función para fijar la navegación vertical de scrollSpy
        if (scroll > 535) {
            $('.spyBar').addClass('fixedBar');

        } else {
            $('.spyBar').removeClass('fixedBar')
        }
    });
    } catch (error) {

    }