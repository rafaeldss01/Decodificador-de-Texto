function criptografar() {
    let texto = document.getElementById("inputText").value;
    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    exibirResultado(textoCriptografado);
}

function descriptografar() {
    let texto = document.getElementById("inputText").value;
    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    exibirResultado(textoDescriptografado);
}

function exibirResultado(texto) {
    document.getElementById("placeholder").style.display = "none";
    document.querySelector('.placeholder-text').style.display = "none";
    document.querySelector('.description-text').style.display = "none";
    
    const outputText = document.getElementById("outputText");
    const copyButton = document.getElementById("copyButton");
    outputText.style.display = "block";
    outputText.value = texto;
    copyButton.style.display = "block";
}

function copiarTexto() {
    const outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
}
