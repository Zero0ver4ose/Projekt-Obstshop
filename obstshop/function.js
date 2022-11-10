"use strict";
//bestandsliste
let bestand2 = [
    {
        name: 'Mango',
        anzahlkisten: 2,
        stkProKiste: 12,
        preiProStk: 1.10,
        anzStkVerkauf: 0,
        verluste: 0,
    },
    {
        name: 'Banane',
        anzahlkisten: 3,
        stkProKiste: 30,
        preiProStk: 0.70,
        anzStkVerkauf: 0,
        verluste: 0,
    },
    {
        name: 'Birne',
        anzahlkisten: 2,
        stkProKiste: 10,
        preiProStk: 1.40,
        anzStkVerkauf: 0,
        verluste: 0,
    },
    {
        name: 'Aprikose',
        anzahlkisten: 4,
        stkProKiste: 40,
        preiProStk: 0.30,
        anzStkVerkauf: 0,
        verluste: 0,
    },
    {
        name: 'Apfel',
        anzahlkisten: 3,
        stkProKiste: 12,
        preiProStk: 0.90,
        anzStkVerkauf: 0,
        verluste: 0,
    },
];
//function Anzahl speichern 
function save_product() {
    let save = document.getElementById("birne").value;
    console.log("Anzahl ausgewählte Birnen: " + save);
}
function save_product_apfel() {
    let save = document.getElementById("apfel").value;
    console.log("Anzahl ausgewählte Birnen: " + save);
}
