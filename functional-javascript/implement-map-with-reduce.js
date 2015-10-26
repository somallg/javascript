module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function(acc, item, index, arr) {
        acc.push(fn(item, index, arr));
        return acc;
    }, []);
};