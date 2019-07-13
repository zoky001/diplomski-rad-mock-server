var findByGroupedOwnerId = {
  path: '/exposure/findByGroupedOwnerId',
  method: 'GET',
  render: function (req, res) {
    var response = {"success":true,"data":[]}
    res.status(200).send(response);
  }
};

module.exports = [findByGroupedOwnerId];
