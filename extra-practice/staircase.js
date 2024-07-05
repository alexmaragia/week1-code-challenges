const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printStaircase(n) {
    for (let i = 1; i <= n; i++) {
        console.log('#'.repeat(i));
    }
}

rl.question("Enter the number of levels for the staircase: ", (input) => {
    const levels = parseInt(input);
    printStaircase(levels);
    rl.close();
});
