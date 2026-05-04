(function () {
  "use strict";

  /* ──────────────────────────────────────────────────────────────
     1. HAMBURGER / MOBILE MENU TOGGLE
  ────────────────────────────────────────────────────────────── */
  const hamburger  = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.addEventListener("click", function () {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  /* Close menu when any mobile nav link is tapped */
  mobileMenu
    .querySelectorAll("a.mobile-link, .mobile-acc-content a")
    .forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("open");
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });

  /* ──────────────────────────────────────────────────────────────
     2. CLASS ACCORDION (MOBILE)
  ────────────────────────────────────────────────────────────── */
  const accBtn     = document.getElementById("classAccBtn");
  const accContent = document.getElementById("classAccContent");

  accBtn.addEventListener("click", function () {
    const isOpen = accContent.classList.toggle("open");
    accBtn.classList.toggle("open", isOpen);
    accBtn.setAttribute("aria-expanded", isOpen);
  });

  /* ──────────────────────────────────────────────────────────────
     3. SCROLL-REVEAL  (IntersectionObserver)
  ────────────────────────────────────────────────────────────── */
  const reveals  = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);   // fire once only
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  reveals.forEach(function (el) { observer.observe(el); });

  /* ──────────────────────────────────────────────────────────────
     4. STAGGERED CARD ANIMATIONS
  ────────────────────────────────────────────────────────────── */
  document
    .querySelectorAll(
      ".classes-grid .class-card, .features-grid .feature-item, .testi-grid .testi-card"
    )
    .forEach(function (card, i) {
      card.style.transitionDelay = i * 0.07 + "s";
    });

})();
