var _ = require('lodash'),
  faker = require("faker");

var findByOwnerId = {
  path: '/exposure/findByOwnerId',
  method: 'GET',
  render: function (req, res) {

    var response = '';
    if (faker.random.number(10) > 5) {
      response = {
        "success": true, "data": [{
          "id": 90726,
          "brojPartije": "5100406323",
          "brojUgovora": "3246722164",
          "brojLimita": null,
          "brojOkvira": null,
          "balanceHrk": 20174015.2300,
          "balanceEur": 2716537.4892,
          "changeHrk": 0.0000,
          "changeEur": 0.0000,
          "collaterals": null,
          "commited": true,
          "interestRate": {
            "name": "ER",
            "description": "EURIBOR",
            "class": "hr.zaba.ewm.rispo.model.exposure.InterestRateReference"
          },
          "intRate": "3M ER + 3,90 = 3,90%",
          "fees": "",
          "lessThanYear": false,
          "plasmanType": {"id": 61, "name": "cash", "type": "TYPE", "class": "hr.zaba.rispo.core.model.CodebookEntry"},
          "previousHrk": 20174015.2300,
          "previousEur": 2716537.4892,
          "proposedHrk": 20174015.2300,
          "proposedEur": 2716537.4892,
          "riskClass": null,
          "securedBalanceHrk": 20174015.2300,
          "securedBalanceEur": 2716537.4892,
          "securedPreviousHrk": 20174015.2300,
          "securedPreviousEur": 2716537.4892,
          "securedProposedHrk": 20174015.2300,
          "securedProposedEur": 2716537.4892,
          "source": "KRE",
          "spread": 3.90,
          "taker": {
            "id": 35,
            "name": "HR/ Zagrebacka banka d.d.",
            "type": "TAKER",
            "class": "hr.zaba.rispo.core.model.CodebookEntry"
          },
          "tenor": "31.12.2022",
          "typeOfCredit": "EUR 3.622,1T LTL CC",
          "selected": false,
          "isNew": false,
          "clientId": 199221,
          "owner": null,
          "grouped": false,
          "groupedExposureId": null,
          "groupedClientId": null,
          "tip": 2,
          "newChange": 0,
          "newBalance": 0,
          "newPrevious": 0,
          "newProposed": 0,
          "newSecuredBalance": 0,
          "newSecuredPrevious": 0,
          "newSecuredProposed": 0,
          "tenorLaterThanToday": true,
          "conditions": "3M ER + 3,90 = 3,90%; 3.90",
          "lessThanYearAsString": "N",
          "displayed": true,
          "anyPlacementChangedHrk": true,
          "anyPlacementChangedEur": true,
          "tenorDate": 1672441200000,
          "class": "hr.zaba.ewm.rispo.model.exposure.Exposure"
        }, {
          "id": 90727,
          "brojPartije": "5701406918",
          "brojUgovora": "3255593246",
          "brojLimita": "0300019556",
          "brojOkvira": null,
          "balanceHrk": 3769000.0000,
          "balanceEur": 507515.7166,
          "changeHrk": 0.0000,
          "changeEur": 0.0000,
          "collaterals": null,
          "commited": true,
          "interestRate": {
            "name": "TZ",
            "description": "MF'S TREASURY BILLS",
            "class": "hr.zaba.ewm.rispo.model.exposure.InterestRateReference"
          },
          "intRate": "3M TZ + 3,50 = 3,70%",
          "fees": "",
          "lessThanYear": false,
          "plasmanType": {"id": 61, "name": "cash", "type": "TYPE", "class": "hr.zaba.rispo.core.model.CodebookEntry"},
          "previousHrk": 3769000.0000,
          "previousEur": 507515.7166,
          "proposedHrk": 3769000.0000,
          "proposedEur": 507515.7166,
          "riskClass": null,
          "securedBalanceHrk": 3722022.2900,
          "securedBalanceEur": 501189.9204,
          "securedPreviousHrk": 3722022.2900,
          "securedPreviousEur": 501189.9204,
          "securedProposedHrk": 3722022.2900,
          "securedProposedEur": 501189.9204,
          "source": "KRE",
          "spread": 3.70,
          "taker": {
            "id": 35,
            "name": "HR/ Zagrebacka banka d.d.",
            "type": "TAKER",
            "class": "hr.zaba.rispo.core.model.CodebookEntry"
          },
          "tenor": null,
          "typeOfCredit": "HRK 3.769,0T STL (out of MPL)",
          "selected": false,
          "isNew": false,
          "clientId": 199221,
          "owner": null,
          "grouped": false,
          "groupedExposureId": null,
          "groupedClientId": null,
          "tip": 2,
          "newChange": 0,
          "newBalance": 0,
          "newPrevious": 0,
          "newProposed": 0,
          "newSecuredBalance": 0,
          "newSecuredPrevious": 0,
          "newSecuredProposed": 0,
          "tenorLaterThanToday": true,
          "conditions": "3M TZ + 3,50 = 3,70%; 3.70",
          "lessThanYearAsString": "-",
          "displayed": true,
          "anyPlacementChangedHrk": true,
          "anyPlacementChangedEur": true,
          "tenorDate": 1560757482688,
          "class": "hr.zaba.ewm.rispo.model.exposure.Exposure"
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
