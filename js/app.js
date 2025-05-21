function animateCounter(id, start, end, duration) {
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));

  let interval = setInterval(() => {
    current += increment;
    document.getElementById(id).textContent = current + "%";
    if (current == end) clearInterval(interval);
  }, stepTime);
}

// Function to check if the element is in view
function checkInView() {
  const counters = [
    { id: "count1", start: 0, end: 78, section: "#section1" },
    { id: "count2", start: 0, end: 63, section: "#section2" },
    { id: "count3", start: 0, end: 91, section: "#section3" },
  ];

  counters.forEach((counter) => {
    const section = document.querySelector(counter.section);
    const rect = section.getBoundingClientRect();
    if (
      rect.top <= window.innerHeight &&
      rect.bottom >= 0 &&
      !document.getElementById(counter.id).classList.contains("counted")
    ) {
      animateCounter(counter.id, counter.start, counter.end, 2000);
      document.getElementById(counter.id).classList.add("counted");
    }
  });
}

// Listen for scroll events
window.addEventListener("scroll", checkInView);
checkInView(); // Initial check to animate if already in view

function runClonedCounter(elemId, start, end, duration) {
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));

  let interval = setInterval(() => {
    current += increment;
    document.getElementById(elemId).textContent = current + "%";
    if (current === end) clearInterval(interval);
  }, stepTime);
}

function handleClonedScroll() {
  const clonedCounters = [
    { id: "clone-count-1", start: 0, end: 65, section: "#clone-sec-1" },
    { id: "clone-count-2", start: 0, end: 70, section: "#clone-sec-2" },
    { id: "clone-count-3", start: 0, end: 40, section: "#clone-sec-3" },
  ];

  clonedCounters.forEach((item) => {
    const section = document.querySelector(item.section);
    const rect = section.getBoundingClientRect();
    const counterEl = document.getElementById(item.id);

    if (
      rect.top <= window.innerHeight &&
      rect.bottom >= 0 &&
      !counterEl.classList.contains("cloned-counted")
    ) {
      runClonedCounter(item.id, item.start, item.end, 2000);
      counterEl.classList.add("cloned-counted");
    }
  });
}

window.addEventListener("scroll", handleClonedScroll);
handleClonedScroll(); // Run once on load

document.addEventListener("DOMContentLoaded", () => {
  showTestimonials("individuals");
});
