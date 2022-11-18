class Produto {
  constructor() {
    this.id = 1;
    this.arrayProdutos = [];
  }
  salvar() {
    let produto = this.lerDados();

    if (this.validaCampos(produto)) {
      this.adicionar(produto);
      this.cancelar();
    }
    console.log(this.arrayProdutos);
  }
  adicionar(produto) {
    this.arrayProdutos.push(produto);
    this.id++;
  }
  lerDados() {
    let produto = {};
    produto.id = this.id;
    produto.nomeProduto = document.getElementById("produto").value;
    produto.valor = document.getElementById("valor").value;

    return produto;
  }
  cancelar() {
    document.getElementById("produto").value = "";
    document.getElementById("valor").value = "";
  }
  validaCampos(produto) {
    let msg = "";
    if (produto.nomeProduto === "") {
      msg += "- Informe o nome do produto\n";
    }
    if (produto.valor === "") {
      msg += "- Informe o preço do produto\n";
    }
    if (msg != "") {
      alert(msg);
      return false;
    }
    return true;
  }
}

const produto = new Produto();
