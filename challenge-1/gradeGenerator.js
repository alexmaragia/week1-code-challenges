function getGrade() {
    const marks = parseFloat(prompt("Enter student marks (0 - 100):"));
    if (marks >= 80 && marks <= 100) {
        console.log("Grade: A");
    } else if (marks >= 60 && marks < 80) {
        console.log("Grade: B");
    } else if (marks >= 50 && marks < 60) {
        console.log("Grade: C");
    } else if (marks >= 40 && marks < 50) {
        console.log("Grade: D");
    } else if (marks >= 0 && marks < 40) {
        console.log("Grade: E");
    } else {
        console.log("Invalid marks entered. Please enter a value between 0 and 100.");
    }
}

getGrade();
