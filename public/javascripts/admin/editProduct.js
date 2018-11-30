

$(document).ready(function () {
    $('#submitBth').click(function () {
        product = {}
        color = {}
        size = {}

        $('.color').each(function () {
            var skin = ($(this).children("label").text())
            color[skin] = [];
            $($(this).children("input")).each(function () {
                color[skin].push($(this).val())
            })
        })


        $('.size').each(function () {
            size[$(this).val()] = "100"
        })



        console.log(size)
        console.log(color)


        console.log($('#title').val())
        console.log($('#price').val())

        console.log($('#detail').text())
        console.log($('#description').text())

        product.title = $('#title').val()
        product.price = $('#price').val()
        product.detail = $('#detail').val()
        product.description = $('#description').val()
        product.color = color
        product.size = size

        console.log(window.location.href)
        $.ajax({
            type: "GET",
            data: { productUpdate: product },
            url: window.location.href,
            success: function (data) {
                window.location = this.url
            }
        });


    });
});