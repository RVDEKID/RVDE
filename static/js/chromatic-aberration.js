document.querySelectorAll('.chromatic-aberration').forEach((element) => {
    const text = element.textContent;
    const purpleText = document.createElement('span');
    const greenText = document.createElement('span');

    purpleText.className = 'text purple';
    greenText.className = 'text green';

    purpleText.textContent = text;
    greenText.textContent = text;

    element.appendChild(purpleText);
    element.appendChild(greenText);
});
