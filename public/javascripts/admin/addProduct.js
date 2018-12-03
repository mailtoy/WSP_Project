$(document).ready(function () {

    $('#typeOfDepartment').on('change', function () {
        $('#typeOfCategory').html('');
        $('#typeOfSubcategory').html('');
        if ($('#typeOfDepartment').val() == "ladies") {
            $('#typeOfCategory').append('<option selected value="dresses">Dresses</option>');
            $('#typeOfSubcategory').append('<option value="short dresses">Short dresses</option>');
            $('#typeOfSubcategory').append('<option value="midi dresses">Dresses</option>');
            $('#typeOfSubcategory').append('<option value="bodycon">Bodycon</option>');
        }
        if ($('#typeOfDepartment').val() == "men") {
            $('#typeOfCategory').append('<option selected value="tanktops">Tanktops</option>');
            $('#typeOfSubcategory').append('<option value="short sleeves">Short sleeves</option>');
            $('#typeOfSubcategory').append('<option value="long sleeves">Long sleeves</option>');
        }
    });
    // $('#typeOfCategory').on('change', function () {
    //     $('#typeOfSubcategory').html('');
    //     if ($('#typeOfCategory').val() == "dresses") {
    //         $('#typeOfSubcategory').append('<option value="short dresses">Short dresses</option>');
    //         $('#typeOfSubcategory').append('<option value="midi dresses">Dresses</option>');
    //         $('#typeOfSubcategory').append('<option value="bodycon">Bodycon</option>');
    //     }
    //     if ($('#typeOfCategory').val() == "tanktops") {
    //         $('#typeOfSubcategory').append('<option value="short sleeves">Short sleeves</option>');
    //         $('#typeOfSubcategory').append('<option value="long sleeves">Long sleeves</option>');
    //     }

    // });
})