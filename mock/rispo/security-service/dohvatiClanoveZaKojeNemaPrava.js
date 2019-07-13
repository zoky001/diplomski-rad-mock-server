var dohvatiClanoveZaKojeNemaPrava = {
  path: '/securityService/dohvatiClanoveZaKojeNemaPrava',
  method: 'GET',
  render: function (req, res) {
    var response = {
      "success": true,
      "data": [
        "0000043897",
        "0000107067",
        "0000127592",
        "0001052939",
        "0002083373",
        "0002970199",
        "0003146695"
      ]
    }


    res.status(200).send(response);
  }


};

module.exports = [dohvatiClanoveZaKojeNemaPrava];
