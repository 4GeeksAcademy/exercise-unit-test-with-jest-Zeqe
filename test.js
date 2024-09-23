const {sum} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('converts 1 Euro to 1.07 USD', () => {
    expect(fromEuroToDollar(1)).toBe(1.07);
});

test('converts 1 USD to 156.5 JPY', () => {
    expect(fromDollarToYen(1)).toBeCloseTo(146.26, 2); // Usamos toBeCloseTo por posibles errores de redondeo
});

test('converts 1 JPY to 0.0056 GBP', () => {
    expect(fromYenToPound(1)).toBeCloseTo(0.0056, 4); // Usamos toBeCloseTo por posibles errores de redondeo
});