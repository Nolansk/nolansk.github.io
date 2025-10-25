// folder-sync.js
document.addEventListener("DOMContentLoaded", function() {
  // Select all sidebar sections that can toggle
  const toggles = document.querySelectorAll(".sidebar-item-toggle, .sidebar-section-toggle, .sidebar *[class*='toggle']");

  toggles.forEach(toggle => {
    // Find the folder icon inside this toggle, if it exists
    const icon = toggle.querySelector(".bi-folder, .bi-folder2-open");

    // Function to update icon based on section state
    const updateIcon = () => {
      const parent = toggle.closest("li, .sidebar-item, .sidebar-section") || toggle.parentElement;
      const isOpen = parent && parent.classList.contains("show");

      if (icon) {
        if (isOpen) icon.classList.replace("bi-folder", "bi-folder2-open");
        else icon.classList.replace("bi-folder2-open", "bi-folder");
      }
    };

    // 1️⃣ Click on toggle (chevron or text) updates the icon
    toggle.addEventListener("click", () => {
      setTimeout(updateIcon, 50); // short delay to let Quarto toggle class
    });

    // 2️⃣ Click on the folder icon also triggers toggle
    if (icon) {
      icon.addEventListener("click", (e) => {
        e.preventDefault();    // prevent default action
        toggle.click();        // simulate toggle click
      });
    }

    // 3️⃣ Initial state update
    updateIcon();
  });
});

