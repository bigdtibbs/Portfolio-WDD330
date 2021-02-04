'use strict';

test('factors of 12', () => { 
    expect(factorsOf(12)).toEqual([1,2,3,4,6,12]);

});

test('2 is Prime', () => {
    expect(isPrime(2)).toBe(true);
});

test('10 in NOT Prime', () => {
    expect(isPrime(10)).not.toBe(true);
});

function factorsOf(n) {
    const factors = [];
    for (let i = 1; i <= n; i++) {
        if (n/i === Math.floor(n/i)) {
            factors.push(i);
        }
    }
    return factors;
}

function isPrime(n) {
    try {
        return factorsOf(n).length === 2;
    }
    catch(error) {
        return false;
    }
}
