document.addEventListener("DOMContentLoaded", function() {
    // Check if the popup has been displayed before
    var popupDisplayed = localStorage.getItem('popupDisplayed');
    if (!popupDisplayed) {
        // If the popup has not been displayed before, show it
        var popup = document.querySelector('.pop-up');
        popup.style.display = 'block';

        // Set a flag in local storage to indicate that the popup has been displayed
        localStorage.setItem('popupDisplayed', true);
    }

    // Get all elements with the 'clickable' class
    var clickableElements = document.querySelectorAll('.clickable');

    // Add a click event listener to each clickable element
    clickableElements.forEach(function(element) {
        var originalScale = element.object3D.scale.clone();
        var hoverSound = new Audio('sounds/hover.mp3'); // Replace 'path/to/hover-sound.mp3' with the actual path to your sound file

        element.addEventListener('mouseenter', function() {
            // Increase the scale on hover
            element.object3D.scale.set(originalScale.x * 1.2, originalScale.y * 1.2, originalScale.z * 1.2);

            // Play the hover sound
            hoverSound.play();
        });

        element.addEventListener('mouseleave', function() {
            // Restore the original scale on mouse leave
            element.object3D.scale.copy(originalScale);
        });

        element.addEventListener('click', function() {
            // Get the value of the 'value' attribute (change this based on your needs)
            var optionValue = element.querySelector('a-text').getAttribute('value');
            var abrOptionElement = document.getElementById('abrOption');

            // Use the option value to determine which HTML file to open
            if (optionValue === 'Aquarium') {
                window.location.href = 'aquarium.html';
            } else if (optionValue === 'Navy Pier') {
                window.location.href = 'navypier.html';
            } else if (optionValue === 'City') {
                window.location.href = 'city.html';
            } else if (optionValue === 'Museum') {
                window.location.href = 'museum.html';
            } else if (optionValue === 'Skydeck') {
                window.location.href = 'skydeck.html';
            } else if (optionValue === 'Food') {
                window.location.href = 'food.html';
            } else if (optionValue === 'Architectural\n Boat Ride') {
                window.location.href = 'abr.html';
            }
            // Add more conditions for other options as needed
        });
    });

    // Get the pop-up div and the close button
    var popup = document.querySelector('.pop-up');
    var closeButton = popup.querySelector('.btn');

    // Add click event listener to the close button
    closeButton.addEventListener('click', function() {
        // Hide the pop-up div
        popup.style.display = 'none';
    });
});
