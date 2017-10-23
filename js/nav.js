$(document).ready(function(){


        function checkNavBarPosition() {
            var scroll = $(window).scrollTop();

            if (scroll >= 100) {
                $(".js-scrolled-header")
                    .addClass('is-scrolled')
                    .addClass('is-font-smaller');

            }
            else {
   
               
                 $(".js-scrolled-header")
                    .removeClass('is-scrolled')
                    .removeClass('is-font-smaller');
                    
                    
            }
        };
       
        $(window).scroll(function(){
            checkNavBarPosition();
        });

        checkNavBarPosition();


        $('.menu-btn').on('click', function (event) {
            event.preventDefault();
            $(this).toggleClass('is-open');
            if($(this).hasClass('is-open')) {
                $('.js-toggle-menu').addClass('is-active');
            }
            else {
                $('.js-toggle-menu').removeClass('is-active');
            }
        });


    });