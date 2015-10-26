function getDependencies(tree, res) {
    res = res || [];
    var deps = tree && tree.dependencies || [];

    Object.keys(deps).forEach(function(d) {
        var key = d + '@' + tree.dependencies[d].version;
        if (res.indexOf(key) === -1) res.push(key);
        getDependencies(tree.dependencies[d], res);
    });

    return res.sort();
}

module.exports = getDependencies;