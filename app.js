function validarTexto() {
    let texto = document.getElementById('inputTexto').value;
    let textoLimpio = texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Elimina acentos
    let contieneMayusculas = /[A-Z]/.test(texto);
    let contieneAcentos = /[\u00C0-\u00FF]/.test(texto);

    if (contieneMayusculas || contieneAcentos) {
        alert('Incorpora solo minúsculas y sin acento');
        return false;
    }
    return true;
}

function encriptarTexto() {
    if (!validarTexto()) return;

    let texto = document.getElementById('inputTexto').value.toLowerCase();

    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById('boxEncriptado').innerText = textoEncriptado;
    document.getElementById('contenedorOriginal').style.display = 'none';
    document.getElementById('contenedorEncriptado').style.display = 'block';
    document.getElementById('desencriptador').removeAttribute('disabled');
}



function copiarEncriptacion() {
    let textoEncriptado = document.getElementById('boxEncriptado').innerText;
    let elementoTemporal = document.createElement('textarea');
    elementoTemporal.value = textoEncriptado;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand('copy');
    document.body.removeChild(elementoTemporal);
    alert('Texto encriptado copiado al portapapeles');
}

function desencriptarTexto() {
    if (!validarTexto()) return;

    let texto = document.getElementById('inputTexto').value.toLowerCase();
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById('inputTexto').value = textoDesencriptado;
    document.getElementById('boxEncriptado').innerText = textoDesencriptado;
    document.getElementById('contenedorOriginal').style.display = 'none';
    document.getElementById('contenedorEncriptado').style.display = 'block';
    document.getElementById('desencriptador').removeAttribute('disabled');
}
