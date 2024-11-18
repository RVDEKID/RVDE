

const content = {
    home: {
        left:document.getElementById('home-left-template').innerHTML,
        right: document.getElementById('home-right-template').innerHTML,
        layout: 'layout-home',
      },
  art: {
    left:document.getElementById('art-left-template').innerHTML,
    right: document.getElementById('art-right-template').innerHTML,
    layout: 'layout-art',
  },
  portfolio: {
    left:document.getElementById('portfolio-left-template').innerHTML,
    right: document.getElementById('portfolio-right-template').innerHTML,
    layout: 'layout-portfolio',
  },
  cv: {
    left:document.getElementById('cv-left-template').innerHTML,
    right: document.getElementById('cv-right-template').innerHTML,
    layout: 'layout-cv',
  },
};


const leftPanel = document.getElementById('left-panel');
const rightPanel = document.getElementById('right-panel');

function loadGalleryContent() {
    // Your logic for dynamically loading gallery content
  
    // Ensure the gallery element exists before initializing Masonry
    var elem = document.querySelector('.gallery');
    
    if (elem) {
      // Start polling every 0.1s for 10 times
    let count = 0;
    const interval = setInterval(function() {
    var msnry = new Masonry('.gallery', {
    itemSelector: '.gallery-item',
    columnWidth: '.gallery-item',
    percentPosition: true,
    gutter: 10,
  });
  
  // Stop the loop after 10 iterations
  count++;
  if (count >= 5) {
    clearInterval(interval);
  }
}, 100); // Run every 100ms (0.1s)
  
      // Reinitialize SimpleLightbox for new images
      var lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionSelector: 'img',
        captionType: 'attr',
        overlay: true,
      });
      
      // After new items have been added to the gallery, re-layout Masonry
      msnry.reloadItems(); // Reload the layout with new items
      msnry.layout(); // Layout the items properly
    } else {
      console.error('Gallery element not found.');
    }
  }
  
  // Call this function after your gallery content is loaded dynamically
 
  
  

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('layout-home'); // Set the default layout on page load
    navigateTo('home'); // Automatically populate the content with the 'home' page on load
});

document.querySelectorAll('button[data-action]').forEach((button) => {
    button.addEventListener('click', () => {
        const action = button.getAttribute('data-action');
        const param = button.getAttribute('data-param');
        window[action](param);
    });
});



function navigateTo(page) {
  const pageData = content[page];

  setTimeout(() => {
    // Update inner HTML of the panels
    leftPanel.innerHTML = pageData.left;
    rightPanel.innerHTML = pageData.right;

    // Remove previous layout class if exists
    const existingLayoutClass = Object.values(content).map(data => data.layout);
    existingLayoutClass.forEach(layout => {
      document.body.classList.remove(layout);
    });

    const currentLayout = document.body.classList.contains(pageData.layout);
    document.body.classList.add(pageData.layout);
    applyChromaticAberration(); 
    loadGalleryContent();
  }, 300); // Adjust timing for the fade-out effect
}
