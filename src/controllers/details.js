exports.get = (req, res) => {
  console.log(req.body);
  res.end("Pass");
};

exports.post = (req, res) => {

  res.send({"err":null,"result":"Done"});
}
