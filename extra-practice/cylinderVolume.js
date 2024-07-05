const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
    }
}

rl.question("Enter the radius of the cylinder: ", (radiusInput) => {
    const radius = parseFloat(radiusInput);
    rl.question("Enter the height of the cylinder: ", (heightInput) => {
        const height = parseFloat(heightInput);
        const cylinder = new Cylinder(radius, height);
        console.log(`Volume of the cylinder: ${cylinder.getVolume()} cubic units`);
        rl.close();
    });
});
