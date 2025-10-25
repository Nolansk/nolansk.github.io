document.addEventListener("DOMContentLoaded", function () {
  const sidebarSections = document.querySelectorAll(".sidebar-section");

  // Restore saved state from localStorage
  sidebarSections.forEach((section, index) => {
    const key = `sidebar-section-${index}`;
    const isOpen = localStorage.getItem(key) === "true";
    if (isOpen) section.classList.add("show");
  });

  // Save new state when toggled
  sidebarSections.forEach((section, index) => {
    const header = section.querySelector(".sidebar-item-toggle");
    if (header) {
      header.addEventListener("click", () => {
        const isOpen = section.classList.contains("show");
        localStorage.setItem(`sidebar-section-${index}`, !isOpen);
      });
    }
  });

  // Preserve scroll position
  const sidebar = document.querySelector(".sidebar");
  if (sidebar) {
    const scroll = localStorage.getItem("sidebar-scroll") || 0;
    sidebar.scrollTop = scroll;
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("sidebar-scroll", sidebar.scrollTop);
    });
  }
});
