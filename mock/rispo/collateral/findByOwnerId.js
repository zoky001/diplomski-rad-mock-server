var _ = require('lodash'),
  faker = require("faker");

var findByOwnerId = {
  path: '/collateral/findByOwnerId',
  method: 'GET',
  render: function (req, res) {

    var response = '';
    if (faker.random.number(10) > 5) {
      response = {
        "success": true,
        "data": [{
          "id": 55815,
          "name": "COMMERCIAL RE",
          "valueHrk": 3722022.2900,
          "valueEur": 501189.9204,
          "exposureId": 90727,
          "class": "hr.zaba.ewm.rispo.model.exposure.Collateral"
        }]
      }
    } else {
      response = {
        "success": true, "data": []
      }

    }


    res.status(200).send(response);
  }
};

module.exports = [findByOwnerId];
