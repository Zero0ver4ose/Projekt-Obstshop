// 202211021049 Minh-Phi
//Listen listen lassen

//Obstliste
obst = ['mango', 'aprikose', 'erdbeere', 'banane', 'birne']

obst.forEach(par => {
    console.log(par)
});
//////////////////////////////////
function fname (name) {
    console.log(name)
}
fname ('sarah')
 ///////////////////////////////
let fname2 = function (name ) { 
    console.log(name)  
}
fname2 ('Mike')
//////////////////////////########## Gleiche Methode
obst.forEach (Ele => console.log('Alex'))
//////////////////////////##########
obst.map(ele => 
    console.log('Alex')
)
console.log(obst)

//sven
for(k in obst) {
    obst[k] = 'alex'
}
console.log(obst)
