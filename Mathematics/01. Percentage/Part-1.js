// if 25% of a number is added with itself , then the result becomes 750. find the original number.

// using x method

//  x + 1/4x = 750;

//( 5/4)x  = 750 

// x =  750*4/5

//  orignal value =  150;

// using fractional method

function num(num1, per) {

    let orignalNum = "";


    let Intial = per / 100;

    let final = 1 + per / 100


    orignalNum = num1 / final




    return orignalNum;




}

console.log(num(750, 25));


// using x method

function xNum(num1, per) {

    let itself = 1;

    itself = itself + itself * per

    return num1 / itself
}

console.log(xNum(750, 50 / 100));

// using percentage 

function perNum(num1, per) {

    let total = 100;

    onePercent = num1 / (total + per)

    return total * onePercent
}
console.log(perNum(750, 20));


//  if 37.5% of a number is subtracted form itself the the result becomes 950. find the original number

// ---using fraction

function subNum(num, per) {

    let intial = per / 100;

    let final = 1 - (per / 100);  // 1-0.375 = 0.625

    return num / (final)
}

console.log(subNum(950, 37.5));


// using percentage


function perSubtraction(num, per) {

    let totalPercentage = 100;

    let onePercentageNUm = num / (totalPercentage - per);

    return onePercentageNUm * totalPercentage
}

console.log(perSubtraction(950, 37.5));


//  using x method


function xsub(num, per) {

    let numx = 1;

    numx = 1 - (1 * per / 100);


    return num / numx

}

console.log(xsub(950, 37.5));


//  if 16⅔ of a number is added with itself, then the result become s560. if 12.5% is subtracted from itself then. what will be the new number

function findNum(per1, num, per2) {

    let intial1 = per1 / 100;

    let final1 = 1 + intial1;

    let firstResult = Math.ceil(num / final1);

    let intial2 = per2 / 100;

    let final2 = 1- intial2;

    let secondResult = (firstResult * final2 )

    return [firstResult , secondResult]



}
console.log(findNum(50 / 3, 560, 12.5))
