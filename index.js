var _ = require('lodash');
var geo = require('./countries.json');

exports.find = {
   country: function(code) {
      return _.find(geo, {cca2: code});
   }
};
