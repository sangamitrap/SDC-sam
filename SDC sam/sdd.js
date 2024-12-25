// script.js

document.getElementById("generateInvoice").addEventListener("click", () => {
    // Get form inputs
    const customerName = document.getElementById("customerName").value;
    const customerAddress = document.getElementById("customerAddress").value;
    const itemDescription = document.getElementById("itemDescription").value;
    const quantity = parseInt(document.getElementById("quantity").value, 10);
    const pricePerUnit = parseFloat(document.getElementById("pricePerUnit").value);
    const taxRate = parseFloat(document.getElementById("taxRate").value);
  
    // Calculate totals
    const totalPrice = quantity * pricePerUnit;
    const taxAmount = (totalPrice * taxRate) / 100;
    const totalWithTax = totalPrice + taxAmount;
  
    // Display invoice details
    document.getElementById("displayCustomerName").textContent = customerName;
    document.getElementById("displayCustomerAddress").textContent = customerAddress;
  
    const invoiceTableBody = document.getElementById("invoiceTableBody");
    invoiceTableBody.innerHTML = `
      <tr>
        <td>${itemDescription}</td>
        <td>${quantity}</td>
        <td>$${pricePerUnit.toFixed(2)}</td>
        <td>${taxRate}%</td>
        <td>$${totalWithTax.toFixed(2)}</td>
      </tr>
    `;
  
    document.getElementById("totalAmount").textContent = totalWithTax.toFixed(2);
    document.getElementById("invoice").classList.remove("hidden");
  });
  
  // Optional: Add PDF download functionality (using libraries like jsPDF)
  document.getElementById("downloadPDF").addEventListener("click", () => {
    alert("Download PDF functionality can be added using libraries like jsPDF.");
  });