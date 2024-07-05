function printStaircase(n) {
    for (let i = 1; i <= n; i++) {
        console.log('#'.repeat(i));
    }
}

const levels = parseInt(prompt("Enter the number of levels for the staircase:"));
printStaircase(levels);
