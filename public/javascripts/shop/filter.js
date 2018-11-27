
$(document).ready(function () {
    $.each($("#filtered input[type='hidden']"), function () {
        $("#" + $(this).val()).show();
    })
})

function bthClikedFilter(color) {
    $("#filterBtn").show();
    if ($("#" + color).is(":visible")) {
        $("#" + color).hide();
    } else {
        $("#" + color).show();
    }
}

function clearfilter() {
    $("#filterBtn").show();
    $.each($(".color-filter .btn"), function () {
        jQuery(this).hide();
    });
    $.each($(".size-filter .signatureColor"), function () {
        jQuery(this).hide();
    });
}

function filter() {
    var info = {}
    info["size"] = []
    info["color"] = []

    $.each($(".color-filter .btn"), function () {
        if (jQuery(this).is(":visible")) {
            info["color"].push(this.id)
        }
    });

    $.each($(".size-filter .signatureColor"), function () {
        if (jQuery(this).is(":visible")) {
            info["size"].push(this.id)
        }
    });

    var url = pageReset(window.location.href)
    $.ajax({
        type: "GET",
        data: { filter: info },
        url: url,
        success: function (data) {
            window.location = this.url
        }
    });
}

function pageReset(url) {
    var splitURL = url.split('/')
    var currentPage = splitURL[splitURL.length - 1]
    var newUrl = url.replace(currentPage, "1")
    return newUrl
}
