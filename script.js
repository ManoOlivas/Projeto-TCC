// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Adicionar validação de formulário no login
    const loginForm = document.querySelector("form[action='index.php']"); // Formulário de login
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;

            if (!email || !senha) {
                alert("Por favor, preencha todos os campos.");
                event.preventDefault(); // Impede o envio do formulário
            }
        });
    }

    // Adicionar validação de formulário no registro
    const registerForm = document.querySelector("form[action='registrar.php']"); // Formulário de registro
    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;

            if (!nome || !email || !senha) {
                alert("Por favor, preencha todos os campos.");
                event.preventDefault(); // Impede o envio do formulário
            }
        });
    }
});

