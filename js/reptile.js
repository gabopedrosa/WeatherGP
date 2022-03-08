let formButton = document.getElementById("form-button");
let formInputCity = document.getElementById("input-city");
let resultContent = document.getElementById("result-content");
let resultTemp = document.getElementById('result-temp');
let resultDesc = document.getElementById('result-desc');
let resultIcon = document.getElementById('icon')
let cardContent = document.getElementById('card-content');

formButton.addEventListener("click", function() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${formInputCity.value}&units=metric&appid=18857837f0f249c33307a95336813959&lang=pt_br`)
        .then(response => response.json() )
        .then(data => {
            let validarCidade = data['name'];
            let validarTemp = data['main']['temp'];
            let validarDesc = data['weather'][0]['description'];
            let validarIcon = data['weather'][0]['icon'];

            resultIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${validarIcon}@4x.png ">`;
            resultContent.innerHTML = '<h4>'+validarCidade;
            resultTemp.innerHTML = validarTemp+' Graus Celsius';
            resultDesc.innerHTML = validarDesc;
            
        })
        .catch(err => alert("Cidade inserida inválida."))

        

}, false); 


