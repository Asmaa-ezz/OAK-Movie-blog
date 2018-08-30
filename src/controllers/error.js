exports.client = (req, res) => {
  res.status(404).render('error', {
    stylefile: 'error',
    layout: 'error',
    statusCode: 404,
    errorMessage: 'Page not found',
    img: 'https://www.lifewire.com/thmb/OO7CD06NAdoIwv71DgUgBiTd4ps=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/shutterstock_325494917-5a68d8403418c600190a3e1f.jpg',
  });
};

exports.server = (err, req, res, next) => {
  res.status(500).render('error', {
    stylefile: 'error',
    layout: 'error',
    statusCode: 500,
    errorMessage: 'Server error',
    img: 'http://lefft.com/mailgun/mailgun_500.jpg',
  });
};
