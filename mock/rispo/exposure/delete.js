var deleteExp = {
  path: '/exposure/delete',
  method: 'POST',
  render: function (req, res) {
    var response = {
      "success": true, "data": {
        "id": 90727,
        "brojPartije": "5701406918",
        "brojUgovora": "3255593246",
        "brojLimita": "0300019556",
        "brojOkvira": null,
        "balanceHrk": 3769000,
        "balanceEur": 507515.7166,
        "changeHrk": 0,
        "changeEur": 0,
        "collaterals": [{
          "id": 55815,
          "name": "COMMERCIAL RE",
          "valueHrk": 3722022.29,
          "valueEur": 501189.9204,
          "exposureId": 90727,
          "class": "hr.zaba.ewm.rispo.model.exposure.Collateral"
        }],
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
        "previousHrk": 3769000,
        "previousEur": 507515.7166,
        "proposedHrk": 3769000,
        "proposedEur": 507515.7166,
        "riskClass": null,
        "securedBalanceHrk": 3722022.29,
        "securedBalanceEur": 501189.9204,
        "securedPreviousHrk": 3722022.29,
        "securedPreviousEur": 501189.9204,
        "securedProposedHrk": 3722022.29,
        "securedProposedEur": 501189.9204,
        "source": "KRE",
        "spread": 3.7,
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
        "conditions": "3M TZ + 3,50 = 3,70%; 3.7",
        "lessThanYearAsString": "-",
        "displayed": true,
        "anyPlacementChangedHrk": true,
        "anyPlacementChangedEur": true,
        "tenorDate": 1562493932266,
        "class": "hr.zaba.ewm.rispo.model.exposure.Exposure"
      }
    }
    res.status(200).send(response);
  }
};

module.exports = [deleteExp];
