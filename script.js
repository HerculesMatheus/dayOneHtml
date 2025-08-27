document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const navbar = document.querySelector(".navbar");
    const navbarItems = document.querySelectorAll(".navbar-item");

    if (navbar) {
      navbar.style.opacity = 1;
      navbar.style.transform = "translateY(0)";
      navbar.style.transition = "opacity 1s ease, transform 1s ease";
    }

    navbarItems.forEach((item, index) => {
      item.style.opacity = 1;
      item.style.transform = "translateY(0)";
      item.style.transition = `opacity 1s ease ${
        index * 0.2
      }s, transform 1s ease ${index * 0.2}s`;
    });

    const sectionTitles = document.querySelectorAll(".section-title");
    sectionTitles.forEach((title, index) => {
      title.style.opacity = 1;
      title.style.transform = "translateY(0)";
      title.style.transition = `opacity 1s ease ${
        index * 0.2
      }s, transform 1s ease ${index * 0.2}s`;
    });

    const sections = ["#video-cards", "#cpu", "#motherboard"];
    sections.forEach((selector) => {
      const cards = document.querySelectorAll(`${selector} .card`);
      cards.forEach((card, index) => {
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
        card.style.transition = `opacity 1s ease ${
          index * 0.3
        }s, transform 1s ease ${index * 0.3}s`;
      });
    });
  }, 500);
});

document.querySelectorAll(".navbar-links a").forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = 40;
        const top =
          target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: top,
          behavior: "smooth",
        });
      }
    }
  });
});
