document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const hsCode = urlParams.get("id");
  const productName = urlParams.get("name");
  const country = urlParams.get("country") 

  if (country === "Malaysia") {
  document.getElementById("malaysiaTable").style.display = "block";
} else if (country === "Saudi Arabia") {
  document.getElementById("saudiTable").style.display = "block";
}


  document.getElementById("productName").textContent = productName;
  document.getElementById(
    "productHSCode"
  ).textContent = `รหัสสินค้า (HS Code): ${hsCode}`;

  try {
    const productSteps = await getProductStepFlags(hsCode);
    const allSteps = await getExportStepsJSON();

    renderSteps(allSteps, productSteps, country);
  } catch (error) {
    console.error("Error loading data:", error);
  }
});

// ✅ ดึงจาก Google Sheets: ค่าที่เป็น true ของแต่ละขั้นตอน (A1, A2, B1...)
async function getProductStepFlags(hsCode) {
  const spreadsheetId = "17jUOQdt8ThUVjEj5ZTd7ghW9prlzi7oGTOFZXO0f1RY";
  const sheetName = "ProductList";
  const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&tq&sheet=${sheetName}`;

  const res = await fetch(url);
  const text = await res.text();
  const json = JSON.parse(text.substring(47, text.length - 2));
  const rows = json.table.rows;

  for (const row of rows) {
    const code = row.c[0]?.v;
    if (code === hsCode) {
      // แปลง step flags เป็น object เช่น { A1: true, A2: false, ... }
      const headers = json.table.cols.map((col) => col.label);
      const flags = {};
      headers.forEach((h, i) => {
        if (h.match(/[ABC]\d+/)) {
          flags[h] = row.c[i]?.v === true;
        }
      });
      return flags;
    }
  }
  throw new Error("ไม่พบ HS Code ในชีท ProductList");
}

// ✅ โหลด ExportSteps จากไฟล์ JSON
async function getExportStepsJSON() {
  const res = await fetch("data/export_steps.json");
  return await res.json();
}

// ✅ แสดงผลในตารางแยกหมวด A B C
function renderSteps(allSteps, activeFlags, country) {
  const container = document.getElementById("stepSections");
  const categories = ["A", "B", "C"];

  categories.forEach((cat) => {
    const steps = allSteps.filter(
      (step) =>
        step.category === cat &&
        step.country === country &&
        activeFlags[step.id]
    );

    if (steps.length === 0) return;

    const tableHTML = `
      <div class="step-table mb-5">
        <h3 class="step-header">ขั้นตอนหมวด ${cat} (${country})</h3>
        <table class="table table-bordered">
          <thead class="table-warning">
            <tr>
              <th>กิจกรรม</th>
              <th>รายละเอียด</th>
              <th>อ่านเพิ่มเติม</th>
            </tr>
          </thead>
          <tbody>
            ${steps
              .map(
                (step) => `
              <tr>
                <td>${step.activity}</td>
                <td>${step.description}</td>
                <td>${
                  step.link
                    ? `<a href="${step.link}" target="_blank">ลิงก์</a>`
                    : "-"
                }</td>
              </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>
    `;

    container.insertAdjacentHTML("beforeend", tableHTML);
  });
}
