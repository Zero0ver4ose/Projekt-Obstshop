"use strict";
let bestand5 = [
    {
        name: 'Mango',
        anzahlkisten: 2,
        stkProKiste: 12,
        preisProStk: 1.10,
        anzStkVerkauf: 0,
        verluste: 0,
    },
    {
        name: 'Banane',
        anzahlkisten: 3,
        stkProKiste: 30,
        preisProStk: 0.70,
        anzStkVerkauf: 0,
        verluste: 0,
    },
    {
        name: 'Birne',
        anzahlkisten: 2,
        stkProKiste: 10,
        preisProStk: 1.40,
        anzStkVerkauf: 0,
        verluste: 0,
    },
    {
        name: 'Aprikose',
        anzahlkisten: 4,
        stkProKiste: 40,
        preisProStk: 0.30,
        anzStkVerkauf: 0,
        verluste: 0,
    },
    {
        name: 'Apfel',
        anzahlkisten: 3,
        stkProKiste: 12,
        preisProStk: 0.90,
        anzStkVerkauf: 0,
        verluste: 0,
    },
];
function bestand12() {
    let liste = document.getElementById("p");
    if ((liste === null || liste === void 0 ? void 0 : liste.innerHTML) != '') {
        liste.innerHTML = '';
    }
    for (let i in bestand5) {
        liste = document.getElementById("p");
        let bestandaktuell = bestand5[i].name + ' = Menge an Kisten: ' + bestand5[i].anzahlkisten + ', Stückzahl in Kisten: ' + bestand5[i].stkProKiste + ', Preis/Stück: '
            + bestand5[i].preisProStk + ' Einkaufspreis: ' + Math.ceil((bestand5[i].anzahlkisten * bestand5[i].stkProKiste) * bestand5[i].preisProStk) + '€' + '<br>';
        if (liste != undefined) {
            liste.innerHTML += bestandaktuell;
        }
    }
}
function leer() {
    let liste = document.getElementById("p");
    if ((liste === null || liste === void 0 ? void 0 : liste.innerHTML) != '') {
        liste.innerHTML = '';
    }
}
function ichmoechteetwaskaufen() {
    let liste = document.getElementById("p");
    let bestandaktuell = "";
    if ((liste === null || liste === void 0 ? void 0 : liste.innerHTML) != '') {
        liste.innerHTML = '';
    }
    for (let i in bestand5) {
        bestandaktuell += bestand5[i].name + ', Preis/Stück: ' +
            +bestand5[i].preisProStk + '€ ' + ' Anzahl: ' + (bestand5[i].stkProKiste * bestand5[i].anzahlkisten) + '<br>';
    }
    liste.innerHTML = bestandaktuell;
}
// Global get Element //
let mango_p1 = document.getElementById("warenkorb");
let warenkorbEK = [];
/////////////////////////
function warenkorbErstellen() {
    let anzMango = parseFloat(document.getElementById("auswahlMango").value);
    let anzBirne = parseFloat(document.getElementById("anzbirne").value);
    let anzBanane = parseFloat(document.getElementById("anzBanane").value);
    let anzApfel = parseFloat(document.getElementById("anzApfel").value);
    let anzAprikose = parseFloat(document.getElementById("anzAprikose").value);
    let anzStueckKistenIns = 0;
    let ergtxt = '';
    let auswahl = [];
    let containerBezahlen = document.getElementById("containerBezahlen");
    containerBezahlen === null || containerBezahlen === void 0 ? void 0 : containerBezahlen.replaceChildren();
    auswahl.push({ name: 'Mango', anzahl: anzMango });
    auswahl.push({ name: 'Birne', anzahl: anzBirne });
    auswahl.push({ name: 'Banane', anzahl: anzBanane });
    auswahl.push({ name: 'Apfel', anzahl: anzApfel });
    auswahl.push({ name: 'Aprikose', anzahl: anzAprikose });
    // Container vorhanden Por Objekt [{name: obstname , anzahl: 123}] 
    // if (anzMango > anzStueckKistenIns) warenkorbEK.push({name: 'Mango', anzahl: anzMango})
    // if (anzBirne > anzStueckKistenIns) warenkorbEK.push({name: 'Birne', anzahl: anzBirne})
    // if (anzBanane > anzStueckKistenIns) warenkorbEK.push({name: 'Banane', anzahl: anzBanane})
    // if (anzApfel > anzStueckKistenIns) warenkorbEK.push({name: 'Apfel', anzahl: anzApfel})
    // if (anzAprikose > anzStueckKistenIns) warenkorbEK.push({name: 'Aprikose', anzahl: anzAprikose})
    for (let i in bestand5) {
        for (let k in auswahl) {
            if (bestand5[i].name == auswahl[k].name) {
                let obstanzahl = (bestand5[i].anzahlkisten * bestand5[i].stkProKiste);
                if (auswahl[k].anzahl <= obstanzahl) {
                    ergtxt += '' + auswahl[k].name + ': ' + auswahl[k].anzahl + '<br>';
                    warenkorbEK.push({ name: bestand5[i].name, anzahl: auswahl[k].anzahl });
                }
                else {
                    let fehlerMeldung = document.createElement("p");
                    fehlerMeldung.innerHTML = "Ich habe nur: " + obstanzahl + " " + auswahl[i].name;
                    containerBezahlen === null || containerBezahlen === void 0 ? void 0 : containerBezahlen.appendChild(fehlerMeldung);
                }
            }
        }
    }
    console.log(warenkorbEK);
    // let ergtxt = ''
    // for (let i in warenkorbEK) {
    //     let name = warenkorbEK[i].name
    //     let anzahl = warenkorbEK[i].anzahl
    //     ergtxt += '' + name + ': ' + anzahl + '<br>'
    // }
    mango_p1.innerHTML = ergtxt;
}
function bezahlBetrag() {
    let endSumme = document.getElementById('summeEK');
    let summeEK = 0;
    for (let i in bestand5) {
        for (let k in warenkorbEK) {
            if (bestand5[i].name == warenkorbEK[k].name) {
                summeEK += (bestand5[i].preisProStk * warenkorbEK[k].anzahl);
            }
        }
    }
    endSumme.innerHTML = '' + summeEK.toFixed(2) + '€';
    updateBestandBeimBezahlen();
}
function updateBestandBeimBezahlen() {
    let anzStueckKistenIns = 0;
    for (let i in bestand5) {
        for (let k in warenkorbEK) {
            if (bestand5[i].name == warenkorbEK[k].name) {
                anzStueckKistenIns = (bestand5[i].stkProKiste * bestand5[i].anzahlkisten);
                if (anzStueckKistenIns >= warenkorbEK[k].anzahl) {
                    anzStueckKistenIns -= warenkorbEK[k].anzahl;
                    bestand5[i].anzahlkisten = (anzStueckKistenIns / bestand5[i].stkProKiste);
                    bestand5[i].anzStkVerkauf += warenkorbEK[k].anzahl;
                }
            }
        }
    }
}
// function warenkorbErstellen() {
//     warenkorbEK = []
//     let anzMango:number = parseFloat((document.getElementById("anzMango") as HTMLInputElement).value)
//     let anzBirne:number = parseFloat((document.getElementById("anzbirne") as HTMLInputElement).value)
//     let anzBanane:number = parseFloat((document.getElementById("anzBanane") as HTMLInputElement).value)
//     let anzApfel:number = parseFloat((document.getElementById("anzApfel") as HTMLInputElement).value)
//     let anzAprikose:number = parseFloat((document.getElementById("anzAprikose") as HTMLInputElement).value)
//     warenkorbEK.push({name: 'Mango', anzahl: anzMango})
//     warenkorbEK.push({name: 'Birne', anzahl: anzBirne})
//     warenkorbEK.push({name: 'Banane', anzahl: anzBanane})
//     warenkorbEK.push({name: 'Apfel', anzahl: anzApfel})
//     warenkorbEK.push({name: 'Aprikose', anzahl: anzAprikose})
//     let ergtxt = ''
//     let anzStueckKistenIns = 0
//     for (let i in bestand5) {
//         for (let k in warenkorbEK){
//             if (bestand5[i].name == warenkorbEK[k].name) {
//                 anzStueckKistenIns = (bestand5[i].stkProKiste * bestand5[i].anzahlkisten)
//                 if (anzMango <= anzStueckKistenIns|| anzApfel <= anzStueckKistenIns || anzBanane <= anzStueckKistenIns
//                     || anzBirne <= anzStueckKistenIns || anzAprikose <= anzStueckKistenIns){
//                         for (let i in warenkorbEK) {
//                             let name = warenkorbEK[i].name
//                             let anzahl = warenkorbEK[i].anzahl
//                             ergtxt += '' + name + ': ' + anzahl + '<br>'
//                         }
//                 }
//                 else {
//                     let fehlerMeldung:HTMLElement = document.createElement("p")
//                     fehlerMeldung.innerHTML = "Ich habe nur: " + anzStueckKistenIns + " " + bestand5[i].name
//                     document.getElementById("containerBezahlen")?.appendChild(fehlerMeldung)
//                 }
//             }
//         }
//     }               
//     mango_p1!.innerHTML = ergtxt
// }
// function ausverkauft(){
//     let anzStueckKistenIns = 0
//     anzStueckKistenIns = bestand5[i].stkProKiste * bestand5[i].anzahlkisten
//             }
//             if (anzStueckKistenIns < 0) {
//             }
// }
// function mangoAktuelleKosten() {
//     let anzahl:number = parseFloat((document.getElementById("anzMango") as HTMLInputElement).value)
//     let preis_ek:number = 0
//     for (let i in bestand5){
//         if (bestand5[i].name == 'Mango') {
//             preis_ek = (bestand5[i].preisProStk * anzahl);
//         }
//     } 
//     mango_p1 = document.getElementById("p1")
//     let ergtxt = '' + preis_ek.toFixed(2)
//     mango_p1!.innerHTML = ergtxt
// }
// function Apfel() {
//     let apfel_summe = document.getElementById("p2")
//     let zahl:number = parseFloat((document.getElementById("zahl1") as HTMLInputElement).value)
//     let warenkorb = ""
//     for (let i in bestand5){
//         if (bestand5[i].name == 'Apfel') {
//         warenkorb += (bestand5[i].preisProStk * zahl).toFixed(2);
//         }
//     } 
//     apfel_summe!.innerHTML = warenkorb
// }
// function Banane() {
//     let banane_summe = document.getElementById("p3")
//     let zahl:number = parseFloat((document.getElementById("zahl2") as HTMLInputElement).value)
//     let warenkorb = ""
//     for (let i in bestand5){
//         if (bestand5[i].name == 'Banane') {
//         warenkorb += (bestand5[i].preisProStk * zahl).toFixed(2);
//         }
//     } 
//     banane_summe!.innerHTML = warenkorb
// }
// function Aprikose() {
//     let aprikose_summe = document.getElementById("p4")
//     let zahl:number = parseFloat((document.getElementById("zahl3") as HTMLInputElement).value)
//     let warenkorb = ""
//     for (let i in bestand5){
//         if (bestand5[i].name == 'Aprikose') {
//         warenkorb += (bestand5[i].preisProStk * zahl).toFixed(2);
//         }
//     } 
//     aprikose_summe!.innerHTML = warenkorb
// }
// function Birne() {
//     let birne_summe = document.getElementById("p5")
//     let zahl:number = parseFloat((document.getElementById("zahl4") as HTMLInputElement).value)
//     let warenkorb = ""
//     for (let i in bestand5){
//         if (bestand5[i].name == 'Birne') {
//         warenkorb += (bestand5[i].preisProStk * zahl).toFixed(2);
//         }
//     } 
//     birne_summe!.innerHTML = warenkorb
// };
