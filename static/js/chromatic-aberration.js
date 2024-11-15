document.querySelectorAll('.chromatic-aberration').forEach((element) => {
    // Handle text-based elements like span, p, h1, h2, etc.
    if (element.textContent.trim() && ['SPAN','A', 'P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(element.tagName)) {
        //console.log('Handling text content:', element);
        
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
        //console.log('Handling div, img:', element);

        // For div and img, simply create clones and add chromatic aberration effect
        const purpleClone = element.cloneNode(true);
        const greenClone = element.cloneNode(true);

        // Add the respective classes to the duplicates
        purpleClone.classList.add('ca-purple');
        greenClone.classList.add('ca-green');

        // Match the position of the original element
        const rect = element.getBoundingClientRect();
        purpleClone.style.width = `${rect.width}px`;
        purpleClone.style.height = `${rect.height}px`;
        greenClone.style.width = `${rect.width}px`;
        greenClone.style.height = `${rect.height}px`;

        // Apply the position style to the clones
        purpleClone.style.position = 'absolute';
        greenClone.style.position = 'absolute';
        purpleClone.style.top = `${rect.top + window.scrollY}px`;
        purpleClone.style.left = `${rect.left + window.scrollX}px`;
        greenClone.style.top = `${rect.top + window.scrollY}px`;
        greenClone.style.left = `${rect.left + window.scrollX}px`;

        // Insert the duplicates after the original element
        element.parentNode.insertBefore(purpleClone, element.nextSibling);
        element.parentNode.insertBefore(greenClone, purpleClone.nextSibling);

        //console.log('Created clones and inserted them:', purpleClone, greenClone);
    }
    // Handle <a> tags with social icons (img or svg)
    else if (element.tagName === 'A') {
        //console.log('Handling anchor with icon:', element);

        const icon = element.querySelector('svg'); // Look for an icon inside the anchor
        if (icon) {
            // Clone the icon and apply chromatic aberration
            const purpleClone = icon.cloneNode(true);
            const greenClone = icon.cloneNode(true);
    
            // Add the respective classes to the clones
            purpleClone.classList.add('ca-purple');
            greenClone.classList.add('ca-green');
    
            // Match the size and position of the original icon
            const rect = icon.getBoundingClientRect();
            purpleClone.style.width = `${rect.width}px`;
            purpleClone.style.height = `${rect.height}px`;
            greenClone.style.width = `${rect.width}px`;
            greenClone.style.height = `${rect.height}px`;
    
            // Check whether fill or stroke is being used and adjust accordingly
            const currentFill = icon.style.fill || getComputedStyle(icon).fill;
            const currentStroke = icon.style.stroke || getComputedStyle(icon).stroke;
            if (currentFill && currentFill !== 'none') {
                purpleClone.style.fill = 'purple';  // Purple color for the first clone
                greenClone.style.fill = 'green';    // Green color for the second clone
            } else if (currentStroke && currentStroke !== 'none') {
                purpleClone.style.stroke = 'purple';  // Purple stroke for the first clone
                greenClone.style.stroke = 'green';    // Green stroke for the second clone
            }
    
            // Apply the position style to the clones
            purpleClone.style.position = 'absolute';
            greenClone.style.position = 'absolute';
    
            // Get the position of the parent to adjust the clone positioning correctly
            const parentRect = element.getBoundingClientRect(); // Get the <a> element position
            purpleClone.style.top = `${rect.top - parentRect.top + window.scrollY}px`;  // Adjust for parent offset
            purpleClone.style.left = `${rect.left - parentRect.left + window.scrollX}px`; // Adjust for parent offset
            greenClone.style.top = `${rect.top - parentRect.top + window.scrollY}px`;  
            greenClone.style.left = `${rect.left - parentRect.left + window.scrollX}px`;
    
            // Insert the clones inside the <a> element
            element.appendChild(purpleClone);  // Append purple clone inside the <a>
            element.appendChild(greenClone);   // Append green clone inside the <a>
    
            //console.log('Created clones and inserted them inside <a> for icon:', purpleClone, greenClone);
        }
    }
});
