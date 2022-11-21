const openModal = () =>
  document.getElementById("modal").classList.add("active");

const closeModal = () => {
  clearFields();
  document.getElementById("modal").classList.remove("active");
  const h2 = document.getElementById("client-h2");
  h2.innerText = "Novo Cliente";
};

const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("db_client")) ?? [];
const setLocalStorage = (dbClient) =>
  localStorage.setItem("db_client", JSON.stringify(dbClient));

const createClient = (client) => {
  const dbClient = getLocalStorage();
  console.log(dbClient[0]);
  dbClient.push(client);
  console.log(client);
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

let id = 1;

const save = () => {
  let dataInput = document.getElementById("birthday").value;
  data = new Date(dataInput);
  if (isValid()) {
    const client = {
      id: id++,
      name: document.getElementById("name").value,
      niver: data.toLocaleDateString("pt-BR", { timeZone: "UTC" }),
      cell: document.getElementById("cellphone").value,
      city: document.getElementById("city").value,
    };
    const index = document.getElementById("name").dataset.index;
    if (index == "new") {
      createClient(client);
      updateTable();
      closeModal();
    } else {
      updateClient(index, client);
      updateTable();
      closeModal();
    }
  }
};

const createRow = (client, index) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${client.id}</td>
    <td>${client.name}</td>
    <td>${client.niver}</td>
    <td>${client.cell}</td>
    <td>${client.city}</td>
    <td>
      <button type="button" class="button green" data-action="edit" id="edit-${index}">editar</button>
     <button type="button" class="button red" data-action="delete" id="delete-${index}">excluir</button>
    </td>
  `;
  const tbody = document.getElementById("tbodyClient");
  tbody.appendChild(newRow);
};

const updateTable = () => {
  const dbClient = readClient();
  clearTable();
  dbClient.forEach(createRow);
};

const editClient = (index) => {
  const client = readClient()[index];
  client.index = index;
  fillFields(client);
  const h2 = document.getElementById("client-h2");
  h2.innerText = `Atualizando cliente`;
  openModal();
};

const fillFields = (client) => {
  document.getElementById("name").value = client.name;
  document.getElementById("birthday").value = client.niver;
  document.getElementById("cellphone").value = client.cell;
  document.getElementById("city").value = client.city;
  document.getElementById("name").dataset.index = client.index;
};

const editDelete = (ev) => {
  if (ev.target.type == "button") {
    const [action, index] = ev.target.id.split("-");
    if (action == "edit") {
      editClient(index);
    } else {
      const client = readClient()[index];
      const responseDelete = confirm(
        `Deseja realmente excluir o cliente ${client.name}?`
      );
      if (responseDelete) {
        deleteClient(index);
        updateTable();
      }
    }
  }
};
const clearTable = () => {
  const rows = document.querySelectorAll("#tbodyClient tr");
  rows.forEach((row) => row.parentNode.removeChild(row));
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

const currentYear = () => {
  const date = new Date();
  const year = date.getFullYear();
  const footerYear = document.getElementById("year");
  footerYear.innerText = year;
};

currentYear();

function dataAtualFormatada() {
  let data = new Date(2022 - 11 - 08),
    dia = data.getDate().toString().padStart(2, "0"),
    mes = (data.getMonth() + 1).toString().padStart(2, "0"),
    ano = data.getFullYear();
  console.log(data);
  return dia + "/" + mes + "/" + ano;
}

document.getElementById("registerClient").addEventListener("click", openModal);

document.getElementById("modalClose").addEventListener("click", closeModal);

document.getElementById("save").addEventListener("click", save);

document.getElementById("cancel").addEventListener("click", closeModal);

document
  .querySelector("#tableClient > tbody")
  .addEventListener("click", editDelete);

updateTable();
