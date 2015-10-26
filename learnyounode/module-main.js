var mymodule = require('./module.js');
var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir, ext, function(err, list) {
  if (err) throw err;

  list.forEach(function(f) {
    console.log(f);
  });
});
