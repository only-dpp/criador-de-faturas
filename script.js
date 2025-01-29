const form = document.getElementById('invoice-form');
const invoiceOutput = document.getElementById('invoice-output');
const clientNameOutput = document.getElementById('client-name-output');
const clientEmailOutput = document.getElementById('client-email-output');
const serviceDescriptionOutput = document.getElementById('service-description-output');
const amountOutput = document.getElementById('invoice-amount-output');
const dueDateOutput = document.getElementById('due-date-output');
const downloadBtn = document.getElementById('download-btn');

form.addEventListener('submit', function(event) {
    event.preventDefault();


    const clientName = document.getElementById('client-name').value;
    const clientEmail = document.getElementById('client-email').value;
    const serviceDescription = document.getElementById('service-description').value;
    const amount = document.getElementById('invoice-amount').value;
    const invoiceDate = document.getElementById('invoice-date').value;
    const dueDate = document.getElementById('due-date').value;

  
    clientNameOutput.textContent = clientName;
    clientEmailOutput.textContent = clientEmail;
    serviceDescriptionOutput.textContent = serviceDescription;
    amountOutput.textContent = ` ${amount}`;
    dueDateOutput.textContent = dueDate;

    invoiceOutput.style.display = 'block';


    downloadBtn.style.display = 'inline-block';
});


downloadBtn.addEventListener('click', function() {
  
    const clientName = document.getElementById('client-name').value;
    const clientEmail = document.getElementById('client-email').value;
    const serviceDescription = document.getElementById('service-description').value;
    const amount = document.getElementById('invoice-amount').value;
    const invoiceDate = document.getElementById('invoice-date').value;
    const dueDate = document.getElementById('due-date').value;

    
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Fatura Gerada", 20, 20);
    doc.text(`Cliente: ${clientName}`, 20, 30);
    doc.text(`E-mail: ${clientEmail}`, 20, 40);
    doc.text(`Descrição: ${serviceDescription}`, 20, 50);
    doc.text(`Valor: R$ ${amount}`, 20, 60);
    doc.text(`Data de Emissão: ${invoiceDate}`, 20, 70);
    doc.text(`Data de Vencimento: ${dueDate}`, 20, 80);

    
    doc.save("fatura.pdf");
});
