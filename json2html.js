// json2html.js
export default function json2html(data) {
  // Find all unique keys for table columns
  const columns = [...new Set(data.flatMap(Object.keys))];

  // Start the HTML table
  let html = `<table data-user="pguruprasad777@gmail.com">\n`;
  
  // Add the header row with column names
  html += "  <thead>\n    <tr>";
  columns.forEach(col => {
    html += `<th>${col}</th>`;
  });
  html += "</tr>\n  </thead>\n";

  // Add the body rows with data
  html += "  <tbody>\n";
  data.forEach(row => {
    html += "    <tr>";
    columns.forEach(col => {
      html += `<td>${row[col] !== undefined ? row[col] : ""}</td>`;
    });
    html += "</tr>\n";
  });
  html += "  </tbody>\n</table>";

  return html;
}
