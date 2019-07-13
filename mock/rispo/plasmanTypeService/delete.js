var deleteEntry = {
  path: '/placementType/delete',
  method: 'POST',
  render: function (req, res) {
    var response = {
      "success": true,
      "data": null
    }
    res.status(200).send(response);
  }
};

module.exports = [deleteEntry];
