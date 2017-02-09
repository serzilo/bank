var $ = require('jquery');

var $app = $('#app');

$app.on('click', '.js-toggle-list', function(e) {
    e.preventDefault();
    e.stopPropagation();

    $(this).toggleClass('toggle-list__button_active');
});
