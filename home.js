document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("item a");
    const sections = document.querySelectorAll(".section");
  
    links.forEach(link => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default behavior
  
        // Get the target section ID
        const targetId = link.getAttribute("data-target");
  
        // Hide all sections and remove "active" class
        sections.forEach(section => section.classList.remove("active"));
  
        // Show the target section
        const targetSection = document.getElementById(targetId);
        targetSection.classList.add("active");
      });
    });
  
    // Show the first section by default
    sections[0].classList.add("active");
  });