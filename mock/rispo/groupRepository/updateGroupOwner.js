var updateOwner = {
  path: '/group/updateOwner',
  method: 'GET',
  render: function (req, res) {
    var response = {
      "success": true,
      "data": true
    }


    res.status(200).send(response);
  }


};

module.exports = [updateOwner];
