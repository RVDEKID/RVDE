function applyChromaticAberration() {
    const previousClones = document.querySelectorAll('.ca-purple, .ca-green');
    previousClones.forEach(clone => {
        clone.remove();
    });

    document.querySelectorAll('.chromatic-aberration').forEach((element) => {
        // Skip already cloned elements by checking for a 'data-cloned' attribute or class
        if (element.hasAttribute('data-cloned') || element.classList.contains('already-cloned')) {
            return; // Skip this element
        }

        // Mark the element as cloned to avoid future cloning
        element.setAttribute('data-cloned', 'true');
        
        // Handle text-based elements like span, p, h1, h2, etc.
        if (element.textContent.trim() && ['SPAN','A', 'P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'BUTTON'].includes(element.tagName)) {
            const text = element.textContent;
            const purpleText = document.createElement('span');
            const greenText = document.createElement('span');

            purpleText.className = 'ca-text-purple';
            greenText.className = 'ca-text-green';

            purpleText.textContent = text;
            greenText.textContent = text;

            element.appendChild(purpleText);
            element.appendChild(greenText);
        } 
        // Handle div, img, and a (with social icons)
        else if (['DIV', 'IMG'].includes(element.tagName)) {
            const purpleClone = element.cloneNode(true);
            const greenClone = element.cloneNode(true);

            purpleClone.classList.add('ca-purple');
            greenClone.classList.add('ca-green');

            const rect = element.getBoundingClientRect();
            purpleClone.style.width = `${rect.width}px`;
            purpleClone.style.height = `${rect.height}px`;
            greenClone.style.width = `${rect.width}px`;
            greenClone.style.height = `${rect.height}px`;

            purpleClone.style.position = 'absolute';
            greenClone.style.position = 'absolute';
            purpleClone.style.top = `${rect.top + window.scrollY}px`;
            purpleClone.style.left = `${rect.left + window.scrollX}px`;
            greenClone.style.top = `${rect.top + window.scrollY}px`;
            greenClone.style.left = `${rect.left + window.scrollX}px`;

            element.parentNode.insertBefore(purpleClone, element.nextSibling);
            element.parentNode.insertBefore(greenClone, purpleClone.nextSibling);

            // Mark cloned elements
            purpleClone.setAttribute('data-cloned', 'true');
            greenClone.setAttribute('data-cloned', 'true');
        }
        // Handle <a> tags with social icons (img or svg)
        else if (element.tagName === 'A') {
            const icon = element.querySelector('svg');
            if (icon) {
                const purpleClone = icon.cloneNode(true);
                const greenClone = icon.cloneNode(true);

                purpleClone.classList.add('ca-purple');
                greenClone.classList.add('ca-green');

                const rect = icon.getBoundingClientRect();
                purpleClone.style.width = `${rect.width}px`;
                purpleClone.style.height = `${rect.height}px`;
                greenClone.style.width = `${rect.width}px`;
                greenClone.style.height = `${rect.height}px`;

                const currentFill = icon.style.fill || getComputedStyle(icon).fill;
                const currentStroke = icon.style.stroke || getComputedStyle(icon).stroke;
                if (currentFill && currentFill !== 'none') {
                    purpleClone.style.fill = 'purple';
                    greenClone.style.fill = 'green';
                } else if (currentStroke && currentStroke !== 'none') {
                    purpleClone.style.stroke = 'purple';
                    greenClone.style.stroke = 'green';
                }

                purpleClone.style.position = 'absolute';
                greenClone.style.position = 'absolute';

                const parentRect = element.getBoundingClientRect();
                purpleClone.style.top = `${rect.top - parentRect.top + window.scrollY}px`;
                purpleClone.style.left = `${rect.left - parentRect.left + window.scrollX}px`;
                greenClone.style.top = `${rect.top - parentRect.top + window.scrollY}px`;
                greenClone.style.left = `${rect.left - parentRect.left + window.scrollX}px`;

                element.appendChild(purpleClone);
                element.appendChild(greenClone);

                // Mark cloned elements
                purpleClone.setAttribute('data-cloned', 'true');
                greenClone.setAttribute('data-cloned', 'true');
            }
        }
    });
}
