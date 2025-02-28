const XLSX = require("xlsx");
const path = require("path");
const fs = require("fs");

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const addRegistrationToExcel = async (userData) => {
  const filePath = path.join(uploadsDir, "registrations.xlsx");

  // Define headers
  const headers = [
    "Registracijos data",
    "Vardas",
    "Pavardė",
    "Pareigos",
    "Darbovietė",
    "El. paštas",
    "Tel. numeris",
    "Vertimo priemonė",
    "Bilietų skaičius",
  ];

  try {
    let workbook;
    let worksheet;
    let existingData = [];

    // Check if file exists
    if (fs.existsSync(filePath)) {
      // Read existing workbook
      workbook = XLSX.readFile(filePath);
      const sheetName = workbook.SheetNames[0];
      worksheet = workbook.Sheets[sheetName];

      // Convert existing data to JSON
      existingData = XLSX.utils.sheet_to_json(worksheet);
    } else {
      // Create new workbook
      workbook = XLSX.utils.book_new();

      // Create empty worksheet with headers
      worksheet = XLSX.utils.aoa_to_sheet([headers]);
      XLSX.utils.book_append_sheet(workbook, worksheet, "Registracijos");
    }

    // Prepare new data row
    const date = new Date().toLocaleString("lt-LT");
    const newRow = {
      [headers[0]]: date,
      [headers[1]]: userData.vardas,
      [headers[2]]: userData.pavarde,
      [headers[3]]: userData.pareigos,
      [headers[4]]: userData.darboviete,
      [headers[5]]: userData.email,
      [headers[6]]: userData.phone || "",
      [headers[7]]: userData.vertimasPriemone ? "Taip" : "Ne",
      [headers[8]]: userData.tickets.length,
    };

    // Add new data row to existing data
    existingData.push(newRow);

    // Convert data back to worksheet
    const newWorksheet = XLSX.utils.json_to_sheet(existingData, {
      header: headers,
    });

    // Apply column widths
    const colWidths = headers.map(() => ({ wch: 20 }));
    newWorksheet["!cols"] = colWidths;

    // Replace existing worksheet with updated one
    workbook.Sheets[workbook.SheetNames[0]] = newWorksheet;

    // Write workbook to file
    XLSX.writeFile(workbook, filePath);
    return true;
  } catch (error) {
    console.error("Excel creation error:", error);
    return false;
  }
};

module.exports = {
  addRegistrationToExcel,
};
