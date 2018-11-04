$(document).ready(function(){/* to make sure the script runs after page load */

    $('.content').each(function (event) { /* select all divs with the item class */
        var max_length = 70; /* set the max content length before a read more link will be added */
        if ($(this).html().length > max_length) { /* check for content length */
            var short_content = $(this).html().substr(0, max_length); /* split the content in two parts */
            $(this).html(short_content+"...")
        }
    });
});