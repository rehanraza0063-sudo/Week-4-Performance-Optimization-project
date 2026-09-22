const menuToggle = document.getElementById("menuToggle");
const mainNavigation = document.getElementById("mainNavigation");

menuToggle.addEventListener("click", function () {

    const isOpen =
        mainNavigation.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );
});


document.querySelectorAll(
    "#mainNavigation a"
).forEach(function (link) {

    link.addEventListener("click", function () {

        mainNavigation.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    });

});


const searchForm =
    document.getElementById("searchForm");

const searchInput =
    document.getElementById("searchInput");

const searchStatus =
    document.getElementById("searchStatus");


searchForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const query =
            searchInput.value.trim();

        if (!query) {

            searchStatus.textContent =
                "Please enter a search term.";

            return;
        }

        searchStatus.textContent =
            `Search submitted for "${query}".`;

    }
);


const newsletterForm =
    document.getElementById("newsletterForm");

const email =
    document.getElementById("email");

const emailError =
    document.getElementById("emailError");


newsletterForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const emailValue =
            email.value.trim();

        if (!emailValue.includes("@")) {

            emailError.textContent =
                "Please enter a valid email address.";

            return;
        }

        emailError.textContent =
            "Thank you for subscribing!";

        newsletterForm.reset();

    }
);


document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            mainNavigation.classList.contains("open")
        ) {

            mainNavigation.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuToggle.focus();

        }

    }
);