module.exports = function Spy(target, method) {
    var orginalFunction = target[method];

    var res = {
        count: 0
    };

    target[method] = function() {
        res.count++;
        return orginalFunction.apply(this, arguments);
    }

    return res;
};