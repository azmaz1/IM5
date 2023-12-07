// JavaScript

document.getElementById('guitarForm').addEventListener('change', function () {
    var bodyColor = document.getElementById('bodyColor').value;
    var neckMaterial = document.getElementById('neckMaterial').value;
    var hardwareColor = document.getElementById('hardwareColor').value;
    var pickguardColor = document.getElementById('pickguardColor').value;

    updateGuitarImage(bodyColor, neckMaterial, hardwareColor, pickguardColor);
});

function updateGuitarImage(bodyColor, neckMaterial, hardwareColor, pickguardColor) {
    // Construct the filenames based on selected options
    var bodyColorImage = 'img/' + bodyColor + '-bodyColor.png';
    var neckMaterialImage = 'img/' + neckMaterial + '-neckMaterial.png';
    var hardwareColorImage = 'img/' + hardwareColor + '-hardwareColor.png';
    var pickguardColorImage = 'img/' + pickguardColor + '-pickguardColor.png';

    // Update the image sources
    document.getElementById('bodyColorImage').src = bodyColorImage;
    document.getElementById('neckMaterialImage').src = neckMaterialImage;
    document.getElementById('hardwareColorImage').src = hardwareColorImage;
    document.getElementById('pickguardColorImage').src = pickguardColorImage;
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start', // You can adjust the block property if needed
            duration: 30000, // Adjust the duration (in milliseconds) for the smooth scroll
        });
    });
});