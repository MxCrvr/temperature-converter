"use strict"

// Selecting elements
const tempUnit = document.getElementById('temp-unit');
const tempInput = document.getElementById('temp-input');
const celciusBtn = document.getElementById('to-celcius');
const fahrenheitBtn = document.getElementById('to-fahrenheit');
const kelvinBtn = document.getElementById('to-kelvin');
const resultBox = document.getElementById('results');
const result = document.getElementById('result');

// Hides buttons
tempUnit.addEventListener('change', () => {
    if (tempUnit.value === 'celcius') {
        celciusBtn.style.display = 'none';
        fahrenheitBtn.style.display = 'inline-block';
        kelvinBtn.style.display = 'inline-block';
    } 

    if (tempUnit.value === 'fahrenheit') {
        fahrenheitBtn.style.display = 'none';
        celciusBtn.style.display = 'inline-block';
        kelvinBtn.style.display = 'inline-block';
    }

    if (tempUnit.value === 'kelvin') {
        kelvinBtn.style.display = 'none';
        celciusBtn.style.display = 'inline-block';
        fahrenheitBtn.style.display = 'inline-block';
    }
});

// Fahrenheit/Kelvin to Celcius
celciusBtn.addEventListener('click', () => {
    getValidation();
    if (tempUnit.value === 'fahrenheit') {
        let formula = ((+tempInput.value -32) * 5 / 9).toFixed(2);
        result.innerHTML = `<p>${formula} &#8451;</p>`;
    } 
    
    if (tempUnit.value === 'kelvin') {
        let formula = (+tempInput.value - 273.15).toFixed(2);
        result.innerHTML = `<p>${formula} &#8451;</p>`;
    }
});

// Celcius/Kelvin to Fahrenheit
fahrenheitBtn.addEventListener('click', () => {
    getValidation();
    if (tempUnit.value === 'celcius') {
        let formula = ((+tempInput.value * 9 / 5) + 32).toFixed(2);
        result.innerHTML = `<p>${formula} &#8457;</p>`
    }

    if (tempUnit.value === 'kelvin') {
        let formula = ((+tempInput.value - 273.15) * 9 / 5 + 32).toFixed(2);
        result.innerHTML = `<p>${formula} &#8457;</p>`
    }
});

// Celcius/Fahrenheit to Kelvin
kelvinBtn.addEventListener('click', () => {
    getValidation();
    if (tempUnit.value === 'celcius') {
        let formula = (+tempInput.value + 273.15).toFixed(2);
        result.innerHTML = `<p>${formula} &#8490;</p>`
    }

    if (tempUnit.value === 'fahrenheit') {
        let formula = ((tempInput.value - 32) * 5 / 9 + 273.15).toFixed(2);
        result.innerHTML = `<p>${formula} &#8490;</p>`
    }
});

function getValidation() {
    const tempInputValidation = document.getElementById('temp-input-validation');
    const tempUnitValidation = document.getElementById('temp-unit-validation');

    if (isNaN(tempInput.value)) {
        tempInputValidation.textContent = 'Please enter a valid number';
    } 

    tempInput.addEventListener('keydown', () => {
        tempInputValidation.textContent = ''; 
    })

    if (tempUnit.value === '') {
        tempUnitValidation.textContent = 'Please select a unit';
    };

    tempUnit.addEventListener('click', () => {
        tempUnitValidation.textContent = '';
    });
};