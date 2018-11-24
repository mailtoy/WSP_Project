$(document).ready(function () {
    // edit clicked
    $('#saveBtn').hide();
    $('#editBtn').click(function () {
        $('#saveBtn').show();
        $(this).attr('disabled', 'disabled');
        var $this = $('.profile-info-value input');
        $this.is(':disabled') ? $this.prop('disabled', false) : $this.prop('disabled', true);
    })

    $('#edit-image').click(function () {
        if ($('.chooseFile').is(":visible")) {
            $('.chooseFile').hide();
        } else {
            $('.chooseFile').show();
        }
    })

});

// window.addEventListener('load', function () {
//     document.querySelector('input[type="file"]').addEventListener('change', function () {
//         if (this.files && this.files[0]) {
//             var formData = new FormData();
//             formData.append('productImage', this.files[0])
//             // console.log(this.files[0])
//             // var img = document.getElementById('profile-pic').setAttribute('src', this.files[0]);
//             $.ajax({
//                 type: "POST",
//                 url: "/upload/",
//                 data: JSON.stringify({ 'productImage': this.files[0] }),
//                 contentType: false,
//                 processData: false,
//                 cache: false,
//                 complete: function (data) {
//                     console.log(data)
//                 }
//             });
//         }
//     });
// })