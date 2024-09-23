console.log("Hello World")
const sum = (a,b) => {
        return a+b;
}


console.log(sum(7,3))

let oneEuroIs = {
    'JPY': 156.5,
    'USD': 1.07,
    'GBP': 0.87,
};

const fromEuroToDollar = (amount) => {
    return amount * oneEuroIs.USD;
}

const fromDollarToYen = (amount) => {
    let amountInEuro = amount / oneEuroIs.USD;
    return amountInEuro * oneEuroIs.JPY;
}

const fromYenToPound = (amount) => {
    let amountInEuro = amount / oneEuroIs.JPY;
    return amountInEuro * oneEuroIs.GBP;
};

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };