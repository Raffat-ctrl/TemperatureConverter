function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result = '';
  
    if (isNaN(temperature)) {
      result = 'Please enter a valid number!';
    } else {
      if (unit === 'C') {
        result = `Converted Temperature: 
                  ${temperature}°C = ${(temperature * 9/5) + 32}°F = ${temperature + 273.15}K`;
      } else if (unit === 'F') {
        result = `Converted Temperature: 
                  ${temperature}°F = ${(temperature - 32) * 5/9}°C = ${(temperature - 32) * 5/9 + 273.15}K`;
      } else if (unit === 'K') {
        result = `Converted Temperature: 
                  ${temperature}K = ${temperature - 273.15}°C = ${(temperature - 273.15) * 9/5 + 32}°F`;
      }
    }
  
    document.getElementById('result').innerText = result;
  }
