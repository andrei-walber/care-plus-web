//Evento que espera o input no campo altura para calcular o IMC
document.getElementById('altura').addEventListener('input', function (event) {
    event.preventDefault();
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    if (altura > 0) {
        const imc = peso / (altura * altura);
        document.getElementById('resultado').innerText = imc.toFixed(2);
        if (imc < 18.5) {
            document.getElementById('classificacao').innerText = 'Classificação: Abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            document.getElementById('classificacao').innerText = 'Classificação: Peso normal';
        } else if (imc >= 25 && imc < 29.9) {
            document.getElementById('classificacao').innerText = 'Classificação: Sobrepeso';
        } else {
            document.getElementById('classificacao').innerText = 'Classificação: Obesidade';
        }
    } else if (altura === 0) {
        document.getElementById('resultado').innerText = 'Altura deve ser maior que zero.';
    } else if (altura === '') {
        document.getElementById('resultado').innerText = '';
        document.getElementById('classificacao').innerText = '';
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
