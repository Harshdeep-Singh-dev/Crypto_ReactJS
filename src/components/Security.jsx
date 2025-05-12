import React, { useEffect, useState } from "react";
import "./Security.css";

const Security = () => {
  const [opacity, setOpacity] = useState(1); // Start with full opacity

  useEffect(() => {
    const spotlight = document.createElement("div");
    spotlight.classList.add("torch-spotlight");
    document.body.appendChild(spotlight);

    // Get section and text elements
    const section = document.querySelector(".security");
    const textElements = section.querySelectorAll("h4, p");

    // Function to handle cursor movement
    const handleCursorMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      // Update spotlight position
      spotlight.style.left = `${mouseX - 150}px`; // Spotlight's radius is 150px
      spotlight.style.top = `${mouseY - 150}px`;

      // Highlight text in spotlight
      highlightTextInSpotlight(mouseX, mouseY, textElements);
    };

    // Function to highlight text in spotlight
    const highlightTextInSpotlight = (cursorX, cursorY, textElements) => {
      textElements.forEach((el) => {
        const text = el.textContent;
        el.innerHTML = text.split("").map((char) => `<span class="char">${char}</span>`).join("");

        const charSpans = el.querySelectorAll("span.char");
        charSpans.forEach((span) => {
          const charRect = span.getBoundingClientRect();
          const charCenterX = charRect.left + charRect.width / 2;
          const charCenterY = charRect.top + charRect.height / 2;

          const distance = Math.sqrt(
            Math.pow(charCenterX - cursorX, 2) + Math.pow(charCenterY - cursorY, 2)
          );

          if (distance < 150) {
            span.style.color = "#fff"; // Light up the character
            span.style.transition = "color 0.1s";
          } else {
            span.style.color = "#444"; // Dim the character
          }
        });
      });
    };

    // Add mousemove event to control spotlight position
    window.addEventListener("mousemove", handleCursorMove);

    // Handle scroll event to control opacity
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionRect = section.getBoundingClientRect();

      if (scrollY < sectionRect.top + sectionRect.height) {
        setOpacity(0.2); // Dim the section when scrolling
      } else {
        setOpacity(1); // Full opacity when past the section
      }
    };

    // Event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listeners and remove spotlight element when component unmounts
    return () => {
      window.removeEventListener("mousemove", handleCursorMove);
      window.removeEventListener("scroll", handleScroll);
      document.body.removeChild(spotlight);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <section className="security torch-target" style={{ opacity }}>
      <img src="images/safe-lock.png" alt="Safe Lock" />
      <h4>Your data isn't our business. Keeping it safe is.</h4>
      <p>
        All your personal data and transactions are encrypted and secured. There's no room for mistake because we didn't leave any.
      </p>
    </section>
  );
};

export default Security;
