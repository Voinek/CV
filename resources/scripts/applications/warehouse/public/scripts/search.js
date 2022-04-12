let searchVisible = false;
$('#search').on('click', () => {
    if ($('.nav__search input').val() == '') {
        searchVisible = !searchVisible;
        $(".nav__search").animate({
            width: 'toggle'
        }, 500)
    } else {
        searchVisible = true;
    }
})

$('.nav__search input').keyup(() => {
    search();
})

const search = () => {
    let where = 'table-storehouse';
    menuState == 'storehouse' ? where = 'table-storehouse' : where = 'table-items';
    const $filter = $('.nav__search input').val().toUpperCase();
    for (let i = 0; i <= $(`#${where} tr`).length; i++) {
        let $td = $(`#${where} tbody tr:nth-child(${i + 1}`).find('td');
        if ($td) {
            const txt = $td.text();
            if (txt.toUpperCase().indexOf($filter) > -1) {
                $(`#${where} tbody tr:nth-child(${i+1})`).show();
            } else {
                $(`#${where} tbody tr:nth-child(${i+1})`).hide();
            }
        }
    }
}