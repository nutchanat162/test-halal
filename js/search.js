const SHEET_ID = "17jUOQdt8ThUVjEj5ZTd7ghW9prlzi7oGTOFZXO0f1RY";
const SHEET_NAME = "ProductList";
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_NAME}`;

let productData = [];

document.addEventListener("DOMContentLoaded", () => {
  fetchData();

  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchTerm");

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchData();
  });
  // ✅ รองรับฟอร์ม mobile ด้วย
  const searchFormMobile = document.getElementById("searchFormMobile");
  const searchInputMobile = document.getElementById("searchTermMobile");

  if (searchFormMobile && searchInputMobile) {
    searchFormMobile.addEventListener("submit", (e) => {
      e.preventDefault();
      searchDataMobile();
    });

    searchInputMobile.addEventListener("input", () => {
      showSuggestionsMobile(searchInputMobile.value.trim());
    });
  }
  // ✅ รองรับฟอร์ม mobile ด้วย
  searchInput.addEventListener("input", () => {
    showSuggestions(searchInput.value.trim());
  });

  document.addEventListener("click", (event) => {
    const suggestionBox = document.getElementById("suggestion-box");
    if (event.target !== suggestionBox) {
      suggestionBox.innerHTML = "";
    }
  });
});

function fetchData() {
  fetch(SHEET_URL)
    .then((res) => res.text())
    .then((data) => {
      const jsonData = JSON.parse(data.substring(47).slice(0, -2));
      const rows = jsonData.table.rows;
      productData = rows.map((row) => ({
        id: row.c[0]?.v || "",
        name: row.c[1]?.v || "",
      }));
    });
}

function searchData() {
  const searchTerm = document
    .getElementById("searchTerm")
    .value.trim()
    .toLowerCase();
  if (!searchTerm) return;

  const results = productData.filter(
    ({ id, name }) =>
      id.toLowerCase().includes(searchTerm) ||
      name.toLowerCase().includes(searchTerm)
  );

  displayData(results, searchTerm);
}
function searchDataMobile() {
  const searchTerm = document
    .getElementById("searchTermMobile")
    .value.trim()
    .toLowerCase();
  if (!searchTerm) return;

  const results = productData.filter(
    ({ id, name }) =>
      id.toLowerCase().includes(searchTerm) ||
      name.toLowerCase().includes(searchTerm)
  );

  displayData(results, searchTerm);
}

function showSuggestionsMobile(input) {
  const suggestionBox = document.getElementById("suggestion-box");
  suggestionBox.innerHTML = "";

  if (!input) return;

  const suggestions = productData
    .filter((item) => item.name.toLowerCase().includes(input.toLowerCase()))
    .slice(0, 8);

  suggestions.forEach((item) => {
    const div = document.createElement("div");
    div.textContent = item.name;
    div.addEventListener("click", () => {
      document.getElementById("searchTermMobile").value = item.name;
      suggestionBox.innerHTML = "";
      searchDataMobile();
    });
    suggestionBox.appendChild(div);
  });
}

function displayData(data, keyword = "") {
  const container = document.querySelector("#resultsSection .row");
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = `    <div class="col-12 text-center text-muted" style="font-family: 'LINESeedSansTH', 'LINE Seed Sans TH', sans-serif;">
      ไม่พบข้อมูลที่เกี่ยวข้อง
    </div>`;
    return;
  }

  const highlight = (text) => {
    const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escaped, "gi");
    return text.replace(regex, (match) => `<mark>${match}</mark>`);
  };

  data.forEach((item) => {
    const nameHighlighted = highlight(item.name);
    const idHighlighted = highlight(item.id);

    const card = document.createElement("div");
    card.className = "col-12 col-md-6 col-lg-4 mb-4";

card.innerHTML = `
  <div class="card h-100 custom-card">
    <div class="card-body d-flex flex-column justify-content-between">
      <div>
        <h5 class="card-title">${nameHighlighted}</h5>
        <p class="card-text card-code"><strong>HS Code:</strong> ${idHighlighted}</p>
      </div>
      <div class="card-buttons mt-3">
        <img src="assets/icons/flag Saudi Arabia.png"
             alt="Saudi" title="Saudi"
             class="icon-button"
             onclick="goToDetails('${item.id}', '${item.name}', 'Saudi Arabia')" />

        <img src="assets/icons/flag Malaysia.png"
             alt="Malaysia" title="Malaysia"
             class="icon-button"
             onclick="goToDetails('${item.id}', '${item.name}', 'Malaysia')" />
      </div>
    </div>
  </div>
`;


    container.appendChild(card);
  });
}

function showSuggestions(input) {
  const suggestionBox = document.getElementById("suggestion-box");
  suggestionBox.innerHTML = "";

  if (!input) return;

  const suggestions = productData
    .filter((item) => item.name.toLowerCase().includes(input.toLowerCase()))
    .slice(0, 8);

  suggestions.forEach((item) => {
    const div = document.createElement("div");
    div.textContent = item.name;
    div.addEventListener("click", () => {
      document.getElementById("searchTerm").value = item.name;
      suggestionBox.innerHTML = "";
      searchData();
    });
    suggestionBox.appendChild(div);
  });
}

function goToDetails(id, name, country) {
  const encodedName = encodeURIComponent(name);
  const encodedCountry = encodeURIComponent(country);
  window.location.href = `export_details.html?id=${id}&name=${encodedName}&country=${encodedCountry}`;
}

