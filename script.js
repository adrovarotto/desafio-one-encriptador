const inputTexto = document.querySelector('.input-texto');
const mensagem = document.querySelector('.mensagem');

function btnEncriptar() {
  const textoEncriptado = encriptar(inputTexto.value);
  mensagem.value = textoEncriptado;
  mensagem.style.backgroundImage="none";
}

function encriptar(stringEncriptada) {
  let matrizCodigoEncriptar = [['a', 'ai'], 
                      ['e', 'enter'],
                      ['i','imes'],
                      ['o', 'ober'],
                      ['u', 'ufat']
                     ]
  stringEncriptada = stringEncriptada.toLowerCase();
  
  for (let i = 0; i<matrizCodigoEncriptar.length; i++){
    if(stringEncriptada.includes(matrizCodigoEncriptar[i][0])){
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigoEncriptar[i][0], matrizCodigoEncriptar[i][1]);
    }
  }
  return stringEncriptada;
}

function btnDesencriptar() {
  const textEncriptado = desencriptar(inputTexto.value);
  mensagem.value = textEncriptado;
  mensagem.style.backgroundImage="none";
}

function desencriptar(stringDesencriptada) {
  let matrizCodigoDesencriptar = [['ai','a'],
                                  ['enter', 'e'],
                                  ['imes', 'i'],
                                  ['ober', 'o'],
                                  ['ufat', 'u']
                                 ]
  stringDesencriptada = stringDesencriptada.toLowerCase();
  
  for(let i = 0; i < matrizCodigoDesencriptar.length; i++) {
    if(stringDesencriptada.includes(matrizCodigoDesencriptar[i][0])) {
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigoDesencriptar[i][0], matrizCodigoDesencriptar[i][1]);
    }
  }
  return stringDesencriptada;
}

function btnCopiar() {
  mensagem.value;
  mensagem.select();
  document.execCommand('copy');
}