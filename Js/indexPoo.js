class Client {
  constructor() {
    this.dbclient = [];
  }

  openModal() {
    document.getElementById("modal").classList.add("active");
  }

  currentYear() {
    const date = new Date();
    const year = date.getFullYear();
    const footerYear = document.getElementById("year");
    footerYear.innerText = year;
  }

  closeModal() {
    // clearFields();
    document.getElementById("modal").classList.remove("active");
    const h2 = document.getElementById("client-h2");
    h2.innerText = "Novo Cliente";
  }
}

const client = new Client();

client.currentYear();

document
  .getElementById("registerClient")
  .addEventListener("click", client.openModal);

document
  .getElementById("modalClose")
  .addEventListener("click", client.closeModal);

document.getElementById("cancel").addEventListener("click", client.closeModal);
