const excel = require("excel4node");
const path = require("path");
const fs = require("fs");

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const addRegistrationToExcel = async (userData) => {
  const filePath = path.join(uploadsDir, "registrations.xlsx");

  // Create or load workbook
  let workbook = new excel.Workbook();
  let worksheet;

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
    "Suma (€)",
  ];

  try {
    // Create new worksheet
    worksheet = workbook.addWorksheet("Registracijos");

    // Add headers style
    const headerStyle = workbook.createStyle({
      font: {
        bold: true,
        color: "#000000",
        size: 12,
      },
      fill: {
        type: "pattern",
        patternType: "solid",
        fgColor: "#CCCCCC",
      },
    });

    // Add headers
    headers.forEach((header, i) => {
      worksheet
        .cell(1, i + 1)
        .string(header)
        .style(headerStyle);
    });

    // Get existing data if file exists
    let rowNumber = 2;
    if (fs.existsSync(filePath)) {
      // Logic to read existing data could be added here
      // For now, we'll just append to the end
    }

    // Add new registration data
    const date = new Date().toLocaleString("lt-LT");
    worksheet.cell(rowNumber, 1).string(date);
    worksheet.cell(rowNumber, 2).string(userData.vardas);
    worksheet.cell(rowNumber, 3).string(userData.pavarde);
    worksheet.cell(rowNumber, 4).string(userData.pareigos);
    worksheet.cell(rowNumber, 5).string(userData.darboviete);
    worksheet.cell(rowNumber, 6).string(userData.email);
    worksheet.cell(rowNumber, 7).string(userData.phone || "");
    worksheet
      .cell(rowNumber, 8)
      .string(userData.vertimasPriemone ? "Taip" : "Ne");
    worksheet.cell(rowNumber, 9).number(userData.tickets.length);
    worksheet.cell(rowNumber, 10).number(userData.totalAmount);

    // Auto-set column widths
    headers.forEach((_, i) => {
      worksheet.column(i + 1).setWidth(20);
    });

    // Save the file
    await workbook.write(filePath);
    return true;
  } catch (error) {
    console.error("Excel creation error:", error);
    return false;
  }
};

module.exports = {
  addRegistrationToExcel,
};
