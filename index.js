'use strict';

module.exports.deploy = function(config = {}) {
  let finalConfig = Object.assign({}, config, require('./tasks/config'));

  require('./tasks/s3')(finalConfig).publish();

  return require('./tasks/redirector')(finalConfig).save();
};

module.exports.lib = {
  revision: require('./lib/revision')
};
