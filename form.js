const form = document.getElementById("submit");

form.addEventListener("click", (ev) => {
  ev.preventDefault();
  const name = document.querySelector('input[name="name"]').value;
  const address = document.querySelector('input[name= "address"]').value;
  const breadType = document.getElementById("breadType").value;
  const main = document.querySelector('input[name="main"]').value;
  const observations = document.querySelector("textarea").value;
  let salad = "";
  document
    .querySelectorAll("input[name = 'salad']:checked")
    .forEach((element) => {
      salad += " - " + element.value;
    });
  console.log({ name, address, breadType, main, observations, salad });

  alert(
    `Pedido Realizado:
    Nome do cliente : ${name}
    Endereço: ${address}
    Tipo do pão: ${breadType}
    Recheio: ${main} => Salada: ${salad} \n
    Observações: ${observations}`
  );
});

let str = "Ale Luiz de Camargo Dias";

let strArr = str.split(" ");

console.log(str);
console.log(strArr);

strArr.forEach((element, i) => {
  console.log(element, i);
});
