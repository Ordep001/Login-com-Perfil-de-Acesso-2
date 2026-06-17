const funcionarios =
    JSON.parse(localStorage.getItem("funcionarios")) || [];

document
    .getElementById("btnEntrar")
    .addEventListener("click", login);

function login() {

    const usuario =
        document.getElementById("login").value;

    const senha =
        document.getElementById("senha").value;

    const erro =
        document.getElementById("erro");

    if (usuario === "admin" && senha === "123") {

        sessionStorage.setItem(
            "usuarioLogado",
            JSON.stringify({ tipo: "admin" })
        );

        location.href = "controle.html";
        return;
    }

    const funcionario = funcionarios.find(f =>
        f.email === usuario &&
        f.senha === senha
    );

    if (funcionario) {

        sessionStorage.setItem(
            "usuarioLogado",
            JSON.stringify(funcionario)
        );

        location.href = "boasvindas.html";
    }
    else {
        erro.textContent =
            "Login ou senha inválidos!";
    }
}
