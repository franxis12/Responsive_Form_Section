function submitForm(event) {
    event.preventDefault();

    const fName = document.getElementById("firstN").value.trim();
    const lastN = document.getElementById("lastN").value.trim();
    const email = document.getElementById("email").value.trim();
    const txtArea = document.getElementById("txtArea").value.trim();

    if (!fName || !lastN || !email || !txtArea) {
        alert("Por favor completa todos los campos.");
        return false;
    }

    alert("Formulario enviado correctamente.");
    return true;
}

const button = document.getElementById("btn");
button.addEventListener("click", submitForm);