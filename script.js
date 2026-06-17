const usuario =
    JSON.parse(
        sessionStorage.getItem("usuarioLogado")
    );

if (!usuario) {
    location.href = "index.html";
}

if (usuario.tipo !== "admin") {
    location.href = "boasvindas.html";
}

const funcionarios =
    JSON.parse(localStorage.getItem("funcionarios")) || [];

mostrarFuncionarios();

function mostrarFuncionarios() {

    const lista =
        document.getElementById("listaFuncionarios");

    lista.innerHTML = "";

    funcionarios.forEach(f => {

        const card =
            document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <h3>${f.nome}</h3>
            <p>${f.email}</p>
            <p>${f.cargo}</p>
            <p>${f.departamento}</p>
        `;

        lista.appendChild(card);
    });

    document.getElementById("total")
        .textContent =
        funcionarios.length;
}

function logout() {

    sessionStorage.removeItem(
        "usuarioLogado"
    );

    location.href = "index.html";
}
