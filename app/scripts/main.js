
$('#intromodallink').on('click', function(){
    $('#introModal').modal('show');
})

$('#aboutmodallink').on('click', function(){
    $('#aboutModal').modal('show');
})

$('#projektledelselink').on('click', function(){
    $('#projektledelseModal').modal('show');
})

$('#changemanagementlink').on('click', function(){
    $('#changemanagementModal').modal('show');
})

$('#bestyrelsesarbejdelink').on('click', function(){
    $('#bestyrelsesarbejdeModal').modal('show');
})


$( '.toggle-menu' ).on( 'click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.header__menuwrapper').toggleClass('active');
    $('.header').toggleClass('menu_open');
});
