// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

// Requisitos:
// - Deve funcionar apenas com letras minúsculas
// - Não devem ser utilizados letras com acentos nem caracteres especiais
// - Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

// Por exemplo:
// "gato" => "gaitober"
// gaitober" => "gato"

const inputTexto  = document.querySelector(".input-texto");
const outputTexto = document.querySelector("#output-texto");



function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    outputTexto.value = textoEncriptado;
    inputTexto.value = "";

    document.getElementById("output-home").style.display = "none";
    document.getElementById("output-end").style.display = "block";

}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"] , ["i","imes"] , ["a" , "ai"] , ["o", "ober"] , ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value);
    outputTexto.value = textoDesencriptado;
    inputTexto.value = "";

    document.getElementById("output-home").style.display = "none";
    document.getElementById("output-end").style.display = "block";
    
}


function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}


function copiarTexto() {
    let textoCopiado = document.getElementById("output-texto");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999) //  é utilizado para copiar texto em dispositivos móveis
    document.execCommand("copy");
    document.querySelector(".copiar").style.background = "#3be493";
    document.querySelector(".copiar").innerHTML = "Copiado ✔";
    
    // // alert("O texto é: " + textoCopiado.value);

    
 
    // https://pt.stackoverflow.com/questions/572328/bom-dia-existe-alguma-propriedade-para-alterar-o-texto-quando-o-mouse-passar-po
    
}


  