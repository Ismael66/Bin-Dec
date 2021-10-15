const numeroBinario = document.getElementById("binario");
let numeroDecimal = document.getElementById("decimal");
const somenteZeroUm = function () {
    const numeros = /[01/-]/g;
    if (numeros.test(String.fromCharCode(window.event.keyCode))) {
        return window.event.key;
    }
    else {
        window.event.preventDefault();
    }
}
const converterDecBin = function () {
    numeroBinario.value = parseInt(numeroDecimal.value).toString(2);
    // let valorDecimal = null;
    // const valorDecBin = [];
    // valorDecBin[0] = numeroDecimal.value % 2;
    // valorDecimal = Math.ceil(numeroDecimal.value / 2);
    // numeroBinario.value = valorDecBin[0];
    // for (let i = 1; valorDecimal >= 2; i++) {
    //     valorDecimal = Math.ceil(valorDecimal / 2);
    //     valorDecBin[i] = valorDecimal % 2;
    //     numeroBinario.value += valorDecBin[i];
    // }
}
const converterBinDec = function () {
    numeroDecimal.value = parseInt(numeroBinario.value, 2) >> 0;
    // numeroBinario.value.replace(/[-]/g, "");
    // const valorBinario = [];
    // let multiplicador = numeroBinario.value.length - 1;
    // for (let i = 0; i < numeroBinario.value.length; i++, multiplicador--) {
    //     valorBinario[i] = parseInt(numeroBinario.value[i]);
    //     valorBinario[i] *= Math.pow(2, multiplicador);
    // }
    // if (valorBinario.length === numeroBinario.value.length) {
    //     let soma = valorBinario.reduce(function (soma, i) {
    //         return soma + i;
    //     });
    //     numeroDecimal.value = soma;
    // }
}
const start = function () {
    numeroBinario.onblur = converterBinDec;
    numeroDecimal.onblur = converterDecBin;
    numeroBinario.onkeydown = function (event) {
        if (event.keyCode === 13) {
            converterBinDec();
        }
    }
    numeroDecimal.onkeydown = function (event) {
        if (event.keyCode === 13) {
            converterDecBin();
        }
    }
}
start();
numeroBinario.addEventListener("keypress", somenteZeroUm);