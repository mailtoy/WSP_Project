$(document).ready(function () {

    $('#color').on('change', function () {
        if (this.value !== "Select color...") {
            var bth = "<button type=\"button\" class= \"btn btn-dark \" id = \"" + this.value + "Bth\" >" + this.value + "</button >"
            var input = "<input name='" + this.value + "Input' type='text' class='form-control' style='width:330px'>"
            $(".color-filter").append(bth + input);
        }
    });

    $('#submitBth').click(function () {
        $('.color').each(function () {
            var skin = ($(this).children("label").text())
            color[skin] = [];
            $($(this).children("input")).each(function () {
                color[skin].push($(this).val())
            })
        })

    })
})