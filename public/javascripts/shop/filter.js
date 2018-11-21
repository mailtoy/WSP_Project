$(document).ready(function () {

    $('#filterBtn').hide();

    $(".form-check").change(function () {
        $('#filterBtn').show();
    });

    $('#filterBtn').click(function () {
        var info = {}
        info["size"] = []
        info["color"] = []
        info["order"] = []

        $.each($("input[name='size']:checked"), function () {
            if ($(this).val())
                info["size"].push($(this).val())
        });
        $.each($("input[name='color']:checked"), function () {
            if ($(this).val())
                info["color"].push($(this).val())
        });
        $.each($("input[name='order']:checked"), function () {
            if ($(this).val())
                info["order"].push($(this).val())
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
    })

    $(".form-check-label").each(function () {
        var currentElement = $(this);
        var value = currentElement.text();
    });

})


function pageReset(url) {
    var splitURL = url.split('/')
    var currentPage = splitURL[splitURL.length - 1]
    var newUrl = url.replace(currentPage, "1")
    return newUrl
}
