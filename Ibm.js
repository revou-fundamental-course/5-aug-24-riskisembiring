const btnCalculate = () => {
    const beratBadan = parseFloat(document.getElementById('beratBadan').value);
    const tinggiBadan = parseFloat(document.getElementById('tinggiBadan').value);
    const messageBb = document.getElementById('messageBb');
    const messageTb = document.getElementById('messageTb');
    
    if (isNaN(beratBadan) || isNaN(tinggiBadan)) {
        if (isNaN(beratBadan)) {
            messageBb.textContent = 'Silahkan masukkan berat badan';
            messageBb.style.color = 'red';
        } else {
            messageBb.textContent = '';
        }
        if (isNaN(tinggiBadan)) {
            messageTb.textContent = 'Silahkan masukkan tinggi badan';
            messageTb.style.color = 'red';
        } else {
            messageTb.textContent = '';
        }
        return;
    }
    
    const convers = (tinggiBadan / 100) ** 2;
    const hasil = beratBadan / convers;
    const result = Math.ceil(hasil * 10) / 10;

    document.getElementById('resultStatusBb').innerHTML = '';
    document.getElementById('resultsBmi').innerHTML = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('resultHasil').innerHTML = '';

    if (result <= 0 || !isFinite(result)) {

    } else {
        let bmiCategory = '';
        let bmiMessage = '';
        let bmiRange = '';

        if (result < 18.5) {
            bmiCategory = 'Kekurangan berat badan';
            bmiMessage = 'Berat Badan Kurang';
            bmiRange = 'Hasil BMI diantara 0 dan 18.5';
        } else if (result < 24.9) {
            bmiCategory = 'Normal (ideal)';
            bmiMessage = 'Berat Badan Ideal';
            bmiRange = 'Hasil BMI diantara 18.5 dan 24.9';
        } else if (result < 29.9) {
            bmiCategory = 'Kelebihan berat badan';
            bmiMessage = 'Berat Badan Lebih';
            bmiRange = 'Hasil BMI diantara 25.0 dan 29.0';
        } else {
            bmiCategory = 'Kegemukan (Obesitas)';
            bmiMessage = 'Berat Badan Obesitas';
            bmiRange = 'Hasil BMI diantara 30.5 dan seterusnya';
        }

        document.getElementById('resultsBmi').innerHTML = bmiCategory;
        document.getElementById('result').innerHTML = bmiMessage;
        document.getElementById('resultHasil').innerHTML = bmiRange;
        document.getElementById('resultStatusBb').innerHTML = result;
    }
}

const btnReset = () => {
    document.getElementById("customResetButton").addEventListener("click", function() {
        var radios = document.getElementsByName("jenkel");
        radios.forEach(radio => radio.checked = false);
    });
    document.getElementById('beratBadan').value = '';
    document.getElementById('usia').value = '';
    document.getElementById('tinggiBadan').value = '';
    document.getElementById('resultsBmi').innerHTML = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('resultStatusBb').innerHTML = '';
    messageBb.textContent = '';
    messageTb.textContent = '';
}