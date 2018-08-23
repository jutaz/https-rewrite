const targetProtocol = 'https';

module.exports = function (options) {
  options = options || {};

  if (!options.code) {
    options.code = 307;
  }

  return function (req, res, next) {
    // Only redirect if protocol is present.
    if (req.protocol && req.protocol !== targetProtocol) {
      res.redirect(options.code, targetProtocol + '://' + req.get('host') + req.originalUrl);
      return;
    }
    next();
  }
}
