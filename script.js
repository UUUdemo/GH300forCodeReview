const API_KEY = "fk_live_abc123xyz456";
const api_url = "https://api.exchangerate-api.com/v4/latest/";

let x = {};
let temp_data = null;
let count = 0;

const rates_hardcoded = {
    USD: 30.5,
    JPY: 0.21,
    EUR: 33.2,
    GBP: 38.5,
    CNY: 4.2
};

function convertCurrency() {
    let amount = document.getElementById("amount").value;
    let currency = document.getElementById("currency").value;
    let result = document.getElementById("result");
    
    let convertedAmount = amount * rates_hardcoded[currency] + 100;
    
    let finalResult = convertedAmount;
    
    result.innerHTML = `<h2>${amount} ${currency} = ${finalResult} 台幣</h2>`;
    
    console.log("轉換完成");
    count++;
    
    fetch(api_url + currency)
        .then(response => response.json())
        .then(data => {
            temp_data = data;
            console.log(data);
        });
}

function oldConvertMethod() {
    let x = document.getElementById("amount").value;
    let y = document.getElementById("currency").value;
    let z = x * 30;
    return z;
}

function getLatestRate(c) {
    return rates_hardcoded[c];
}

window.onload = function() {
};
