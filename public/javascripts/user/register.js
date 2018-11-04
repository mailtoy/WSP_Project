$(document).ready(function(){
    $('#gridCheck').click(function() {
        if ($(this).is(':checked')) {
            $('#submitBtn').removeAttr('disabled');
            $('#submitBtn').css('background-color', '#000000');
        } else {
            $('#submitBtn').attr('disabled', 'disabled');
            $('#submitBtn').css('background-color', '#696969');
        }
    });
});