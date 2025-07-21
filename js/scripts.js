document.addEventListener("DOMContentLoaded", () => {
  fetchData(); // โหลดข้อมูลแต่ไม่แสดงผล
  document
    .getElementById("searchForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // ป้องกันการโหลดหน้าใหม่
      searchData();
    });
});

async function fetchData() {
  const spreadsheetId = "17jUOQdt8ThUVjEj5ZTd7ghW9prlzi7oGTOFZXO0f1RY";
  const sheetName = "ProductList";
  const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&tq&sheet=${sheetName}`;

  try {
    const response = await fetch(url);
    const text = await response.text();
    const json = JSON.parse(text.substring(47, text.length - 2));

    // โหลดข้อมูลแต่ไม่แสดงผลทันที
    window.productData = json.table.rows.map((row) => ({
      id: row.c[0]?.v || "",
      name: row.c[1]?.v || "",
      price: row.c[2]?.v || "",
      category: row.c[3]?.v || "",
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// ปรับให้แสดงผลเฉพาะตอนค้นหา
function searchData() {
  const searchTerm = document
    .getElementById("searchTerm")
    .value.toLowerCase();
  if (!window.productData) return;

  const filteredData = window.productData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.id.toLowerCase().includes(searchTerm)
  );

  displayData(filteredData);
}

function displayData(data) {
  const resultsSection = document.querySelector("#resultsSection .row");
  resultsSection.innerHTML = ""; // ล้างผลลัพธ์เก่า

  if (data.length === 0) {
    resultsSection.innerHTML = "<p class='text-center'>ไม่พบข้อมูล</p>";
    return;
  }

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "col";
    card.innerHTML = `
      <div class="card shadow-sm" onclick="goToDetails('${item.id}', '${item.name}')">
          <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">รหัสสินค้า: ${item.id}</p>
          </div>
      </div>
  `;
    resultsSection.appendChild(card);
  });
}

// ฟังก์ชันเปิดหน้า export_details.html และส่งค่าผ่าน URL
function goToDetails(id, name) {
  window.location.href = `export_details.html?id=${id}&name=${encodeURIComponent(
    name
  )}`;
}

  function toggleMalaysiaTable() {
    const table = document.getElementById("malaysiaTable");
    table.style.display = table.style.display === "none" ? "block" : "none";
  }