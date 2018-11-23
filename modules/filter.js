function filter(req, res, product) {
    var array = []
    var allMatched = 0;
    for (var i in req.query.filter)
        allMatched += (req.query.filter)[i].length
        
    for (var index in product) {
        var count = 0
        for (var quary_key in req.query.filter) {
            for (var filter of req.query.filter[quary_key]) {
                if (product[index][quary_key][filter] !== undefined) {
                    count++
                }
            }
        }
        if (count == allMatched)
            array.push(product[index])
    }
    return array
}

function isSubsetOf(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) == -1) {
            return false;
        }
    }
    return true;
}

module.exports = filter;
