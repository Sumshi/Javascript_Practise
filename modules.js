1) The Simplest Module
/* file: hello.js
console.log('Hello World');

 file: app.js
require('hello.js');
*/
2) define a global
/* file: foo.js
foo = function () {
console.log('foo!');

file: app.js
require('./foo.js');
foo()
}
*/
3) exporting an anonymous function
/* file: bar.js
module.exports = function () {
console.log('bar!');

file: app.js
var bar = require('./bar.js');
bar();
}
*/
4) export a named function
/* file: fiz.js
exports.fiz = function () {
console.log('fiz!');

file : app.js
var fiz = require('./fiz.js').fiz;
fiz();
}
*/
5) export an anonymous object
/*
file: buz.js
Buz.prototype.log = function () {
      console.log('buz!');
    };

    module.exports = new Buz();

file: app.js
var buz = require('./buz.js');
buz.log();
*/
6) exporting a named object
/* file: baz.js
    var Baz = function () {};

    Baz.prototype.log = function () {
      console.log('baz!');
    };
    exports.Baz = new Baz();

file: app.js
    var baz = require('./baz.js').Baz;
    baz.log();
*/
7) exporting an anonymous prototype
/* file: doo.js
    var Doo = function () {};

    Doo.prototype.log = function () {
        console.log('doo!');
    }

    module.exports = Doo;

file: app.js
    var Doo = require('./doo.js');
    var doo = new Doo();
    doo.log();
*/
8) exporting a named prototype
/* file: qux.js
    var Qux = function () {};

    Qux.prototype.log = function () {
      console.log('baz!');
    };

    exports.Qux = Qux;

file: app.js
    var Qux = require('./qux.js').Qux;
    var qux = new Qux();
    qux.log();
*/
