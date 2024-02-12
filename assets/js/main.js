$(document).ready(function() {
    $('#laptop').delay(10000).queue(function () {
        $('#laptop').addClass('dc-itl');
        $('smatphone').addClass('dc-itl');
    });
});