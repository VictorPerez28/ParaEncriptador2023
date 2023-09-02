const textArea = document.querySelector(".texto_desencriptado");
const message = document.querySelector(".texto_encriptado");

function encriptarBtn() {
    const texto_encriptado = encriptar(textArea.value);
    message.value = texto_encriptado;
    textArea.value = "";
    message.style.backgroundImage = "none";
}

function encriptar(input) {
    let reemplazodevocales = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    input = input.toLowerCase();

    for (let i = 0; i < reemplazodevocales.length; i++) {
        if (input.includes(reemplazodevocales[i][0])) {
            input = input.replaceAll(reemplazodevocales[i][0], reemplazodevocales[i][1]);
        }
    }
    return input;
}

function desencriptarBtn() {
    const texto_desencriptado = desencriptar(textArea.value);
    message.value = texto_desencriptado;
    textArea.value = "";

}

function desencriptar(input) {
    let reemplazodevocales = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    input = input.toLowerCase();
    for (let i = 0; i < reemplazodevocales.length; i++) {
        if (input.includes(reemplazodevocales[i][1])) {
            input = input.replaceAll(reemplazodevocales[i][1], reemplazodevocales[i][0]);
        }
    }
    return input;
}

//Copy and Paste buttons functionality
const copy = document.querySelector('.copia_btn');
const texto_encriptado = document.querySelector('.texto_encriptado');
const texto_desencriptado = document.querySelector('.texto_desencriptado');

copy.addEventListener("click", async () => {
    await navigator.clipboard.writeText(texto_encriptado.value);
});

/*paste.addEventListener("click", async () => {
    const read = await navigator.clipboard.readText();
    uncrypted_text.value = read;
});*/