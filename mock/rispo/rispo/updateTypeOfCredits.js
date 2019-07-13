var updateTypeOfCredits = {
  path: '/rispo/updateTypeOfCredits',
  method: 'GET',
  render: function (req, res) {
    var response = {
      "success": true,
      "data": ['TODO']
    }
    res.status(200).send(response);
  }
};

module.exports = [updateTypeOfCredits];
