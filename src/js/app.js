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

    $('#' + popupid).show();
    $('body').addClass('popup_open');
});

$app.on('click', '.js-hide-popup', function(e) {
    e.preventDefault();
    e.stopPropagation();

    var popupid = $(this).data().popupid;

    $('#' + popupid).hide();
    $('body').removeClass('popup_open');
});
