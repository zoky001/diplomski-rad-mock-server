var clientSetPrimaryMember = {
  path: '/client/setPrimaryMember',
  method: 'POST',
  render: function (req, res) {
    var response = {
      "success": true, "data": "todo"
    }
    res.status(200).send(response);
  }
};

module.exports = [clientSetPrimaryMember];
