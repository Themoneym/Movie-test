document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("movieModal");
    const closeBtn = modal.querySelector(".close");
    const modalTitle = document.getElementById("modalTitle");
    const modalImage = document.getElementById("modalImage");
    const modalDescription = document.getElementById("modalDescription");

    // Function to open the modal with the appropriate data
    function openModal(title, image, description) {
        modalTitle.textContent = title;
        modalImage.src = image;
        modalDescription.textContent = description;
        modal.style.display = "block";
    }

    // Add event listener for opening the modal when an image is clicked
    const moviePosters = document.querySelectorAll('.row img');
    moviePosters.forEach(poster => {
        poster.addEventListener('click', function () {
            const title = this.alt; // Use alt text as title
            const image = this.src; // Use the image source
            const description = "Description for " + title; // Placeholder description, or use data-description attribute if available
            openModal(title, image, description);
        });
    });

    // Close the modal when the close button is clicked
    closeBtn.addEventListener('click', function () {
        modal.style.display = "none";
    });

    // Close the modal if clicked outside the modal content
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // Video control (Play/Pause) on hero section hover
    const hero = document.querySelector('.hero');
    const video = document.getElementById('background-video');

    hero.addEventListener('mouseenter', () => {
        video.play();
    });

    hero.addEventListener('mouseleave', () => {
        video.pause();
    });
});
