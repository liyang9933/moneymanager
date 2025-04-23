function mediaTypeValidator(req, res, next) {
  const contentType = req.get('Content-Type');

  if (contentType !== 'application/json')
    return res.status(415).send('415 Unsupported Media Type');
  return next();
}

module.exports = mediaTypeValidator;