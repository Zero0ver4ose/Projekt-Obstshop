
let bestand5= [
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


let bestand2 = document.getElementById("bestand")

function bestand12(){  
    let liste = document.getElementById("p")
    if (liste?.innerHTML != '')
    {
        liste!.innerHTML = ''
    }
for (let i in bestand5) {
    liste = document.getElementById("p")
    let bestandaktuell = bestand5[i].name + ' = Menge an Kisten: ' + bestand5[i].anzahlkisten + ', Stückzahl in Kisten: ' + bestand5[i].stkProKiste + ', Preis/Stück: ' 
    + bestand5[i].preiProStk + ' Einkaufspreis: ' + Math.ceil((bestand5[i].anzahlkisten * bestand5[i].stkProKiste)* bestand5[i].preiProStk) + '€' + '<br>' ;
    if (liste != undefined) {
    liste.innerHTML += bestandaktuell
    }
}}

function leer(){
    let liste = document.getElementById("p")
    if (liste?.innerHTML != '')
    {
        liste!.innerHTML = ''
    }
}

function ichmoechteetwaskaufen() {
    let liste = document.getElementById("p")
    let bestandaktuell = ""
    if (liste?.innerHTML != '')
    {
        liste!.innerHTML = ''
    }
    for (let i in bestand5) {

        bestandaktuell += bestand5[i].name  + ', Preis/Stück: ' + 
        + bestand5[i].preiProStk + '€ ' + ' Anzahl: ' +(bestand5[i].stkProKiste * bestand5[i].anzahlkisten) + '<br>' ;
        
    }
    liste!.innerHTML = bestandaktuell

}
// Global get Element //
let mango_summe = document.getElementById("p1")
let apfel_summe = document.getElementById("p2")
let banane_summe = document.getElementById("p3")
let aprikose_summe = document.getElementById("p4")
let birne_summe = document.getElementById("p5")



/////////////////////////

function mango() {
    let mango = document.getElementById("p1")
    let zahl:number = parseFloat((document.getElementById("zahl") as HTMLInputElement).value)
    let warenkorb = ""
    
    for (let i in bestand5){
        if (bestand5[i].name == 'Mango') {
        warenkorb += (bestand5[i].preiProStk * zahl).toFixed(2);
        }
    } 
    console.log(warenkorb)
    mango!.innerHTML = warenkorb
}
function Apfel() {
    let Apfel = document.getElementById("p2")
    let zahl:number = parseFloat((document.getElementById("zahl1") as HTMLInputElement).value)
    let warenkorb = ""
    
    for (let i in bestand5){
        if (bestand5[i].name == 'Apfel') {
        warenkorb += (bestand5[i].preiProStk * zahl).toFixed(2);
        }
    } 
    console.log(warenkorb)
    Apfel!.innerHTML = warenkorb
}
function Banane() {
    let Banane = document.getElementById("p3")
    let zahl:number = parseFloat((document.getElementById("zahl2") as HTMLInputElement).value)
    let warenkorb = ""
    
    for (let i in bestand5){
        if (bestand5[i].name == 'Banane') {
        warenkorb += (bestand5[i].preiProStk * zahl).toFixed(2);
        }
    } 
    console.log(warenkorb)
    Banane!.innerHTML = warenkorb
}
function Aprikose() {
    let Aprikose = document.getElementById("p4")
    let zahl:number = parseFloat((document.getElementById("zahl3") as HTMLInputElement).value)
    let warenkorb = ""
    
    
    for (let i in bestand5){
        if (bestand5[i].name == 'Aprikose') {
        warenkorb += (bestand5[i].preiProStk * zahl).toFixed(2);
        }
    } 
    console.log(warenkorb)
    Aprikose!.innerHTML = warenkorb
}
function Birne() {
    let Birne = document.getElementById("p5")
    let zahl:number = parseFloat((document.getElementById("zahl4") as HTMLInputElement).value)
    let warenkorb = ""
    
    for (let i in bestand5){
        if (bestand5[i].name == 'Birne') {
        warenkorb += (bestand5[i].preiProStk * zahl).toFixed(2);
        }
    } 
    console.log(warenkorb)
    Birne!.innerHTML = warenkorb
}

// function mycreateelent () {
//     let element1 = document.createElement('p')
//     let mango = document.getElementById("p1")
//     let apfel= document.getElementById('p2')
//     let banane = document.getElementById("p3")
//     let aprikose = document.getElementById("p4")
//     let birne = document.getElementById("p5")
//     let summe = 0
//     summe = birne + apfel + mango + banane + aprikose

//     container!.appendChild(element1)
// }
// mycreateelent ()