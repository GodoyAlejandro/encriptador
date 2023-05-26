const textArea1 = document.getElementById("ttc");
const btn = document.getElementById("convert-button");
const desencriptedBtn = document.getElementById("desencripted-button");
const showString = document.getElementById("encripted-area");

const encript = () => {
  let areaValue = textArea1.value;

  let encriptedText = areaValue
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  showString.innerHTML = `<h2>${encriptedText}</h2>`;
};

const handleTextAreaChange = () => {
  let areaValue = textArea1.value;
  if (!areaValue) {
    console.log("voycamviando");
    // showString.innerHTML = `<p>Ningun mensaje fue encontrado</p>
    // <p>ingresa el texto que desees encriptar o desencriptar.</p>`;
  }
};

const desencript = () => {
  let areaValue = textArea1.value;

  let encriptedText = areaValue
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  showString.innerHTML = `<h2>${encriptedText}</h2>`;
};

btn.addEventListener("click", encript);
desencriptedBtn.addEventListener("click", desencript);
textArea1.addEventListener("focus", handleTextAreaChange);