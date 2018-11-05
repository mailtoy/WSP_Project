

$(document).ready(function () {

    $('#filterBtn').hide();

    $(".form-check").change(function () {
        $('#filterBtn').show();
        // console.log($(this).find('label').text());
    });

    $('#filterBtn').click(function () {
        // $(".form-check").each(function () {
        //         // alert($('#defaultCheck1:checked') );
        //     console.log($(this).find('form-check-input:checked'))
        //     // console.log($(this).find('label').text());
        // })
        var info = {}
        info["concept"] = []
        info["category"] = []
        info["type"] = []
        info["size_stock"] = []
        info["color_stock"] = []
        info["order"] = []

        $.each($("input[name='concept']:checked"), function () {
            if ($(this).val())
                info["concept"].push($(this).val())
        });
        $.each($("input[name='category']:checked"), function () {
            if ($(this).val())
                info["category"].push($(this).val())
        });
        $.each($("input[name='type']:checked"), function () {
            if ($(this).val())
                info["type"].push($(this).val())
        });
        $.each($("input[name='size']:checked"), function () {
            if ($(this).val())
                info["size_stock"].push($(this).val())
        });
        $.each($("input[name='color']:checked"), function () {
            if ($(this).val())
                info["color_stock"].push($(this).val())
        });
        $.each($("input[name='order']:checked"), function () {
            if ($(this).val())
                info["order"].push($(this).val())
        });
        $.ajax({
            type: "GET",
            data: { filter: info },
            url: "/page/1",
        });
        console.log(info)
    })

    $(".form-check-label").each(function () {
        var currentElement = $(this);

        var value = currentElement.text(); // if it is an input/select/textarea field
        // TODO: do something with the value   
        console.log(value)
    });

})