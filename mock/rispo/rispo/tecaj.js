var tecaj = {
  path: '/rispo/tecaj',
  method: 'POST',
  render: function (req, res) {


    var response = {
      "success": true,
      "data": {
        "ok": true,
        "poruka": null,
        "tecajnaLista": {
          "brListe": "001",
          "brojPodbroj": "1",
          "datum": 826930800000,
          "datumDo": null,
          "datumKreiranja": 826930800000,
          "disclaimer": "Tečajna lista vrijedi do iznosa od 200.000 kn. Za iznose veće od 200.000 kn molimo obratite se svom bankaru ili najbližoj poslovnici. Zagrebačka banka d.d. ovlaštena je u svakom trenutku promijeniti ovu tečajnu listu i/ili obustaviti trgovanje bilo kojom valutom s ove tečajne liste.",
          "dozvoljenoTrgovanje": true,
          "hrvNaziv": "KUNA                          ",
          "kupDev": 1.00000000,
          "kupEf": 1.00000000,
          "numOznDevize": "191",
          "oznBurze": "001",
          "oznDevize": "HRK",
          "paritetT": "001",
          "porukaZabraneTrgovanja": null,
          "prodDev": 1.00000000,
          "prodEf": 1.00000000,
          "sred": 1.00000000,
          "status": null,
          "class": "hr.zaba.rispo.generated.tecaj.deviza.client.model.TecajnaLista"
        },
        "class": "hr.zaba.rispo.generated.tecaj.deviza.client.model.Izlaz1"
      }
    }
    res.status(200).send(response);
  }
};

module.exports = [tecaj];
