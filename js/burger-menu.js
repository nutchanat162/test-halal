function setupBurgerMenu() {
  const hamburger = document.getElementById("hamburgerToggle");
  const menu = document.getElementById("mobileSlideMenu");
  const closeBtn = document.getElementById("closeSlideMenu");

  if (hamburger && menu && closeBtn) {
    hamburger.addEventListener("click", () => {
      menu.classList.add("open");
      // ✅ ซ่อน hamburger ด้วยการเพิ่มคลาส
      hamburger.classList.add("d-none");
    });

    closeBtn.addEventListener("click", () => {
      menu.classList.remove("open");
      // ✅ แสดง hamburger กลับมา
      hamburger.classList.remove("d-none");
    });

    window.addEventListener("click", (e) => {
      if (e.target === menu) {
        menu.classList.remove("open");
        hamburger.classList.remove("d-none");
      }
    });
  } else {
    console.warn("Burger menu element not found.");
  }
}


function setActiveMenu() {
  const currentPath = window.location.pathname.split("/").pop(); // ดึงชื่อไฟล์ เช่น index.html
  const links = document.querySelectorAll(".nav-links a");

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPath) {
      link.classList.add("active");
    }
  });
}
