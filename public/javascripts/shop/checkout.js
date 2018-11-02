Stripe.setPublishableKey('pk_test_K6SJcPT1w9Lv01gPP8ZhDf9C');

var $form = $('#checkout-form');

console.log("PASSES")

$form.submit(function (event) {
    $('#charge-error').addClass('hidden');
    $form.find('button').prop('disabled', true);
    Stripe.card.createToken({
        number: $('#ccnum').val(),
        cvc: $('#cvv').val(),
        exp_month: $('#expmonth').val(),
        exp_year: $('#expyear').val(),
        name: $('#cname').val()
    }, stripeResponseHandler);
    return false;
});

function stripeResponseHandler(status, response) {
    if (response.error) { // Problem!
        console.log("PROBLEM")
        // Show the errors on the form
        $('#charge-error').text(response.error.message);
        $('#charge-error').removeClass('hidden');
        $form.find('button').prop('disabled', false); // Re-enable submission

    } else { // Token was created!

        console.log("TEST")
        // Get the token ID:
        var token = response.id;

        // Insert the token into the form so it gets submitted to the server:
        $form.append($('<input type="hidden" name="stripeToken" />').val(token));

        // Submit the form:
        $form.get(0).submit();

    }
}