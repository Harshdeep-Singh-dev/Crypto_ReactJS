import React, { useEffect } from 'react';
import './InfoAboutUs.css'; // Add this CSS if needed

const InfoAboutUs = () => {

  useEffect(() => {
    // Get references to elements when component is mounted
    const infoSection = document.querySelector(".info-about-us");
    const elements = infoSection.querySelectorAll("h4, p");

    // Wrap each word in a span
    elements.forEach(el => {
      const words = el.textContent.trim().split(/\s+/);
      el.innerHTML = words.map(word => `<span class="word-span">${word}</span>`).join(' ');
    });

    const wordSpans = infoSection.querySelectorAll(".word-span");

    let lastScrollY = window.scrollY; // Store last scroll position

    function lightUpWords() {
      const sectionRect = infoSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      // Add a threshold to prevent starting the effect too early
      const threshold = 100;

      // Only start lighting up when section is within the threshold of the viewport
      if (sectionRect.top > viewportHeight + threshold || sectionRect.bottom < threshold) return;

      wordSpans.forEach(span => {
        const spanRect = span.getBoundingClientRect();
        const spanMiddle = spanRect.top + spanRect.height / 2;

        // Check if the word is in the center of the screen
        const isInCenter = Math.abs(spanMiddle - viewportCenter) < 50;

        // Dim the word smoothly when scrolling up, if it was previously lit
        if (lastScrollY > window.scrollY && span.classList.contains("lit") && !isInCenter) {
          span.style.color = "#444"; // Dim it back
          span.classList.remove("lit"); // Remove the "lit" class
        }

        // Light up words if they cross the center while scrolling down
        if (isInCenter && !span.classList.contains("lit")) {
          span.style.color = "#fff"; // Light up
          span.classList.add("lit"); // Mark as lit
        }
      });

      // Update the scroll position for the next scroll event
      lastScrollY = window.scrollY;
    }

    // Event listeners for scroll and resize for lighting up text
    window.addEventListener("scroll", lightUpWords);
    window.addEventListener("resize", lightUpWords);

    // Clean up event listeners when the component is unmounted
    return () => {
      window.removeEventListener("scroll", lightUpWords);
      window.removeEventListener("resize", lightUpWords);
    };
  }, []); // Empty array means this effect runs once when the component mounts

  return (
    <section className="info-about-us">
      <h4>Not Everyone Gets It.</h4>
      <p>the story of CRYPTO begins with trust. we believe individuals who've proven their trustworthiness deserve better: better experiences, better rewards, better returns, this is the status quo we're building. make it into the club. and experience the ascension yourself.</p>
    </section>
  );
}

export default InfoAboutUs;
