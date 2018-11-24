jQuery(document).ready(function () {
    $('.quantity').on('click', function () {
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($(this).val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            var price = ($('#perPrice_' + fieldName).text());
            $('#updates_' + fieldName).text(price * currentVal);
        }

        var subtotal = 0
        jQuery('.eachPrice').each(function () {
            var currentElement = $(this);
            var value = parseInt(currentElement.text());
            subtotal += value
        });
        $('#subtotal').text(subtotal);
        $('#total').text(subtotal);

    });

    $('.checkout').click(function (e) {
        jQuery('.quantity').each(function () {
            var currentElement = $(this);
            var amount = parseInt(currentElement.val());
            id = currentElement.attr('field');
            $.ajax({
                type: "GET",
                url: '/add-to-cart-qty/' + id + '/' + amount,
                async: false
            });
        });

        window.location.href = '/checkout'
    })

    $('.remove').on('click', function(e) {
        $target = $(e.target);
        const id = $target.attr('data-id');
        $.ajax({
            type: 'DELETE',
            url: '/remove-from-cart/:'+id,
            success: function() {
                 alert('Delete from cart');
                 window.location.href='/';
            },
            error: function(err) {
                console.log(err)
            }
        })
    })
})