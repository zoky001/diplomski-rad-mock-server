var findOne = {
  path: '/group/findOne',
  method: 'GET',
  render: function (req, res) {
    var response = {
      "success": true, "data": {
        "id": 6296,
        "name": "RADINPRINT (221) Grupa",
        "kpo": "221KPO",
        "mb": null,
        "jmbg": null,
        "oib": null,
        "application": "RISPO",
        "status": "IN_PROGRESS",
        "progress": 100.0,
        "reportDate": 1560722400000,
        "owner": "F514604",
        "members": null,
        "total": {
          "id": null,
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
          "plasmanType": null,
          "previousHrk": 0,
          "previousEur": 0,
          "proposedHrk": 0,
          "proposedEur": 0,
          "riskClass": null,
          "securedBalanceHrk": 0,
          "securedBalanceEur": 0,
          "securedPreviousHrk": 0,
          "securedPreviousEur": 0,
          "securedProposedHrk": 0,
          "securedProposedEur": 0,
          "source": "MI",
          "spread": 0,
          "taker": null,
          "tenor": null,
          "typeOfCredit": null,
          "selected": false,
          "isNew": false,
          "clientId": null,
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
          "lessThanYearAsString": "-",
          "displayed": true,
          "anyPlacementChangedHrk": false,
          "anyPlacementChangedEur": false,
          "tenorDate": 1562407157274,
          "class": "hr.zaba.ewm.rispo.model.exposure.Exposure"
        },
        "creationDate": 1560758029000,
        "currency": "HRK",
        "djelomicanDohvat": true,
        "dohvatPoPostojecimClanicama": false,
        "orgJed": "01021600  ",
        "intRateHRK": 0,
        "intRateEUR": 0,
        "feesHRK": 0,
        "feesEUR": 0,
        "creationDateAsString": "17.06.2019. 09:53",
        "reportDateAsString": "17.06.2019.",
        "exposureView": "-",
        "exposureViewForEditView": "Dohvat po povijesnim �lanicama grupe",
        "locked": false,
        "class": "hr.zaba.ewm.rispo.model.group.Group"
      }
    }
    res.status(200).send(response);
  }
};

module.exports = [findOne];