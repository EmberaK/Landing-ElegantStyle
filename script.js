document.addEventListener("DOMContentLoaded", function () {
  // Smooth Scroll for Internal Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Slider functionality
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Hide all slides initially except the first one
  for (let i = 1; i < slides.length; i++) {
    slides[i].style.opacity = 0;
    slides[i].style.zIndex = 0;
  }

  // Function to change slide
  function nextSlide() {
    // Hide current slide
    slides[currentSlide].style.opacity = 0;
    slides[currentSlide].style.zIndex = 0;

    // Move to next slide or go back to first
    currentSlide = (currentSlide + 1) % slides.length;

    // Show new current slide
    slides[currentSlide].style.opacity = 1;
    slides[currentSlide].style.zIndex = 1;
  }

  // Change slide every 5 seconds
  setInterval(nextSlide, 5000);

  // Testimonial slider
  const testimonialSlides = document.querySelectorAll(".testimonial-slide");
  const dots = document.querySelectorAll(".dot");
  let currentTestimonial = 0;

  function showTestimonial(index) {
    // Hide all testimonials
    testimonialSlides.forEach((slide) => {
      slide.classList.remove("active");
    });
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    // Show the selected testimonial
    testimonialSlides[index].classList.add("active");
    dots[index].classList.add("active");
    currentTestimonial = index;
  }

  // Add click event to dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showTestimonial(index);
    });
  });

  // Auto rotate testimonials
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
    showTestimonial(currentTestimonial);
  }, 7000);

  // Back to top button
  const backToTopButton = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  backToTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
