function calculateBMI(weight, height) {
    let heightM = height/100
    let Bmi = weight / (heightM **2);
    let bmiavg = "";

    if (Bmi < 18.5) {
        bmiavg = "ผอม";
    } 
    else if (Bmi < 25) {
        bmiavg = "ปกติ";
    } 
    else if (Bmi < 30) {
        bmiavg = "อ้วน";
    } 
    else {
        bmiavg = "อ้วนมาก";
    }

    return {
        bmi: Bmi.toFixed(2),
        bmiavg: bmiavg
    };
}

console.log(calculateBMI(150, 180));
console.log(calculateBMI(20, 160));
console.log(calculateBMI(90, 170));
console.log(calculateBMI(90, 100));