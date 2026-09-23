// MOBILE MENU

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("active");

    });

}



// Close mobile menu

document
    .querySelectorAll("nav a")
    .forEach(function(link) {

        link.addEventListener(
            "click",
            function() {

                if (navMenu) {

                    navMenu.classList.remove("active");

                }

            }
        );

    });



// Active navbar page

const currentPage =
    location.pathname
        .split("/")
        .pop() || "index.html";


document
    .querySelectorAll("nav a")
    .forEach(function(link) {

        if (
            link.getAttribute("href")
            === currentPage
        ) {

            link.classList.add("active");

        }

    });



// Scroll Animation

const observer =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(".reveal")
    .forEach(function(element) {

        observer.observe(element);

    });



// 3D Profile Card

const card =
    document.getElementById("profileCard");


if (card &&
    window.matchMedia("(pointer:fine)").matches) {


    card.addEventListener(
        "mousemove",
        function(event) {

            const rect =
                card.getBoundingClientRect();


            const x =
                (event.clientX - rect.left)
                / rect.width
                - 0.5;


            const y =
                (event.clientY - rect.top)
                / rect.height
                - 0.5;


            const rotateY =
                x * 14;


            const rotateX =
                y * -14;


            card.style.transform =
                `rotateY(${rotateY}deg)
                 rotateX(${rotateX}deg)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        function() {

            card.style.transform =
                "rotateY(0deg) rotateX(0deg)";

        }
    );

}