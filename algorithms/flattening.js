function flatListOwnImplementation(arr) {
    if (arr instanceof Array) {
        return arr.length === 0
            ? []
            : flatListOwnImplementation(arr[0]).concat(flatListOwnImplementation(arr.slice(1)));
    }
    return [arr];
}

function flatList(arr) {
    return arr.flat(Infinity);
}

module.exports = {flatList, flatListOwnImplementation};