function loadComponent(id, path) {
  return fetch(path)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

// เรียกใช้งานตามลำดับที่ถูกต้อง
loadComponent("header", "components/header.html").then(() => {
  loadComponent("navbar", "components/navbar.html").then(() => {
    setupBurgerMenu(); 
    setActiveMenu(); 
  });
});

loadComponent("footer", "components/footer.html");
