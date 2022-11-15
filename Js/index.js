// "use strict";

const openModal = () =>
  document.getElementById("modal").classList.add("active");

const closeModal = () => {
  clearFields();
  document.getElementById("modal").classList.remove("active");
};

const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("db_client")) ?? [];
const setLocalStorage = (dbClient) =>
  localStorage.setItem("db_client", JSON.stringify(dbClient));

const createClient = (client) => {
  const dbClient = getLocalStorage();
  console.log(dbClient);
  dbClient.push(client);
  setLocalStorage(dbClient);
};

const readClient = () => getLocalStorage();

const updateClient = (index, client) => {
  const dbClient = readClient();
  dbClient[index] = client;
  setLocalStorage(dbClient);
};

const deleteClient = (index) => {
  const dbClient = readClient();
  dbClient.splice(index, 1);
  setLocalStorage(dbClient);
};

const save = () => {
  if (isValid()) {
    const client = {
      name: document.getElementById("name").value,
      niver: document.getElementById("birthday").value,
      cell: document.getElementById("cellphone").value,
      city: document.getElementById("city").value,
    };
    createClient(client);
    closeModal();
  }
};

const createRow = () => {};

const updateTable = () => {
  const dbClient = readClient();
  dbClient.forEach(createRow);
};

const clearInputs = () => {
  document.getElementById("name").value = "";
  document.getElementById("birthday").value = "";
  document.getElementById("cellphone").value = "";
  document.getElementById("city").value = "";
};

const clearFields = () => {
  const fields = document.querySelectorAll(".modal-field");
  fields.forEach((field) => {
    field.value = "";
  });
};

const isValid = () => {
  const nameClient = document.getElementById("name").value;
  const birthdayClient = document.getElementById("birthday").value;
  const cellClient = document.getElementById("cellphone").value;
  const cityClient = document.getElementById("city").value;
  let msg = "";
  if (nameClient === "") {
    msg += "- Informe o nome do Cliente \n";
  }
  if (birthdayClient === "") {
    msg += "- Informe o email do Cliente \n";
  }
  if (cellClient === "") {
    msg += "- Informe o celular do Cliente \n";
  }
  if (cityClient === "") {
    msg += "- Informe a cidade do Cliente \n";
  }

  if (msg !== "") {
    alert(msg);
    return false;
  }
  return true;
};

document.getElementById("registerClient").addEventListener("click", openModal);

document.getElementById("modalClose").addEventListener("click", closeModal);

document.getElementById("save").addEventListener("click", save);
