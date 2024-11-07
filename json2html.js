export default function json2html(data) {
  // Define the table header with specified columns
  let table = '<table data-user="ramanrahul114@gmail.com"><thead><tr>';
  const headers = ['Name', 'Age', 'Gender'];
  headers.forEach(header => table += `<th>${header}</th>`);
  table += '</tr></thead><tbody>';
  
  // Generate each row of data
  data.forEach(item => {
    table += '<tr>';
    headers.forEach(header => {
      table += `<td>${item[header] || ''}</td>`;
    });
    table += '</tr>';
  });

  table += '</tbody></table>';
  return table;
}
