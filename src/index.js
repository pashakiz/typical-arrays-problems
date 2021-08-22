
exports.min = function min (array) {
    if (!array || array.length === 0) return 0
    return array.reduce((min, el) => el < min ? min = el : min, array[0])
}

exports.max = function max (array) {
    if (!array || array.length === 0) return 0
    return array.reduce((max, el) => el > max ? max = el : max, array[0])
}

exports.avg = function avg (array) {
    if (!array || array.length === 0) return 0
    return array.reduce((sum, el) => sum + el, 0) / array.length
}
