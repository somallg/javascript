var http = require('http');
var bl   = require('bl');

var content = [];
var count = 0;
for (var i = 0; i < 3; i++) {
  (function(i) {
    http.get(process.argv[2 + i], function(res) {
      res.pipe(bl(function(err, data) {
        if (err)
          return console.error(err);

        content[i] = data.toString();
        count++;

        if (count === 3) {
          content.forEach(print);
        }
      }));
    });
  })(i);
}

function print(e) {
  console.log(e);
}
