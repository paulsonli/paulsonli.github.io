function avg(s1,s2,s3){
    return((s1+s2+s3)/3);
}

// const data1Nets1 = 80;
// const data1Nets2 = 82;
// const data1Nets3 = 100;

// const data1Knicks1 = 80;
// const data1Knicks2 = 90;
// const data1Knicks3 = 106;

// const data2Nets1 = 98;
// const data2Nets2 = 110;
// const data2Nets3 = 101;

// const data2Knicks1 = 108;
// const data2Knicks2 = 92;
// const data2Knicks3 = 110;

const data1Nets1 = Number(prompt("Enter Nets Score 1: "));
const data1Nets2 = Number(prompt("Enter Nets Score 2: "));
const data1Nets3 = Number(prompt("Enter Nets Score 3: "));

const data1Knicks1 = Number(prompt("Enter Knicks Score 1: "));
const data1Knicks2 = Number(prompt("Enter Knicks Score 2: "));
const data1Knicks3 = Number(prompt("Enter Knicks Score 3: "));

function winner(nS1, nS2, nS3, kS1, kS2, kS3){
    const nets = avg(nS1, nS2, nS3);
    const knicks = avg(kS1, kS2, kS3);

    console.log("AVERAGE NETS ", nets);
    console.log("AVERAGE KNICKS", knicks);

    if (nets > knicks){
        console.log("Nets Win!");
    }
    else if (knicks > nets){
        console.log("Knicks Win!");
    }
    else if (nets === knicks && nets >= 100){
        console.log("Draw!");
    }
    else{
        console.log("No one wins.");
    }

}

winner(data1Nets1, data1Nets2, data1Nets3, data1Knicks1, data1Knicks2, data1Knicks3);
// winner(data2Nets1, data2Nets2, data2Nets3, data2Knicks1, data2Knicks2, data2Knicks3);


const bill = Number(prompt("Enter Bill: "));
const tip15 = .15;
const tip20 = .20;

function tipCalc(bill, tip15, tip20){
    switch (true){
        case (bill > 29 && bill < 101):
            const tip = bill * tip15;
            const total = bill + tip;
        
            console.log(`The bill is  ${bill}, the tip is ${tip} (15%), the total is ${total}`);
            break;
        
        case (bill < 30 || bill > 100):
            const tip2 = bill * tip20;
            const total2 = bill + tip2;

            console.log(`The bill is  ${bill}, the tip is ${tip2} (20%), the total is ${total2}`);
            break;
    }
}

tipCalc(bill, tip15, tip20);

tempC = prompt("Enter Degrees in Celsius: ");
tempF = prompt("Enter Degrees in Fahrenheit: ");

ConvertCelsiusToFahrenheit = (tempC) => {
    return((tempC * 9/5) + 32);
}


console.log(`${tempC} \xB0 C is ${ConvertCelsiusToFahrenheit(tempC)} \xB0 F`);


ConvertFahrenheitToCelsius = (tempF) => {
    return((tempF - 32) * 5/9);
}

console.log(`${tempF} \xB0 F is ${ConvertFahrenheitToCelsius(tempF)} \xB0 C`);