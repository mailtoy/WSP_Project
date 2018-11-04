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

        $.each($("input[class='form-check-input']:checked"), function(){            
            console.log($(this).val());
        });
    })

    


    $(".form-check-label").each(function () {
        var currentElement = $(this);

        var value = currentElement.text(); // if it is an input/select/textarea field
        // TODO: do something with the value   
        console.log(value)
    });

})