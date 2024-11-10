document.addEventListener("DOMContentLoaded", function () {
  const themeSwitch = document.getElementById("themeSwitch");
  const body = document.body;

  themeSwitch.addEventListener("change", function () {
    body.classList.toggle("dark-theme");
  });

  // Carousel Interaction
  const carouselItems = document.querySelectorAll(".carouselItem");
  carouselItems.forEach((item) => {
    item.addEventListener("click", () => {
      carouselItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
    });
  });

  // Smooth scroll effect for section links
  document.querySelectorAll(".navLinks a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Reveal elements on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("popUp");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".moreProducts, .footer").forEach((el) => {
    observer.observe(el);
  });
});
