function abrePopup(template, width, title) {
    document.getElementById(template).style.display='block';

    for (let index = 0; index < document.querySelectorAll(".w3-modal-content").length; index++) {
        document.querySelectorAll(".w3-modal-content")[index].style.width = width;
    }
    
    for (let index = 0; index < document.querySelectorAll(".title-modal").length; index++) {
        document.querySelectorAll(".title-modal")[index].innerHTML = title;
    }
}

function fechaPopup(template) {
    document.getElementById(template).style.display='none';
}

function notifica(message, sucesso) {
  var alertElement = document.createElement("div");
  alertElement.classList.add(sucesso == true ? "alert-sucess" : "alert-error");
  alertElement.textContent = message;

  document.body.appendChild(alertElement);

  setTimeout(function() {
    alertElement.style.opacity = "0";
  }, 5000);
}

function abreLoadPanel() {
  var load = document.createElement("div");
  load.classList.add("loader");

  document.body.appendChild(load);
}

function fechaLoadPanel() {
    document.getElementsByClassName("loader")[0].remove();
}

function formatarMoeda(valor){
  var moedaFormatada = valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return moedaFormatada;
}

function formatarDateTimeSpan(timespan){
  var timestamp = { seconds: timespan.seconds, nanoseconds: timespan.nanoseconds };

  var data = new Date(timestamp.seconds * 1000);

  var ano = data.getFullYear();
  var mes = ("0" + (data.getMonth() + 1)).slice(-2);
  var dia = ("0" + data.getDate()).slice(-2);

  var dateFormatted = dia + "/" + mes + "/" + ano;

  return dateFormatted;
}

function formateDataPDF(e){
  var dateString = e;
  var dateComponents = dateString.split('-');

  var reversedDateComponents = dateComponents.reverse();

  var reversedDateString = reversedDateComponents.join('-');

  return reversedDateString;
}

function baixarPDF(name, content){
  var opt = {
    margin: 0,
    filename: `${name}.pdf`,
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf().set(opt).from(content).save();
}