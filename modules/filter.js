function filter(req, res, product) {
    var array = []
    var numberOfMatching = 0;
    for (var i in req.query.filter)
        for (var j in req.query.filter[i])
            numberOfMatching++

    for (var index in product) {
        var count = 0
        for (var quary_key in req.query.filter) {
            if (typeof product[index][quary_key] === 'object' && product[index][quary_key][req.query.filter[quary_key]] !== undefined) {
                count++
            } else {
                if (req.query.filter[quary_key].includes(product[index][quary_key])) {
                    count++
                }
            }
        }
        if (count == numberOfMatching)
            array.push(product[index])
    }
    return array
}

module.exports = filter;
