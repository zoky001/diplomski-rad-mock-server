var save = {
  path: '/creditType/save',
  method: 'POST',
  render: function (req, res) {
    var response = {
      "success": true,
      "data": true
    }


    res.status(200).send(response);
  }


};

module.exports = [save];
