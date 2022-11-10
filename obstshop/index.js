"use strict";
// 202211021525 Minh-Phi
// Mein kleiner mini Obstshop
//Datenstruktur des Obstshop
//Aufgabe: Erstellen Sie ein Javascript Programm, das: 
////////////////////////////////    - dem Besitzer erlaubt seinen Bestand abzufragen. 
////////////////////////////////    - Obstliste.| Anzahö Kisten pro Obstsorte. | Anzahl der Obststücke pro Sorte Obst
////////////////////////////////    - Obst Verkauf (Eingabe1 Auswahl welches Obst) (Eingabe2 Auswahl Stückzahl) (Eingabe3 Weiter oder nicht
////////////////////////////////    - Besitzer ermittelt seinen: Umsatz | Gewinn (Selbst entscheidend)
////////////////////////////////    - Besitzer schließt Obstladen: Ausgabe verkauftes Obst/Stück | Umsatz gesamt / Gewinn gesamt 
let bestand = [
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
///////// DER SHOP /////////
let warenkorb = [];
bestand1(bestand);
let x = Obstshopöffnen();
// ladenschluss = 0
// while(ladenschluss < 19){
//     ladenschluss += math.random
if (x == 0) {
    // abfrage 18:00Uhr wenn ja geschloßen ansonsten weiter
    let a = Kundenservice();
    if (a == 0) {
        let b = 0;
        while (b == 0) {
            produkteAnbieten(bestand);
            let objektProdukt = auswahlDesProdukts(bestand); //Wir bekommen ein Objekt aus bestand zurueck
            let stueckzahl = anzahlStueck(objektProdukt); // Wir geben ein Objekt hinein und bekommen eine validierte gewuenschte Stückzahl zurueck
            warenkorb = updateWarenkorb(bestand, objektProdukt, stueckzahl);
            b = weiterEinkaufen();
            // warenkorbDartsellen()
        }
        console.log('Mitarbeiter: Wir haben nun im');
        warenkorbDartsellen();
        console.log('Mitarbeiter: Bitte Zahlen Sie ');
        bestandDarstellen(bestand);
    }
}
else {
    console.log('Ladenschluss!! Kassenbestand abrechnen ');
    bestandDarstellen(bestand);
    console.log('Der heutige Umsatz ');
}
/////#### Funktionen!!!!! ####////
function Umsatz() {
}
///// bestandsabfrage /////
function bestand1(bestand) {
    //     let save = (document.getElementById("birne") as HTMLInputElement).value;
    //     console.log("Anzahl ausgewählte Birnen: " + save)
    // }
    var bestandabfrage = require('prompt-sync')({ sigint: true });
    const bestandsabfrage = bestandabfrage('Mitarbeiter: Guten Tag Boss. Wollen Sie den heutigen Einkauf und sehen? Y/N: ');
    if (bestandsabfrage === 'Y') {
        for (let i in bestand) {
            let bestandaktuell = bestand[i].name + ' = Menge an Kisten: ' + bestand[i].anzahlkisten + ', Stückzahl in Kisten: ' + bestand[i].stkProKiste + ', Preis/Stück: '
                + bestand[i].preiProStk + ' Einkaufspreis: ' + Math.ceil((bestand[i].anzahlkisten * bestand[i].stkProKiste) * bestand[i].preiProStk) + '€';
            console.log(bestandaktuell);
        }
    }
    else {
        console.log('Mitarbeiter: OK Chef!');
    }
}
/////// Obshop Öffnungzeit und Öffnen oder Schließen //////
function Obstshopöffnen() {
    var obstshopöffnen = require('prompt-sync')({ sigint: true });
    const obstshopöffnenabfragen = obstshopöffnen('Mitarbeiter: Wir haben 8:00 Uhr. Wollen Sie den Laden öffnen? Y/N: ');
    if (obstshopöffnenabfragen === 'Y') {
        console.log('Mitarbeiter: OK Chef! Die Kunden warten schon an der Tür! Wir öffnen! ');
        console.log(' ( Kunde betritt den Laden, Mitarbeiter bedient )');
        return 0;
    }
    else {
        console.log('Mitarbeiter: Gut Chef! Wir bleiben geschloßen.');
        return 1;
    }
}
//////// Kunde betritt den Laden ///////
function Kundenservice() {
    var antwort = require('prompt-sync')({ sigint: true });
    const einkaufswunsch = antwort(' Mitarbeiter: Hallo! Guten Tag kann ich Ihnen behilflich sein? Y/N: ');
    if (einkaufswunsch === 'Y') {
        return 0;
    }
    else {
        console.log('Mitarbeiter: Gut! Dann rufen Sie mich wenn Sie meine Hilfe benötigen');
        return 1;
    }
}
////// Katalog Sortiment anzeigen /////
function produkteAnbieten(bestand) {
    console.log('Mitarbeiter: Das ist was wir heute zu Auswahl haben: ');
    for (let i in bestand) {
        console.log(bestand[i].name + ' = ' + (bestand[i].stkProKiste * bestand[i].anzahlkisten) + ' Stück =' + ' Stueckpreis ' + (bestand[i].preiProStk) + '€');
    }
}
////// Kunde nach Auswahl der Sorte anfragen /////
function auswahlDesProdukts(bestand) {
    var Verkauf = require('prompt-sync')({ sigint: true });
    const Eingabe = Verkauf('Welches Produkt darf es sein? ');
    for (let i in bestand) {
        if (Eingabe == bestand[i].name) {
            console.log(bestand[i].name + ' = ' + (bestand[i].stkProKiste * bestand[i].anzahlkisten) + ' Stück ' + ' jeweils' + (bestand[i].preiProStk) + ' € ' + 'Pro Stück');
            return bestand[i];
        }
    }
}
////// Wie viel von der Sorte möchte Sie haben ////////
function anzahlStueck(objektProdukt) {
    var Anzstueck = require('prompt-sync')({ sigint: true });
    const eingabe = Anzstueck('Wie viel von der Sorte ' + objektProdukt.name + ' wünschen Sie? ');
    if (eingabe <= (objektProdukt.stkProKiste * objektProdukt.anzahlkisten)) {
        console.log('Mitarbeiter: Sehr gerne! Das lege ich Ihnen in den Warenkorb');
        return eingabe;
    }
    else {
        console.log('Ausverkauft');
        return 1;
    }
}
// function anzahlStueck(objektProdukt) {
//     var Anzstueck = require('prompt-sync')({sigint:true});
//     const eingabe = Anzstueck('Wie viel von der Sorte ' + objektProdukt.name + ' wünschen Sie? ');
//         if (eingabe <= (objektProdukt.stkProKiste * objektProdukt.anzahlkisten)) {
//             console.log('Mitarbeiter: Sehr gerne! Das lege ich Ihnen in den Warenkorb')
//             return eingabe
//         } else {
//             console.log('Ausverkauft')
//         }
function weiterEinkaufen() {
    var weiterEinkaufen = require('prompt-sync')({ sigint: true });
    const eingabe = weiterEinkaufen('Mitarbeiter: Darf es sonst noch etwas sein? Y/N: ');
    if (eingabe == 'Y') {
        return 0;
    }
    else {
        console.log('Gut! hier haben Sie die Rechnung');
        return 1;
    }
}
////// Anzahl der gekauften Stuecke in den Bestand eintragen //////
function updateWarenkorb(bestand, objektProdukt, stueckzahl) {
    for (let i in bestand) {
        if (bestand[i].name == objektProdukt.name) {
            let stueckZahlgesamt = bestand[i].anzahlkisten * bestand[i].stkProKiste;
            stueckZahlgesamt -= stueckzahl; // Merken für UpdateBestand
            let myobj = { name: bestand[i].name, Anzahl: stueckzahl, preis: 0 };
            warenkorb.push(myobj);
        }
    }
    updateBestand(objektProdukt.name, stueckzahl);
    return warenkorb;
}
//// Den Bestand Akutallisieren ///////
function updateBestand(obst, Anzahl) {
    // console.log(warenkorb)
    for (let i in bestand) {
        if (bestand[i].name == obst) {
            let stueckeInsgesamtImBestand = bestand[i].anzahlkisten * bestand[i].stkProKiste;
            stueckeInsgesamtImBestand -= Anzahl;
            let anzahlRestKisten = stueckeInsgesamtImBestand / bestand[i].stkProKiste;
            bestand[i].anzahlkisten = anzahlRestKisten;
            bestand[i].anzStkVerkauf = Anzahl;
            // console.log(warenkorb[k])
        }
    }
    return bestand;
}
// function warenkorbDartsellen(warenkorb) {
function warenkorbDartsellen() {
    console.log('Warenkorb: ');
    let gesamtsumme = 0;
    for (let i in warenkorb) {
        console.log('  ' + warenkorb[i].name + ': ' + 'Anz: ' + warenkorb[i].Anzahl + ' = ' + warenkorb[i].preis + '€');
        gesamtsumme += warenkorb[i].preis;
    }
    console.log('________________________________');
    console.log('');
    console.log('  Gesamtsumme: ' + gesamtsumme + '€');
    console.log('');
}
function bestandDarstellen(bestand) {
    console.log('Bestand: ');
    for (let i in bestand) {
        console.log('  ' + bestand[i].name + ': ' + (bestand[i].anzahlkisten * bestand[i].stkProKiste) + ' Stück ' + 'Verkauft: ' + bestand[i].anzStkVerkauf);
    }
}
// name: 'Apfel',
// anzahlkisten: 3,
// stkProKiste: 12,
// preiProStk: 0.90,
// anzStkVerkauf: 0,
// verluste: 0,
// },
// function save_product() {
//     let save = (document.getElementById("birne") as HTMLInputElement).value;
//     console.log("Anzahl ausgewählte Birnen: " + save)
// }
////////////////////////////////    - Besitzer ermittelt seinen: Umsatz | Gewinn (Selbst entscheidend)
////////////////////////////////    - Besitzer schließt Obstladen: Ausgabe verkauftes Obst/Stück | Umsatz gesamt / Gewinn gesamt 
