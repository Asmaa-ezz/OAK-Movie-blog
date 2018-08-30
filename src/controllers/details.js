exports.get = (req, res) => {
  console.log(req.query.id);
  const {id,title,image} = req.query;
  res.render('details', { stylefile: 'details', domfile: 'details', id, title,image});
};

exports.post = (req, res) => {
  console.log(`id : ${req.body.id}`);
  // res.render('details', );
  res.send({ err: null, result: req.body.id });
};
