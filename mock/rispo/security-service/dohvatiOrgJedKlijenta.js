var dohvatiOrgJedKlijenta = {
  path: '/securityService/dohvatiOrgJedKlijenta',
  method: 'GET',
  render: function (req, res) {
    var response = {
      "success": true,
      "data": {"data": "0003146695"}
    }


    res.status(200).send(response);
  }


};

module.exports = [dohvatiOrgJedKlijenta];
