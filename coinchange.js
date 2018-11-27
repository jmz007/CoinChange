function makechange() {
    var amount = prompt("enter an amount of money in pennies to see the bad method");
    var change = [],
        total = 0;
    [100, 25, 10, 5, 1].forEach(function (coin) {
        while (total + coin <= amount) {
            change.push(coin);
            total += coin;
        }
    });

    return change;
};
console.log("bad method");
console.log(makechange());

var amount = prompt("enter an amount of money in pennies to see the better method");
const coins = [
    { name: 'dollars', value: 100 },
    { name: 'quarters', value: 25 },
    { name: 'dimes', value: 10 },
    { name: 'nickels', value: 5 },
    { name: 'pennies', value: 1 },
];
const coinCount = {};

function CoinChange(Change) {
    let i = 0;
    while (Change > 0) {
        const coin = coins[i];
        if (Change >= coin.value) {
            Change -= coin.value;
            coinCount[coin.name] = coinCount[coin.name] == null ? 1 : coinCount[coin.name] + 1;
        } else {
            i++;
        }
    }

    const text = Object.getOwnPropertyNames(coinCount)
        .map(coinName => coinName + ": " + coinCount[coinName])
        .join(`, `);

    console.log(text);
    console.log("better method");

}

CoinChange(amount);