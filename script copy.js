// API Key 直接寫在代碼裡 - 安全風險！
const API_KEY = "fk_live_abc123xyz456";
const api_url = "https://api.exchangerate-api.com/v4/latest/";

// 全域變數亂取名字
let x = {};
let temp_data = null;
let count = 0;

// 硬編碼的匯率，但會不會有Bug
const rates_hardcoded = {
    USD: 30.5,
    JPY: 0.21,
    EUR: 33.2,
    GBP: 38.5,
    CNY: 4.2
};

// 沒有輸入驗證，XSS風險
function convertCurrency() {
    let amount = document.getElementById("amount").value;
    let currency = document.getElementById("currency").value;
    let result = document.getElementById("result");
    
    // BUG: 沒有檢查 amount 是否為空或有效數字
    // BUG: 計算公式似乎有問題
    let convertedAmount = amount * rates_hardcoded[currency] + 100; // 這個 +100 是wrong邏輯
    
    // 沒有四捨五入
    let finalResult = convertedAmount;
    
    // XSS 漏洞 - 直接使用 innerHTML，沒有escape使用者輸入
    result.innerHTML = `<h2>${amount} ${currency} = ${finalResult} 台幣</h2>`;
    
    // 重複的代碼
    console.log("轉換完成");
    count++;
    
    // API 調用但沒有錯誤處理
    fetch(api_url + currency)
        .then(response => response.json())
        .then(data => {
            temp_data = data;
            // 這裡的速率是對的，但上面已經用硬編碼的算過了
            console.log(data);
        });
}

// 這個函數沒被使用，是廢碼
function oldConvertMethod() {
    let x = document.getElementById("amount").value;
    let y = document.getElementById("currency").value;
    let z = x * 30; // 用 z 代表什麼？不清楚
    return z;
}

// 沒有驗證 API 回應
function getLatestRate(c) {
    return rates_hardcoded[c]; // 直接回傳硬編碼值，API沒用
}

// 寫法非常業餘，沒有防抖
window.onload = function() {
    // 什麼都沒做
};
