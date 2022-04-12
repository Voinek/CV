let menuState = 'storehouse';
$('#storehouse').on('click', () => {
    hideAll();
    $('.storehouse').fadeIn();
    menuState = 'storehouse';
})

$('.cta').on('click', () => {
    hideAll();
    $('.contact').fadeIn();
    menuState = 'contact';
})

const hideAll = () => {
    $('main').hide();
    $('.contact').hide();
    $('.storehouse').hide();
}