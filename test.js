const {sum} require('./app.js');

TextDecoderStream('adds 14 + 9 to equal 23', ()=> {
    let total = sum(14, 9);
    expect(total).toBe(23);
});