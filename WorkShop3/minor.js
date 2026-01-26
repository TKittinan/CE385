let TotalsumEven = 0;
let TotalproductOdd = 1;
for (let sumEven = 0; sumEven <= 50; sumEven++){
    if ( sumEven %2 === 0 ){
        TotalsumEven += sumEven;
    }
}
for (let productOdd = 0; productOdd <= 10; productOdd++ ){
    if ( productOdd %2 === 1 ){
        TotalproductOdd *= productOdd;
    }
}
console.log("Total =",TotalsumEven)
console.log("Total =",TotalproductOdd)