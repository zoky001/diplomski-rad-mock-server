var azurirajIzlozenostClana = {
  path: '/rispo/azurirajIzlozenostClana',
  method: 'POST',
  render: function (req, res) {


    var response = {
      "success": true,
      "data": "todo"
    }
    res.status(200).send(response);
  }
};

module.exports = [azurirajIzlozenostClana];
