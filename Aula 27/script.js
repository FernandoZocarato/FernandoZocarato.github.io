function livro(nome, ano, autor) {
  const nomeMaior = nome.toUpperCase();
  const totAno = 2050 - ano;
  const livroAutor = nome + " por " + autor;
  const todos = {
    nome: nomeMaior,
    totAno,
    livroAutor,
  };
  return todos;
}

const livroRetorno = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");

console.log(livroRetorno);
