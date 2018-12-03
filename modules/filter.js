function filter(req, res, product) {
    var array = []
    for (var index in product) { // each products
        var firstMatched = typeof req.query.filter["color"] === 'undefined'
        var secondMatched = typeof req.query.filter["size"] === 'undefined'

        for (var eachFilter in req.query.filter["color"]) { // each filter in set of filter
            if (product[index]["color"].includes(req.query.filter["color"][eachFilter])) { // check whether product is included or not.
                firstMatched = true;
                break;
            }
        }

        for (var eachFilter in req.query.filter["size"]) { // each filter in set of filter
            if (product[index]["size"].includes(req.query.filter["size"][eachFilter])) { // check whether product is included or not.
                secondMatched = true;
                break;
            }
        }
        if (firstMatched && secondMatched)
            array.push(product[index])
    }
    return array
}

module.exports = filter;
