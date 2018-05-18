var _ = require('lodash');
var arr = [1];
var arr2 = _.concat(arr, [2],[[3]]);
console.log(arr2);