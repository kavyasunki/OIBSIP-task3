function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var resultElement = document.getElementById("result");

    if (isNaN(temperature)) {
        resultElement.innerHTML = "Please enter a valid temperature.";
        return;
    }

    var convertedTemperature;
    var resultUnit;

    if (unit === "celsius") {
        convertedTemperature = (temperature * 9/5) + 32;
        resultUnit = "Fahrenheit";
    } else if (unit === "fahrenheit") {
        convertedTemperature = (temperature - 32) * 5/9;
        resultUnit = "Celsius";
    }

    resultElement.innerHTML = temperature + " " + unit.charAt(0).toUpperCase() + unit.slice(1) +
                              " is equal to " + convertedTemperature.toFixed(2) + " " + resultUnit + ".";
}
