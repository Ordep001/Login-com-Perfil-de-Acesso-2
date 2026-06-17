const usuario =
    JSON.parse(
        sessionStorage.getItem("usuarioLogado")
    );

if (!usuario) {
    location.href = "index.html";
}

document.getElementById("titulo")
    .textContent =
    `Bem-vindo(a), ${usuario.nome}`;

document.getElementById("dados")
    .innerHTML = `
        <p><strong>E-mail:</strong> ${usuario.email}</p>
        <p><strong>Cargo:</strong> ${usuario.cargo}</p>
        <p><strong>Departamento:</strong> ${usuario.departamento}</p>
    `;

function logout() {

    sessionStorage.removeItem(
        "usuarioLogado"
    );

    location.href = "index.html";
}
