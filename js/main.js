const textArea1 = document.getElementById("ttc");
const btn = document.getElementById("convert-button");
const desencriptedBtn = document.getElementById("desencripted-button");
const showString = document.getElementById("encripted-area");

const handleCopy = () => {
  const cb = navigator.clipboard;
  cb.writeText(showString.value);
  console.log("funciono");
};
const encript = () => {
  let areaValue = textArea1.value;

  let encriptedText = areaValue
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  if (areaValue) {
    showString.innerHTML = `<p>${encriptedText}</p>
    <button id="copy-btn" >copiar</button>`;
    document.getElementById("copy-btn").addEventListener("click", () => {
      const cb = navigator.clipboard;
      cb.writeText(encriptedText);
      console.log("funciono");
    });

    showString.style.justifyContent = "space-between";
  } else {
    showString.innerHTML = `<img src="./img/Contemplating-bro.png" alt="" srcset="">
    <p>Ningun mensaje fue encontrado</p>
    <p>ingresa el texto que desees encriptar o desencriptar.</p>`;
    showString.style.justifyContent = "center";
    copyBtn.style.display = "none";
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

  if (areaValue) {
    showString.innerHTML = `<p>${encriptedText}</p>
    <button id="copy-btn" >copiar</button>`;
    document.getElementById("copy-btn").addEventListener("click", () => {
      const cb = navigator.clipboard;
      cb.writeText(encriptedText);
      console.log("funciono");
    });
    showString.style.justifyContent = "space-between";
  } else {
    showString.innerHTML = `<img src="./img/Contemplating-bro.png" alt="" srcset="">
      <p>Ningun mensaje fue encontrado</p>
      <p>ingresa el texto que desees encriptar o desencriptar.</p>`;
    showString.style.justifyContent = "center";
    copyBtn.style.display = "none";
  }
};

btn.addEventListener("click", encript);
desencriptedBtn.addEventListener("click", desencript);
