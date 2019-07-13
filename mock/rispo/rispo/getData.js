var getData = {
  path: '/rispo/data',
  method: 'POST',
  render: function (req, res) {


    var response = {
      "success": true,
      "data": {
        "error": false,
        "errorMsg": null,
        "id": 5957,
        "class": "hr.zaba.rispo.generated.rispo.ws.client.model.Data"
      }
    }
    res.status(200).send(response);
  }
};

module.exports = [getData];
