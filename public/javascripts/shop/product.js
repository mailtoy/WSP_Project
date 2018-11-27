$(document).ready(function(){
    let $active = $('.tab-pane').attr('id');
    $('#'+$active).addClass('active');
});