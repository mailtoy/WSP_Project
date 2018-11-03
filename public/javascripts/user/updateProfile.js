$(document).ready(function(){
    // edit clicked
    $('#saveBtn').hide();
    $('#editBtn').click(function() {
        $('#saveBtn').show();
        $('.chooseFile').show();
        $(this).attr('disabled', 'disabled');
        var $this = $('.profile-info-value input');
        $this.is(':disabled') ? $this.prop('disabled', false) : $this.prop('disabled', true);
    })
});

document.getElementById("my-file").onchange = function() {
    if (this.files && this.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            // e.target.result is a base64-encoded url that contains the image data
            document.getElementById('profile-pic').setAttribute('src', e.target.result);
        };
        reader.readAsDataURL(this.files[0]);
    }
}