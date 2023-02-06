// Dichiarazione delle variabili

let x = "John";
let y = "Doe";
console.log(x + " <> " + y); 

// ESercizio 2/3 Dichiarazione di un oggetto e formula per cancellare l' indirizzo mail dallo stesso.

let account = {
    name: "Luca",
    surname: "Corrado",
    email: "luca.corrado293@gmail.com"
  };
  
  delete account.email; 
  console.log(account); 

  // Esercizio 4/5 creazione array con 10 Stringhe. Mostriamo in console ogni stringa del precedente array.

  let strings = ["string1", "string2", "string3", "string4", "string5", "string6", "string7", "string8", "string9", "string10"];

for (let i = 0; i < strings.length; i++) {
  console.log(strings[i]);
} ;


// Esercizio 6 Creazione array contenente 100 numeri randomici. 

const numbers = Array(100).fill().map(() => Math.floor(1000 * Math.random()));

console.log(numbers); 

// Esercizio 7 funzione scritta per trovare il valore minimo e massimo dell' array.

const max = numbers.reduce((a, b) => Math.max(a, b), -Infinity);
const min = numbers.reduce((a, b) => Math.min(a, b), +Infinity);

console.log("Il numero più grande è:", max, "Il numero più piccolo è:", min); 

// Esercizio 8 crea un array di array con 100 numeri random  


let arrayDiArray = [];
for (let i = 0; i < 10; i++) {
  let arrayFiglio = [];
  for (let j = 0; j < 10; j++) {
    arrayFiglio.push(Math.floor(Math.random() * 100));
  } 
  arrayDiArray.push(arrayFiglio);
}
console.log(arrayDiArray); 


// Esercizio 9 Creazione funzione di array che riceve due parametri. 

function arrayConPiuElementi(array1, array2) {
    return array1.length > array2.length ? array1 : array2;
  } 

// esercizio 10. Creazione di una funzione che riceve 2 array numerici come parametri e ritorna quello con la somma totale degli elementi maggiore

function compareArraySum(arr1, arr2) {
    let sum1 = 0;
    let sum2 = 0;
    
    for (let i = 0; i < arr1.length; i++) {
      sum1 += arr1[i];
    }
    
    for (let i = 0; i < arr2.length; i++) {
      sum2 += arr2[i];
    }
    
    if (sum1 > sum2) {
      return arr1;
    } else {
      return arr2;
    }
  }
  
















