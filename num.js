// script.js
document.addEventListener('DOMContentLoaded', () => {
    const minValueInput = document.getElementById('minValue');
    const maxValueInput = document.getElementById('maxValue');
    const generateButton = document.getElementById('generateButton');
    const resultDiv = document.getElementById('result');

    generateButton.addEventListener('click', () => {
        const minValue = parseInt(minValueInput.value, 10);
        const maxValue = parseInt(maxValueInput.value, 10);

        if (isNaN(minValue) || isNaN(maxValue) || minValue >= maxValue) {
            resultDiv.textContent = 'Please enter valid min and max values.';
            resultDiv.style.color = '#e74c3c'; // Error color
        } else {
            const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
            resultDiv.textContent = `Random Number: ${randomNumber}`;
            resultDiv.style.color = '#3498db'; // Success color
        }
    });
});
