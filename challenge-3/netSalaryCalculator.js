const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateNetSalary(basicSalary, benefits) {
    // Constants based on provided links
    const payeeRates = [
        { upTo: 24000, rate: 0.1 },
        { upTo: 32333, rate: 0.25 },
        { above: 32333, rate: 0.3 }
    ];

    const NHIFRates = [
        { upTo: 5999, rate: 150 },
        { upTo: 7999, rate: 300 },
        { upTo: 11999, rate: 400 },
        { upTo: 14999, rate: 500 },
        { upTo: 19999, rate: 600 },
        { upTo: 24999, rate: 750 },
        { upTo: 29999, rate: 850 },
        { upTo: 34999, rate: 900 },
        { upTo: 39999, rate: 950 },
        { upTo: 44999, rate: 1000 },
        { upTo: 49999, rate: 1100 },
        { upTo: 59999, rate: 1200 },
        { upTo: 69999, rate: 1300 },
        { upTo: 79999, rate: 1400 },
        { upTo: 89999, rate: 1500 },
        { upTo: 99999, rate: 1600 },
        { above: 100000, rate: 1700 }
    ];

    const NSSFRate = 0.06;

    // Gross Salary
    const grossSalary = basicSalary + benefits;

    // PAYE Calculation
    let payee = 0;
    let remainingSalary = grossSalary;
    for (let rate of payeeRates) {
        if (rate.above) {
            payee += remainingSalary * rate.rate;
            break;
        } else if (remainingSalary > rate.upTo) {
            payee += rate.upTo * rate.rate;
            remainingSalary -= rate.upTo;
        } else {
            payee += remainingSalary * rate.rate;
            break;
        }
    }

    // NHIF Calculation
    let nhif = NHIFRates.find(rate => grossSalary <= rate.upTo || rate.above).rate;

    // NSSF Calculation
    let nssf = grossSalary * NSSFRate;

    // Net Salary Calculation
    const netSalary = grossSalary - (payee + nhif + nssf);

    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`PAYE (Tax): ${payee}`);
    console.log(`NHIF Deduction: ${nhif}`);
    console.log(`NSSF Deduction: ${nssf}`);
    console.log(`Net Salary: ${netSalary}`);
}

rl.question("Enter basic salary: ", (basicInput) => {
    const basicSalary = parseFloat(basicInput);
    rl.question("Enter benefits: ", (benefitsInput) => {
        const benefits = parseFloat(benefitsInput);
        calculateNetSalary(basicSalary, benefits);
        rl.close();
    });
});
