var loadEntries = {
  path: '/placementType/loadEntries',
  method: 'GET',
  render: function (req, res) {
    var response = {
      "success": true,
      "data": [
        {
          "id": 19,
          "aplikacija": "AKR",
          "oznakaLimita": null,
          "sifraNamjene": null,
          "tip": "guarantees",
          "class": "hr.zaba.rispo.placement.model.PlasmanTypeEntry"
        },
        {
          "id": 9,
          "aplikacija": "DOCCS",
          "oznakaLimita": null,
          "sifraNamjene": null,
          "tip": "guarantees",
          "class": "hr.zaba.rispo.placement.model.PlasmanTypeEntry"
        },
        {
          "id": 20,
          "aplikacija": "DPG",
          "oznakaLimita": null,
          "sifraNamjene": null,
          "tip": "cash",
          "class": "hr.zaba.rispo.placement.model.PlasmanTypeEntry"
        },
        {
          "id": 2,
          "aplikacija": "DPP",
          "oznakaLimita": null,
          "sifraNamjene": null,
          "tip": "cash",
          "class": "hr.zaba.rispo.placement.model.PlasmanTypeEntry"
        },
        {
          "id": 3,
          "aplikacija": "ESM",
          "oznakaLimita": null,
          "sifraNamjene": null,
          "tip": "cash",
          "class": "hr.zaba.rispo.placement.model.PlasmanTypeEntry"
        },
        {
          "id": 8,
          "aplikacija": "GAR",
          "oznakaLimita": null,
          "sifraNamjene": null,
          "tip": "guarantees",
          "class": "hr.zaba.rispo.placement.model.PlasmanTypeEntry"
        },
        {
          "id": 1,
          "aplikacija": "KRE",
          "oznakaLimita": null,
          "sifraNamjene": null,
          "tip": "cash",
          "class": "hr.zaba.rispo.placement.model.PlasmanTypeEntry"
        },
        {
          "id": 4,
          "aplikacija": "LIMOK",
          "oznakaLimita": null,
          "sifraNamjene": "L13",
          "tip": "cash",
          "class": "hr.zaba.rispo.placement.model.PlasmanTypeEntry"
        },
        {
          "id": 18,
          "aplikacija": "LIMOK",
          "oznakaLimita": null,
          "sifraNamjene": "L26",
          "tip": "cash",
          "class": "hr.zaba.rispo.placement.model.PlasmanTypeEntry"
        },
        {
          "id": 15,
          "aplikacija": "LIMOK",
          "oznakaLimita": null,
          "sifraNamjene": "L12",
          "tip": "presettlement/IFX/IRS other derivatives",
          "class": "hr.zaba.rispo.placement.model.PlasmanTypeEntry"
        },
        {
          "id": 14,
          "aplikacija": "LIMOK",
          "oznakaLimita": null,
          "sifraNamjene": null,
          "tip": "Plafond/IK-Line",
          "class": "hr.zaba.rispo.placement.model.PlasmanTypeEntry"
        },
        {
          "id": 13,
          "aplikacija": "LIMOK",
          "oznakaLimita": null,
          "sifraNamjene": "L10",
          "tip": "guarantees",
          "class": "hr.zaba.rispo.placement.model.PlasmanTypeEntry"
        },
        {
          "id": 7,
          "aplikacija": "LIMOK",
          "oznakaLimita": null,
          "sifraNamjene": "Z00",
          "tip": "cash",
          "class": "hr.zaba.rispo.placement.model.PlasmanTypeEntry"
        },
        {
          "id": 12,
          "aplikacija": "LIMOK",
          "oznakaLimita": null,
          "sifraNamjene": "L9",
          "tip": "guarantees",
          "class": "hr.zaba.rispo.placement.model.PlasmanTypeEntry"
        },
        {
          "id": 11,
          "aplikacija": "LIMOK",
          "oznakaLimita": null,
          "sifraNamjene": "L07",
          "tip": "guarantees",
          "class": "hr.zaba.rispo.placement.model.PlasmanTypeEntry"
        },
        {
          "id": 6,
          "aplikacija": "LIMOK",
          "oznakaLimita": null,
          "sifraNamjene": "L8",
          "tip": "cash",
          "class": "hr.zaba.rispo.placement.model.PlasmanTypeEntry"
        },
        {
          "id": 5,
          "aplikacija": "LIMOK",
          "oznakaLimita": null,
          "sifraNamjene": "L11",
          "tip": "cash",
          "class": "hr.zaba.rispo.placement.model.PlasmanTypeEntry"
        },
        {
          "id": 16,
          "aplikacija": "OPICS",
          "oznakaLimita": null,
          "sifraNamjene": "VP",
          "tip": "issuer risk",
          "class": "hr.zaba.rispo.placement.model.PlasmanTypeEntry"
        },
        {
          "id": 22,
          "aplikacija": "OPICS",
          "oznakaLimita": null,
          "sifraNamjene": "DERIV",
          "tip": "presettlement/IFX/IRS other derivatives",
          "class": "hr.zaba.rispo.placement.model.PlasmanTypeEntry"
        },
        {
          "id": 21,
          "aplikacija": "UCLC",
          "oznakaLimita": null,
          "sifraNamjene": null,
          "tip": "cash",
          "class": "hr.zaba.rispo.placement.model.PlasmanTypeEntry"
        }
      ]
    }
    res.status(200).send(response);
  }
};

module.exports = [loadEntries];
