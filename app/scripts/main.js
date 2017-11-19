// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - 70
      }, 600, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(':focus')) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

$('#intromodallink').on('click', function () {
    $('#introModal').modal('show');
})

$('#aboutmodallink').on('click', function () {
    $('#aboutModal').modal('show');
})

$('#projektledelselink').on('click', function () {
    $('#projektledelseModal').modal('show');
})

$('#changemanagementlink').on('click', function () {
    $('#changemanagementModal').modal('show');
})

$('#bestyrelsesarbejdelink').on('click', function () {
    $('#bestyrelsesarbejdeModal').modal('show');
})


$('.toggle-menu').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.header__menuwrapper').toggleClass('active');
    $('.header').toggleClass('menu_open');
});

$(document).ready(function () {
    initSwiper();
});

function initSwiper(){
    var slidesPerView = 4;
    
        if ($(window).width() < 769) {
            slidesPerView = 2;
        }
        if ($(window).width() < 668) {
            slidesPerView = 1;
        }
    
        var mySwiper = new Swiper('.swiper-container', {
            slidesPerView: slidesPerView,
            slidesPerGroup: 1,
            loop: true,
            initialSlide: 0,
            loopFillGroupWithBlank: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        })

        var t = $('#clientlogos').find('img');
        $('#clientlogos').find('img').each(function(){
            mySwiper.appendSlide('<div class="swiper-slide"><img class="clientlogoimg" src=\"'+ this.src +'\"></div>');
        });

        mySwiper.update();
        mySwiper.pagination.render();
        mySwiper.pagination.update();

}
