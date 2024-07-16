
    document.addEventListener("DOMContentLoaded", function() {
        const progressBars = document.querySelectorAll(".progress-bar");

        function checkScroll() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            progressBars.forEach(bar => {
                let offsetTop = bar.getBoundingClientRect().top + window.pageYOffset;
                if (scrollTop + window.innerHeight > offsetTop) {
                    bar.style.width = bar.getAttribute("data-skill");
                }
            });
        }

        window.addEventListener("scroll", checkScroll);

        // Initial check in case the section is already in view
        checkScroll();
    });
