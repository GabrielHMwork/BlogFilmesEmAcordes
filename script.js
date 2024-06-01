document.addEventListener("DOMContentLoaded", function() {
    var readMoreLinks = document.querySelectorAll('.container .read-more');

    readMoreLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            var moreText = this.previousElementSibling.querySelector('.more-text');
            if (moreText.style.display === "none" || moreText.style.display === "") {
                moreText.style.display = "inline";
                this.textContent = "Ler menos...";
            } else {
                moreText.style.display = "none";
                this.textContent = "Ler mais...";
            }
        });
    });
});