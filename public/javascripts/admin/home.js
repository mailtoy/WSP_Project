function deleteProduct(key) {
    console.log(key)
    var retVal = confirm("Do you want to delete?");
    if (retVal == true) {
        location.href = '/admin/product/remove/' + key;
        return true;
    }
    else {
        return false;
    }
}