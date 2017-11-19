
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
