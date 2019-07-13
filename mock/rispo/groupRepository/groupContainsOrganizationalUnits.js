var groupContainsOrganizationalUnits = {
  path: '/group/groupContainsOrganizationalUnits',
  method: 'GET',
  render: function (req, res) {
    var response = {
      "success": true,
      "data": true
    }


    res.status(200).send(response);
  }


};

module.exports = [groupContainsOrganizationalUnits];
