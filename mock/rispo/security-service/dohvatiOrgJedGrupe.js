var dohvatiOrgJedGrupe = {
  path: '/securityService/dohvatiOrgJedGrupe',
  method: 'GET',
  render: function (req, res) {
    var response = {
      "success": true,
      "data": {"data": "nekaPise"}
    }


    res.status(200).send(response);
  }


};

module.exports = [dohvatiOrgJedGrupe];
