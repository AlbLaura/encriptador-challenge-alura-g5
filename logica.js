var botonEncriptar = document.getElementById("encriptar");
var botonDesencriptar = document.getElementById("desencriptar");
var botonCopiar = document.getElementById("copiar");
var textSalida = document.getElementById("text-salida");
var cssTextoSalida = document.getElementById("aviso-salida-texto");
var cssImagenSalida = document.getElementById("aviso-salida-imagen");
var textEncript = "";
var letras="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÀÈÌÒÙÁÉÍÓÚÝÂÊÎÔÛÃÕÄËÏÖÜŸÅÇàèìòùáéíóúýâêîôûãõäëïöüÿåç"; // no se permiten: mayusculas, letras con tilde
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
        alert('Texto copiado al portapapeles');
    })
    .catch(err => {
        console.error(err);
        alert('Error al copiar al portapapeles');
    })
}

function validarTexto(text, encrypt) {
    for (var i = 0; i < text.length; i++) {
        if(letras.indexOf(text.charAt(i), 0) != -1) {
            location.reload(true);
            return alert("Texto con mayusculas o tildes no permitido");
        }
    }
    textSalida.innerHTML = text;
    return alertaMensaje(text, encrypt);
}

function displayAviso() {
    cssImagenSalida.style.display = "none";
    cssTextoSalida.style.display = "block";
    botonCopiar.style.display = "block";
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

    displayAviso();
    validarTexto(textEncript, "Encriptado");
}

function desencriptarMensaje() {
    var textIngreso = document.getElementById("text-ingreso").value;

    textEncript = textIngreso.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u")

    displayAviso();
    validarTexto(textEncript, "Desencriptado");
}

botonEncriptar.onclick = encriptarMensaje;
botonDesencriptar.onclick = desencriptarMensaje;
botonCopiar.onclick = copiarTexto;