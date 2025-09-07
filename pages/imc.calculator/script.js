const resultadoContainer = document.getElementById('resultado-container');

document.getElementById('altura').addEventListener('input', function (event) {
    event.preventDefault();
    const peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;

    if (altura >= 100) {
        altura = altura / 100;
        document.getElementById('altura').value = altura;
    }

    if (peso > 0 && altura > 0) {
        const imc = peso / (altura * altura);
        document.getElementById('resultado').innerText = imc.toFixed(2);

        if (imc < 18.5) {
            document.getElementById('classificacao').innerText = 'Classificação: Abaixo do peso';
        } else if (imc < 24.9) {
            document.getElementById('classificacao').innerText = 'Classificação: Peso normal';
        } else if (imc < 29.9) {
            document.getElementById('classificacao').innerText = 'Classificação: Sobrepeso';
        } else {
            document.getElementById('classificacao').innerText = 'Classificação: Obesidade';
        }

        resultadoContainer.style.display = 'block';
    } else {
        resultadoContainer.style.display = 'none';
    }
});

//Validação de numero nos campos
document.getElementById('peso').addEventListener('input', function () {
    if (this.value <= 0) {
        this.setCustomValidity('Preencha este campo com um número maior que 0.');
    }
    else {
        this.setCustomValidity('');
    }
});
document.getElementById('altura').addEventListener('input', function () {
    if (this.value <= 0) {
        this.setCustomValidity('Preencha este campo com um número maior que 0.');
    }
    else {
        this.setCustomValidity('');
    }
});

