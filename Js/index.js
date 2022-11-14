// "use strict";

const openModal = () =>
  document.getElementById("modal").classList.add("active");

const closeModal = () =>
  document.getElementById("modal").classList.remove("active");

const tempClient = {
  nome: "Van",
  email: "van@email.com",
  celular: "13988473807",
  cidade: "São Paulo",
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

const isValid = (name) => {
  const nameClient = document.getElementById("name").value;
  const emailClient = document.getElementById("email").value;
  const cellClient = document.getElementById("cellphone").value;
  const cityClient = document.getElementById("city").value;
  let msg = "";
  if (nameClient === "") {
    msg += "Informe o nome do Cliente \n";
  } else if (emailClient === "") {
    msg += "Informe o email do Cliente \n";
  } else if (cellClient === "") {
    msg += "Informe o celular do Cliente \n";
  } else if (cityClient === "") {
    msg += "Informe a cidade do Cliente \n";
  }

  if (msg !== "") {
    alert(msg);
    return false;
  }

  return true;
};

const save = () => {
  if (isValid()) {
    console.log("Cadastrando clientes");
  }
};

document.getElementById("registerClient").addEventListener("click", openModal);

document.getElementById("modalClose").addEventListener("click", closeModal);

document.getElementById("save").addEventListener("click", save);
