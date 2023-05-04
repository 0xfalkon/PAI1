function oblicz() {
    let kwota= parseInt(document.getElementById('kwota').value);
    let raty= parseInt(document.getElementById('raty').value);
    let procent= parseInt(document.getElementById('procent').value);
    procent = procent / 100
    let rata = document.getElementById('rata');
    let suma= document.getElementById('suma');
    rata.value = (kwota * procent/12) / (1 - (1 / Math.pow(1 + procent/12, raty)));
    suma.value = rata.value * raty;
}