function tempConvertC(){
    const input = prompt("Enter degrees in Celsius:");
    let output = (input * 9/5) + 32;

    alert(`${input} \u00B0 Celsius is ${output} \u00B0 Fahrenheit`);
}

function tempConvertF(){
    const input = prompt("Enter degrees in Fahrenheit:");
    let output = (input - 32) * 5/9;

    alert(`${input} \u00B0 Fahrenheit is ${output} \u00B0 Celsius`);
}

function BMI(){
    const massUser1 = prompt("Enter Person 1's Mass (KG):");
    const heightUser1 = prompt("Enter Person 1's Height (CM):");

    const massUser2 = prompt("Enter Person 2's Mass (KG):");
    const heightUser2 = prompt("Enter Person 2's Height (CM):");

    const user1BMI = (massUser1/heightUser1/heightUser1) * 10000;
    const user2BMI = (massUser2/heightUser2/heightUser2) * 10000;

    if(user1BMI > user2BMI){
        alert(`Person 1's BMI (${user1BMI}) is higher than Person 2's BMI (${user2BMI})`)
    }
    else{
        alert(`Person 2's BMI (${user2BMI}) is higher than Person 1's BMI (${user1BMI})`)
    }
}

function partC(){
    const input = prompt("Enter a number:");

    if(isNaN(input)){
        console.log("Please enter a number!");
    }
    else if(input == 10){
        console.log("You win 10 points");
    }
    else if(input == 8){
        console.log("You win 8 points");
    }
    else{
        console.log("NOT MATCHED!!");
    }
}