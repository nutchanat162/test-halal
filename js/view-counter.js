document.addEventListener("DOMContentLoaded", function () {
  const totalEl = document.getElementById("totalVisits");
  const todayEl = document.getElementById("todayVisits");

  fetch("/halal-export-database/total.php")
    .then((res) => res.json())
    .then((data) => {
      totalEl.textContent = `ผู้เข้าชมเว็บไซต์ทั้งหมด ${data.totalVisits.toLocaleString()} ครั้ง`;
      todayEl.textContent = `วันนี้มีผู้เข้าชมเว็บไซต์ทั้งหมด ${data.todayVisits.toLocaleString()} ครั้ง`;
    })
    .catch(() => {
      totalEl.textContent = "โหลดไม่สำเร็จ";
      todayEl.textContent = "โหลดไม่สำเร็จ";
    });

  if (!sessionStorage.getItem("visited")) {
    fetch("/halal-export-database/track.php", {
      method: "POST",
    }).then(() => {
      sessionStorage.setItem("visited", "true");
    });
  }
});
