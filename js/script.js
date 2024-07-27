document.addEventListener("DOMContentLoaded", function () {
  // FOR CURRENT YEAR
  const yearEl = document.querySelector(".year");
  if (yearEl) {
    const currentYear = new Date().getFullYear();
    yearEl.textContent = currentYear;
  }

  // HOVER FUNCTIONALITY FOR MOBILE
  document.addEventListener("touchstart", function () {}, true);

  // HAMBURGER MENU
  const navButton = document.querySelector(".mobile-nav-btn");
  const headerElement = document.querySelector(".header");

  if (navButton && headerElement) {
    navButton.addEventListener("click", function () {
      headerElement.classList.toggle("nav-open");
    });
  }

  // SMOOTH SCROLLING
  const links = document.querySelectorAll("a:not(.footer-link)");

  links.forEach(function (link) {
    link.addEventListener("click", function (el) {
      const href = link.getAttribute("href");

      // Only prevent default for internal links
      if (href.startsWith("#")) {
        el.preventDefault();
        if (href === "#") {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else {
          const sectionElement = document.querySelector(href);
          if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: "smooth" });
          }
        }

        // CLOSE MENU ON CLICK
        if (link.classList.contains("nav-link")) {
          headerElement.classList.toggle("nav-open");
        }
      }
    });
  });

  // STICKY NAVIGATION
  const heroElement = document.querySelector(".section-hero");
  if (heroElement) {
    const navObserver = new IntersectionObserver(
      function (entries) {
        const ent = entries[0];
        if (ent.isIntersecting === false) {
          document.body.classList.add("sticky");
        } else {
          document.body.classList.remove("sticky");
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-80px",
      }
    );

    navObserver.observe(heroElement);
  }

  // Information Toggle Functionality
  const infoItems = document.querySelectorAll(".info-item");

  infoItems.forEach(item => {
      item.querySelector(".info-question").addEventListener("click", () => {
          item.classList.toggle("active");
      });
  });
});
