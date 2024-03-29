/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  let result = l1 * l2;

  return result;
}
//  esempio di calcolo area

{
  let l1 = 12;
  let l2 = 40;

  let rectangleArea = area(l1, l2);

  console.log(rectangleArea);
}

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Numero del parametro 1 scelto casualmente
function randomNumber1() {
  const ranNumb = Math.ceil(Math.random() * 60);
  return ranNumb;
}

// Numero del parametro 2 scelto casualmente

function randomNumber2() {
  const ranNumb = Math.ceil(Math.random() * 30);
  return ranNumb;
}

let para1 = randomNumber1();
let para2 = randomNumber2();

console.log("il primo parametro è " + para1);
console.log("il secondo parametro è " + para2);

function crazySum(para1, para2) {
  if (para1 !== para2) {
    return para1 + para2;
  } else if (para1 === para2) {
    return (para1 + para2) * 3;
  }
}

console.log("Il risultato della somma è " + crazySum(para1, para2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(para1) {
  let differenza = Math.abs(para1 - 19);

  if (differenza > 19) {
    return differenza * 3;
  } else {
    return differenza;
  }
}

console.log("Il risultato della differenza è " + crazyDiff(para1));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}

console.log(boundary(80));
console.log(boundary(250));
console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(string) {
  if (string.startsWith("EPICODE")) {
    return string;
  } else {
    return "EPICODE" + string;
  }
}

console.log(epify(" CIAO!"));
console.log(epify("EPICODE HELLO!"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(n) {
  if (n > 0 && (n % 3 === 0 || n % 7 === 0)) {
    return true;
  } else {
    return false;
  }
}

console.log(check3and7(16));
console.log(check3and7(18));
console.log(check3and7(70));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(string) {
  return string.split("").reverse().join("");
}

console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(string) {
  //diviso in parole
  const words = string.split(" ");

  let newString = "";

  //ciclo tutto
  for (let i = 0; i < words.length; i++) {
    //divido ulteriormente in lettere

    const firstChar = words[i].charAt(0).toUpperCase();
    const lastletters = words[i].slice(1);
    const upperWord = firstChar + lastletters;
    newString += upperWord + " ";
  }
  return newString;
}

console.log(upperFirst("almeno tre parole"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(str) {
  return str.substring(1, str.length - 1);
}

console.log(cutString("Epicode!"));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    const randNum = Math.floor(Math.random() * 11);
    console.log("randNum", randNum);
    arr.push(randNum);
  }
  return arr;
}
