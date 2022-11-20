// function register(element) {
//   const username = element.children.username.value;
//   const password = element.children.password.value;
//   const passwordConfirmation = element.children.passwordConfirmation.value;

//   let isValid = validation(username, password, passwordConfirmation);

//   if (isValid) {
//     if (password === passwordConfirmation) {
//       alert(`Usuário ${username} logado com sucesso`);
//     } else {
//       alert("As senhas não conferem");
//     }

//     console.log({ username, password, passwordConfirmation });
//   }
// }

// const validation = (username, password, passwordConfirmation) => {
//   let msg = "";
//   if (username == "") {
//     msg += "- Informe o nome do usuário\n";
//   }
//   if (password == "") {
//     msg += "- Informe o password\n";
//   }
//   if (passwordConfirmation == "") {
//     msg += "- Informe a confirmação do password\n";
//   }
//   if (msg != "") {
//     alert(msg);
//     return false;
//   }
//   return true;
// };

function register(ev) {
  console.log(ev.currentTarget);
}

const btn = document.getElementById("register");
const remEvent = document.getElementById("removeRegister");

btn.addEventListener("click", register);

function remove() {
  btn.removeEventListener("click", register);
  alert("Event remove");
}

remEvent.addEventListener("click", remove);
