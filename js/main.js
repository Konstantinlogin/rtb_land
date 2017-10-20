


$(document).ready(function(){
       
        $(window).scroll(function(){
            checkNavBarPosition();
        });


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
        checkNavBarPosition();

    });