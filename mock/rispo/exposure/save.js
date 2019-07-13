var save = {
  path: '/exposure/save',
  method: 'POST',
  render: function (req, res) {
    var response = {
      "success": true, "data": {
        "id": 91129,
        "brojPartije": null,
        "brojUgovora": null,
        "brojLimita": null,
        "brojOkvira": null,
        "balanceHrk": 0,
        "balanceEur": 0,
        "changeHrk": 0,
        "changeEur": 0,
        "collaterals": [],
        "commited": false,
        "interestRate": null,
        "intRate": null,
        "fees": null,
        "lessThanYear": false,
        "plasmanType": {
          "id": 63,
          "name": "issuer risk",
          "type": "TYPE",
          "class": "hr.zaba.rispo.core.model.CodebookEntry"
        },
        "previousHrk": 0,
        "previousEur": 0,
        "proposedHrk": 0,
        "proposedEur": 0,
        "riskClass": {
          "id": 51,
          "name": "ST Commercial Guarantees",
          "type": "RISK_CLASS",
          "class": "hr.zaba.rispo.core.model.CodebookEntry"
        },
        "securedBalanceHrk": 0,
        "securedBalanceEur": 0,
        "securedPreviousHrk": 0,
        "securedPreviousEur": 0,
        "securedProposedHrk": 0,
        "securedProposedEur": 0,
        "source": "MI",
        "spread": 0,
        "taker": {
          "id": 35,
          "name": "HR/ Zagrebacka banka d.d.",
          "type": "TAKER",
          "class": "hr.zaba.rispo.core.model.CodebookEntry"
        },
        "tenor": "12.10.2019",
        "typeOfCredit": "neka",
        "selected": false,
        "isNew": true,
        "clientId": 192715,
        "owner": null,
        "grouped": false,
        "groupedExposureId": null,
        "groupedClientId": null,
        "tip": 99,
        "newChange": 0,
        "newBalance": 0,
        "newPrevious": 0,
        "newProposed": 0,
        "newSecuredBalance": 0,
        "newSecuredPrevious": 0,
        "newSecuredProposed": 0,
        "tenorLaterThanToday": true,
        "conditions": "0",
        "lessThanYearAsString": "N",
        "displayed": true,
        "anyPlacementChangedHrk": false,
        "anyPlacementChangedEur": false,
        "tenorDate": 1570831200000,
        "class": "hr.zaba.ewm.rispo.model.exposure.Exposure"
      }
    }
    res.status(200).send(response);
  }
};

module.exports = [save];
