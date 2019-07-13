var wSKorisnikAutorizacija = {
  path: '/sova/wSKorisnikAutorizacija',
  method: 'POST',
  render: function (req, res) {
    var response = {
      "success": true,
      "data": [{
        "aplikacija": "RISPO",
        "funkcija": "RISPO01",
        "class": "hr.zaba.rispo.generated.sova.client.model.WsKorinikAutorizacijaoData"
      }, {
        "aplikacija": "RISPO",
        "funkcija": "RISPO02",
        "class": "hr.zaba.rispo.generated.sova.client.model.WsKorinikAutorizacijaoData"
      }, {
        "aplikacija": "RISPO",
        "funkcija": "RISPO03",
        "class": "hr.zaba.rispo.generated.sova.client.model.WsKorinikAutorizacijaoData"
      }]
    }

    res.status(200).send(response);
  }
};

module.exports = [wSKorisnikAutorizacija];
