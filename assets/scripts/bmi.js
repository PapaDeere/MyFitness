const calcButton = document.querySelector("#calculateBmi");
const bmiMsg = document.querySelector("#bmiMsg");
let msg = "";
let height = 0;
let bmi = 0;
let isValid = false;

// Validates if the weight and height-feet fields are populated 
// if height-inches field is empty it is valid at zero 
validate = function() {
    let heightFeet = Number(document.querySelector("#heightFeet").value);
    let weight = Number(document.querySelector("#weightPounds").value);

    if (weight === 0 && heightFeet === 0) {
        bmiMsg.innerHTML = "<span class=\"bold\">You must enter a valid height and weight!</span";
        bmiMsg.classList.remove("w3-pale-red", "w3-amber", "w3-pale-green");
        bmiMsg.classList.add("w3-pale-red");
        isValid = false;
    } else if (heightFeet === 0) {
        bmiMsg.innerHTML = "<span class=\"bold\">You must enter a valid height!</span";
        bmiMsg.classList.remove("w3-pale-red", "w3-amber", "w3-pale-green");
        bmiMsg.classList.add("w3-pale-red");
        isValid = false;
    } else if (weight === 0) {
        bmiMsg.innerHTML = "<span class=\"bold\">You must enter a valid weight!</span";
        bmiMsg.classList.remove("w3-pale-red", "w3-amber", "w3-pale-green");
        bmiMsg.classList.add("w3-pale-red");
        isValid = false;
    } else {
        isValid = true;
    }
};

// function to calculate height in feet and inches to inches combined 
feetToInches = function() {
    let heightFeet = Number(document.querySelector("#heightFeet").value);
    let heightInches = Number(document.querySelector("#heightInches").value);
    height = ((heightFeet * 12) + heightInches);
    return height;
};

// function to calculate the BMI using the feetToInches function
calcBMI = function() {
    let weight = Number(document.querySelector("#weightPounds").value);

    feetToInches();
    bmi = (((weight / (height * height)) * 703)).toFixed(2);
    return bmi;
};

// EventListener on the form button that will check validation, run BMI calculation and then figure
// out what BMI category the user is in. A message is generated and styling is applied after calculated
calcButton.addEventListener("click", function() {
    validate();
    if (isValid === true) {
        calcBMI();
        let bmiCategory;
        let bkgColor = "w3-black";

        if (bmi < 18.5) {
            bmiCategory = "UNDERWEIGHT";
            bkgColor = "w3-amber";
        } else if (bmi > 18.5 && bmi < 25.0) {
            bmiCategory = "HEALTHY";
            bkgColor = "w3-pale-green";
        } else if (bmi > 24.9 && bmi < 30.0) {
            bmiCategory = "OVERWEIGHT";
            bkgColor = "w3-amber";
        } else {
            bmiCategory = "OBESE";
            bkgColor = "w3-pale-red";
        }
        msg = "Your BMI is: <span class=\"bold\">" + bmi + "</span> <br />You are considered: <span class=\"bold\">" + bmiCategory + "</span>";
        bmiMsg.innerHTML = msg;
        bmiMsg.classList.remove("w3-pale-red", "w3-amber", "w3-pale-green");
        bmiMsg.classList.add(bkgColor);
    }
});