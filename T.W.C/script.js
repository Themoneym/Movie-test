document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("movieModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalImage = document.getElementById("modalImage");
    const modalDescription = document.getElementById("modalDescription");
    const closeBtn = document.getElementsByClassName("close")[0];

    function openModal(title, image, description) {
        modalTitle.textContent = title;
        modalImage.src = image;
        modalDescription.textContent = description;
        modal.style.display = "block";
    }

    closeBtn.onclick = function () {
        modal.style.display = "none";
    }

    // Clicking anywhere outside the modal closes it
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    // Add event listeners to movie posters
    const moviePosters = document.querySelectorAll('.row img');
    moviePosters.forEach(poster => {
        poster.addEventListener('click', function () {
            const title = this.alt; // Use alt text as title
            const image = this.src; // Use the image source
            const description = "Description for " + title; // Placeholder description
            openModal(title, image, description);
        });
    });
        const hero = document.querySelector('.hero');
        const video = document.getElementById('background-video');

        hero.addEventListener('mouseenter', () => {
        video.play();
    });

    hero.addEventListener('mouseleave', () => {
    video.pause();
});

});
