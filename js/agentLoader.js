const SHEET_ID = "1AjMlzOggeNCJO5Oao6OyAlNs_CLRqmWapEoEvaTSOI8";

const SHEET_MAP = {
  "AEO": ["ลำดับ", "ชื่อไทย", "ชื่ออังกฤษ", "ติดต่อ", "เว็บไซต์"],
  "PORT": ["ลำดับ", "ชื่อผู้ประกอบการ", "ติดต่อ", "อีเมล"],
  "TIFFA-MARK": ["ลำดับ", "ชื่อผู้ประกอบการ"]
};

let allRows = [];
let currentSheet = "AEO";
let currentPage = 1;
const pageSize = 25;

document.addEventListener("DOMContentLoaded", () => {
  loadAgents(currentSheet);
});

function loadAgents(sheetName) {
  currentSheet = sheetName;
  currentPage = 1;
  highlightActiveButton(sheetName);

  const query = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${sheetName}`;

  fetch(query)
    .then((res) => res.text())
    .then((data) => {
      const json = JSON.parse(data.substring(47).slice(0, -2));
      allRows = json.table.rows;
      const headers = SHEET_MAP[sheetName];

      renderTableHeader(headers);
      renderTableBody(currentPage);
      renderPagination();
    })
    .catch((err) => {
      console.error("โหลดข้อมูลไม่สำเร็จ:", err);
    });
}

function renderTableHeader(headers) {
  const thead = document.getElementById("tableHead");
  thead.innerHTML = "";

  const tr = document.createElement("tr");
  headers.forEach(header => {
    const th = document.createElement("th");
    th.textContent = header;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
}

function renderTableBody(page) {
  const tbody = document.getElementById("agentTableBody");
  tbody.innerHTML = "";

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const rowsToShow = allRows.slice(start, end);
  const colCount = SHEET_MAP[currentSheet].length;

  rowsToShow.forEach((row) => {
    const tr = document.createElement("tr");
    for (let i = 0; i < colCount; i++) {
      const cell = row.c[i]?.v || "-";
      const td = document.createElement("td");

      
      if (i === 4) {
        td.classList.add("col-wide");
      }

      if (isValidURL(cell)) {
        td.innerHTML = `<a href="${cell}" target="_blank">${cell}</a>`;
      } else {
        td.textContent = cell;
      }

      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  });
}


function renderPagination() {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  const totalPages = Math.ceil(allRows.length / pageSize);

  const ul = document.createElement("ul");
  ul.className = "pagination";

  // 🔹 ก่อนหน้า
  const prevLi = document.createElement("li");
  prevLi.className = "page-item" + (currentPage === 1 ? " disabled" : "");

  const prevLink = document.createElement("a");
  prevLink.className = "page-link";
  prevLink.href = "#";
  prevLink.textContent = "ก่อนหน้า";

  prevLink.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      renderTableBody(currentPage);
      renderPagination();
    }
  });

  prevLi.appendChild(prevLink);
  ul.appendChild(prevLi);

  // 🔹 ปุ่มเลขหน้า
  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    li.className = "page-item" + (i === currentPage ? " active" : "");

    const a = document.createElement("a");
    a.className = "page-link";
    a.href = "#";
    a.textContent = i;

    a.addEventListener("click", (e) => {
      e.preventDefault();
      currentPage = i;
      renderTableBody(currentPage);
      renderPagination();
    });

    li.appendChild(a);
    ul.appendChild(li);
  }

  // 🔹 ถัดไป
  const nextLi = document.createElement("li");
  nextLi.className = "page-item" + (currentPage === totalPages ? " disabled" : "");

  const nextLink = document.createElement("a");
  nextLink.className = "page-link";
  nextLink.href = "#";
  nextLink.textContent = "ถัดไป";

  nextLink.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPage < totalPages) {
      currentPage++;
      renderTableBody(currentPage);
      renderPagination();
    }
  });

  nextLi.appendChild(nextLink);
  ul.appendChild(nextLi);

  // 🔹 แสดงผล
  pagination.appendChild(ul);
}


function isValidURL(str) {
  try {
    new URL(str);
    return true;
  } catch (_) {
    return false;
  }
}

function highlightActiveButton(sheetName) {
    const buttons = document.querySelectorAll(".btn-sheet");
    buttons.forEach(btn => {
      const btnSheet = btn.getAttribute("data-sheet");
      if (btnSheet === sheetName) {
        btn.classList.add("btn-active");
      } else {
        btn.classList.remove("btn-active");
      }
    });
  }
  