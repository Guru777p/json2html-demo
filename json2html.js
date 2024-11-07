export default function json2html(data) {
  // Start table with a data-user attribute
  let html = '<table data-user="samithreddy888@gmail.com">';

  // Table header
  html += "<thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead>";

  // Table body
  html += "<tbody>";
  data.forEach((row) => {
    html += "<tr>";
    html += `<td>${row.Name || ""}</td>`;
    html += `<td>${row.Age || ""}</td>`;
    html += `<td>${row.Gender || ""}</td>`;
    html += "</tr>";
  });
  html += "</tbody>";

  // Close table
  html += "</table>";

  return html;
}
