var botonEncriptar = document.getElementById("encriptar");
var botonDesencriptar = document.getElementById("desencriptar");
var botonCopiar = document.getElementById("copiar");
var textSalida = document.getElementById("text-salida");
var cssSalidaText = document.getElementsByClassName("text-salida");
var cssSalidaImagen = document.getElementsByClassName("aviso-salida");
var letras="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÀÈÌÒÙÁÉÍÓÚÝÂÊÎÔÛÃÕÄËÏÖÜŸÅÇàèìòùáéíóúýâêîôûãõäëïöüÿåç"; // no se permiten: mayusculas, letras con tilde
var textEncript = "";
var vocales = ["e", "i", "a", "o", "u"];
var vocalesEncriptadas = {
    "e":"enter",
    "i":"imes",
    "a":"ai",
    "o":"ober",
    "u":"ufat"
};

function alertaMensaje(text, encrypt) {
    if (text) {
        alert(encrypt + " con exito!");
    } else {
        alert("Ingrese un texto para encriptar");
    }
}

function copiarTexto() {

    navigator.clipboard.writeText(textSalida.value)
    .then(() => {
    console.log('Texto copiado al portapapeles')
    })
    .catch(err => {
        console.error('Error al copiar al portapapeles:', err)
    })
}

function validarTexto(text) {
    for (var i = 0; i < text.length; i++) {
        if(letras.indexOf(text.charAt(i), 0) != -1) {
            console.log("no permitido");
            location.reload(true);
            return alert("Texto con mayusculas o tildes no permitido");
        }
    }
    textSalida.innerHTML = text;
    console.log("permitido");
    return alertaMensaje(text, "Encriptado");
}

function encriptarMensaje() {
    var textIngreso = document.getElementById("text-ingreso").value;

    for (i = 0; i < textIngreso.length; i++) {
        var caracter = textIngreso[i];
        if (vocales.includes(caracter)) {
            textEncript += vocalesEncriptadas[caracter];
        } else {
            textEncript += caracter;
        }
    }

    validarTexto(textEncript);
}

function desencriptarMensaje() {
    var textIngreso = document.getElementById("text-ingreso").value;

    textEncript = textIngreso.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u")

    validarTexto(textEncript);
}

botonEncriptar.onclick = encriptarMensaje;
botonDesencriptar.onclick = desencriptarMensaje;
botonCopiar.onclick = copiarTexto;