function calcularTarifa(distancia) {
    let tarifa;
    if (distancia < 10) {
        tarifa = 50;
    } else if (distancia >= 5 && distancia <= 15) {
        tarifa = 100;
    } else {
        tarifa = 300;
    }
    return tarifa;
}

function calcular() {
    const distancia = parseFloat(document.getElementById('distancia').value);
    if (isNaN(distancia) || distancia < 0) {
        alert('Por favor ingrese una distancia válida.');
        return;
    }
    
    const tarifa = calcularTarifa(distancia);
    document.getElementById('resultado').innerText = `La tarifa para ${distancia} km es $${tarifa}`;
}
