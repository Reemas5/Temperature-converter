//const temp_1 = document.querySelectorAll(".temp");
const tempInputs = document.querySelectorAll(".temp");

tempInputs.forEach(input => {
  input.addEventListener('input', () => {
    const celsius = +(tempInputs[0].value);
  
    const fahrenheit = parseFloat(tempInputs[1].value);
    const kelvin = parseFloat(tempInputs[2].value);

    // Convert Celsius to Fahrenheit and Kelvin
    if (input === tempInputs[0]) {
      const fahrenheitValue = (celsius * 9/5) + 32;
      tempInputs[1].value = fahrenheitValue.toFixed(2);
      const kelvinValue = celsius + 273.15;
      console.log(kelvinValue);
      tempInputs[2].value = kelvinValue.toFixed(2);
    }

    // Convert Fahrenheit to Celsius and Kelvin
    if (input === tempInputs[1]) {
      const celsiusValue = (fahrenheit - 32) * 5/9;
      tempInputs[0].value = celsiusValue.toFixed(2);
      const kelvinValue = celsiusValue + 273.15;
      tempInputs[2].value = kelvinValue.toFixed(2);
    }

    // Convert Kelvin to Celsius and Fahrenheit
    if (input === tempInputs[2]) {
      const celsiusValue = kelvin - 273.15;
      tempInputs[0].value = celsiusValue.toFixed(2);
      const fahrenheitValue = (celsiusValue * 9/5) + 32;
      tempInputs[1].value = fahrenheitValue.toFixed(2);
    }
  });
});