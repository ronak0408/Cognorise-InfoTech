function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    var bmi = weight / (height * height);

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Your BMI is: " + bmi.toFixed(2) + "<br>";

    if (bmi < 18.5) {
        resultDiv.innerHTML += "You are underweight.";
    } else if (bmi >= 18.5 && bmi < 25) {
        resultDiv.innerHTML += "You have a normal weight.";
    } else if (bmi >= 25 && bmi < 30) {
        resultDiv.innerHTML += "You are overweight.";
    } else {
        resultDiv.innerHTML += "You are obese.";
    }
}
