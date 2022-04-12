$('.add').on('click', () => {
    if (menuState == 'item') {
        if ($('#new-id').val() == '') {
            $('.hidden').toggle(500);
        }
    }
    if (menuState == 'storehouse') {
        if ($('#new-id-storehouse').val() == '') {
            $('.hidden-storehouse').toggle(500);
        }
    }
})