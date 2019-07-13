var izlozenostSuma = {
  path: '/rispo/izlozenostSuma',
  method: 'GET',
  render: function (req, res) {


    var response = {
      "success": true, "data": {
        "authorityLevelBankAustria": {
          "balance": 0,
          "change": 0,
          "previous": 0,
          "proposed": 0,
          "class": "hr.zaba.rispo.generated.rispo.ws.client.model.RispoIzlozenostSumaIznos"
        },
        "authorityLevelIUniCreditGroupTotal": {
          "balance": 0,
          "change": 0,
          "previous": 0,
          "proposed": 0,
          "class": "hr.zaba.rispo.generated.rispo.ws.client.model.RispoIzlozenostSumaIznos"
        },
        "authorityLevelUniCreditGroupTotal": {
          "balance": 0,
          "change": 0,
          "previous": 0,
          "proposed": 0,
          "class": "hr.zaba.rispo.generated.rispo.ws.client.model.RispoIzlozenostSumaIznos"
        },
        "cashGreater1Year": {
          "balance": 0,
          "change": 0,
          "previous": 0,
          "proposed": 0,
          "class": "hr.zaba.rispo.generated.rispo.ws.client.model.RispoIzlozenostSumaIznos"
        },
        "cashLess1Year": {
          "balance": 0,
          "change": 0,
          "previous": 0,
          "proposed": 0,
          "class": "hr.zaba.rispo.generated.rispo.ws.client.model.RispoIzlozenostSumaIznos"
        },
        "creditLines": {
          "balance": 0,
          "change": 0,
          "previous": 0,
          "proposed": 0,
          "class": "hr.zaba.rispo.generated.rispo.ws.client.model.RispoIzlozenostSumaIznos"
        },
        "creditRisk": {
          "balance": 0,
          "change": 0,
          "previous": 0,
          "proposed": 0,
          "class": "hr.zaba.rispo.generated.rispo.ws.client.model.RispoIzlozenostSumaIznos"
        },
        "equityAndBondTradingLimits": {
          "balance": 0,
          "change": 0,
          "previous": 0,
          "proposed": 0,
          "class": "hr.zaba.rispo.generated.rispo.ws.client.model.RispoIzlozenostSumaIznos"
        },
        "error": false,
        "errorMsg": null,
        "fiduciaryLoansForLargeExposures": {
          "balance": 0,
          "change": 0,
          "previous": 0,
          "proposed": 0,
          "class": "hr.zaba.rispo.generated.rispo.ws.client.model.RispoIzlozenostSumaIznos"
        },
        "guarantees": {
          "balance": 0,
          "change": 0,
          "previous": 0,
          "proposed": 0,
          "class": "hr.zaba.rispo.generated.rispo.ws.client.model.RispoIzlozenostSumaIznos"
        },
        "issuerRisk": {
          "balance": 0,
          "change": 0,
          "previous": 0,
          "proposed": 0,
          "class": "hr.zaba.rispo.generated.rispo.ws.client.model.RispoIzlozenostSumaIznos"
        },
        "issuerRiskAndDerivates": {
          "balance": 0,
          "change": 0,
          "previous": 0,
          "proposed": 0,
          "class": "hr.zaba.rispo.generated.rispo.ws.client.model.RispoIzlozenostSumaIznos"
        },
        "permanentHoldings": {
          "balance": 0,
          "change": 0,
          "previous": 0,
          "proposed": 0,
          "class": "hr.zaba.rispo.generated.rispo.ws.client.model.RispoIzlozenostSumaIznos"
        },
        "preSettlement": {
          "balance": 0,
          "change": 0,
          "previous": 0,
          "proposed": 0,
          "class": "hr.zaba.rispo.generated.rispo.ws.client.model.RispoIzlozenostSumaIznos"
        },
        "thereofCommited": {
          "balance": 0,
          "change": 0,
          "previous": 0,
          "proposed": 0,
          "class": "hr.zaba.rispo.generated.rispo.ws.client.model.RispoIzlozenostSumaIznos"
        },
        "thereofHedgedByCDS": {
          "balance": 0,
          "change": 0,
          "previous": 0,
          "proposed": 0,
          "class": "hr.zaba.rispo.generated.rispo.ws.client.model.RispoIzlozenostSumaIznos"
        },
        "thereofHedgedByCDSII": {
          "balance": 0,
          "change": 0,
          "previous": 0,
          "proposed": 0,
          "class": "hr.zaba.rispo.generated.rispo.ws.client.model.RispoIzlozenostSumaIznos"
        },
        "thereofUnsecuredPortion": {
          "balance": 0,
          "change": 0,
          "previous": 0,
          "proposed": 0,
          "class": "hr.zaba.rispo.generated.rispo.ws.client.model.RispoIzlozenostSumaIznos"
        },
        "thereofUnsecuredPortionBankAustria": {
          "balance": 0,
          "change": 0,
          "previous": 0,
          "proposed": 0,
          "class": "hr.zaba.rispo.generated.rispo.ws.client.model.RispoIzlozenostSumaIznos"
        },
        "thereofUnsecuredPortionII": {
          "balance": 0,
          "change": 0,
          "previous": 0,
          "proposed": 0,
          "class": "hr.zaba.rispo.generated.rispo.ws.client.model.RispoIzlozenostSumaIznos"
        },
        "class": "hr.zaba.rispo.generated.rispo.ws.client.model.RispoIzlozenostSuma"
      }
    }
    res.status(200).send(response);
  }
};

module.exports = [izlozenostSuma];
