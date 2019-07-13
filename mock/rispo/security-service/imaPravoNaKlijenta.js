var imaPravoNaKlijenta = {
  path: '/securityService/imaPravoNaKlijenta',
  method: 'POST',
  render: function (req, res) {
    var response = {
      "success": true,
      "data": {"data": true}
    }


    res.status(200).send(response);
  }


};

module.exports = [imaPravoNaKlijenta];
