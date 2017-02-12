var $ = require('jquery');

var $app = $('#app');

$app.on('click', '.js-toggle-list', function(e) {
    e.preventDefault();
    e.stopPropagation();

    $(this).toggleClass('toggle-list__button_active');
});

$app.on('click', '.js-show-popup', function(e) {
    e.preventDefault();
    e.stopPropagation();

    var popupid = $(this).data().popupid;

    if (get_scroll('Height') == true) {
        $('body').css({ 'padding-right': get_scroll_width()});
    }

    $('#' + popupid).show();
    $('body').addClass('popup_open');
});

$app.on('click', '.js-hide-popup', function(e) {
    e.preventDefault();
    e.stopPropagation();

    var popupid = $(this).data().popupid;

    $('#' + popupid).hide();
    $('body').removeClass('popup_open').css({ 'padding-right': 0});
});

function get_scroll(a) {
    var d = document,
        b = d.body,
        e = d.documentElement,
        c = "client" + a;
    a = "scroll" + a;
    return /CSS/.test(d.compatMode)? (e[c]< e[a]) : (b[c]< b[a])
};

function get_scroll_width() {
    // создадим элемент с прокруткой
    var div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    // при display:none размеры нельзя узнать
    // нужно, чтобы элемент был видим,
    // visibility:hidden - можно, т.к. сохраняет геометрию
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    var scrollWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);

    return scrollWidth;
}
