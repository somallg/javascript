var fs = require('fs'),
    q  = require('q'),
    request = require('request');

function getResults(pathToFile) {
    return q.nfcall(fs.readFile, pathToFile, "utf-8")
        .then(function(repo) {
            console.log('readFile', repo);
            var options = {
                headers: {
                    'User-Agent': 'MyAgent'
                }
            };
            return [q.nfcall(request, 'https://api.github.com/repos/'+repo+'/collaborators', options), q.nfcall(request, 'https://api.github.com/repos/'+repo+'/commits', options)];
        })
        .spread(function(collaboratorsRes, commitsRes) {
            return [collaboratorsRes[1], commitsRes[1]];
        })
        .fail(function(err) {
            console.log(err);
            return err;
        });
}

getResults('repos.txt').then(function(response) {
    console.log('GetResults response', response);
});