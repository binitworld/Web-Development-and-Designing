document.getElementById('tempForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const tempInput = parseFloat(document.getElementById('tempInput').value);
    const tempScale = document.getElementById('tempScale').value;
    let result = 0;
    let resultScale = ''; 

    if (tempScale === "celsius") {
        result = (tempInput * 9/5) + 32;
        resultScale = 'F'; 
    } else if (tempScale === "fahrenheit") {
        result = (tempInput - 32) * 5/9;
        resultScale = 'C'; 
    }

    const resultContainer = document.getElementById('result');
    resultContainer.textContent = `Converted Temperature: ${result.toFixed(2)}°${resultScale}`;

    document.body.classList.remove('cold', 'warm');

    if (resultScale === "C") {
        if (result <= 12) {
            document.body.classList.add('cold');
        } else {
            document.body.classList.add('warm');
        }
    } else if (resultScale === "F") {
        if (result <= 53.6) 
            document.body.classList.add('cold');
        } else {
            document.body.classList.add('warm');
        }
    }

);
