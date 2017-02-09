var $ = require('jquery');
var _ = require("underscore");

var $app = $('#app');

$app.on('click', '.js-toggle-list', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass('toggle-list__button_active');
});
