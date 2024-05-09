document.getElementById('convertBtn').addEventListener('click', function() {
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const amount = parseFloat(document.getElementById("amount").value);
    
    const conversionRates = {
        USD: { 
            EUR: 0.82, 
            GBP: 0.72, 
            AUD: 1.31, 
            CAD: 1.26, 
            JPY: 110.42, 
            CHF: 0.89, 
            CNY: 6.45, 
            INR: 74.91, 
            MXN: 20.27, 
            SGD: 1.34, 
            NZD: 1.40, 
            HKD: 7.77, 
            SEK: 8.41, 
            NOK: 8.33, 
            DKK: 6.20 
        },
        EUR: { 
            USD: 1.22, 
            GBP: 0.88, 
            AUD: 1.59, 
            CAD: 1.53, 
            JPY: 133.45, 
            CHF: 1.08, 
            CNY: 7.80, 
            INR: 90.61, 
            MXN: 24.50, 
            SGD: 1.61, 
            NZD: 1.68, 
            HKD: 9.32, 
            SEK: 10.09, 
            NOK: 9.99, 
            DKK: 7.44 
        },
        GBP: { 
            USD: 1.39, 
            EUR: 1.14, 
            AUD: 1.81, 
            CAD: 1.74, 
            JPY: 151.74, 
            CHF: 1.23, 
            CNY: 8.91, 
            INR: 103.46, 
            MXN: 27.98, 
            SGD: 1.84, 
            NZD: 1.93, 
            HKD: 10.71, 
            SEK: 11.58, 
            NOK: 11.47, 
            DKK: 8.53 
        },
        AUD: { 
            USD: 0.76, 
            EUR: 0.63, 
            GBP: 0.55, 
            CAD: 0.96, 
            JPY: 87.54, 
            CHF: 0.71, 
            CNY: 5.14, 
            INR: 59.69, 
            MXN: 16.14, 
            SGD: 1.06, 
            NZD: 1.10, 
            HKD: 6.13, 
            SEK: 6.63, 
            NOK: 6.57, 
            DKK: 4.89 
        },
        CAD: { 
            USD: 0.79, 
            EUR: 0.65, 
            GBP: 0.57, 
            AUD: 1.04, 
            JPY: 90.92, 
            CHF: 0.74, 
            CNY: 5.36, 
            INR: 62.16, 
            MXN: 16.83, 
            SGD: 1.11, 
            NZD: 1.16, 
            HKD: 6.44, 
            SEK: 6.97, 
            NOK: 6.91, 
            DKK: 5.14 
        },
        JPY: { 
            USD: 0.0091, 
            EUR: 0.0075, 
            GBP: 0.0066, 
            AUD: 0.0114, 
            CAD: 0.011, 
            CHF: 0.0081, 
            CNY: 0.058, 
            INR: 0.67, 
            MXN: 0.18, 
            SGD: 0.012, 
            NZD: 0.013, 
            HKD: 0.072, 
            SEK: 0.078, 
            NOK: 0.077, 
            DKK: 0.057 
        },
        CHF: { 
            USD: 1.12, 
            EUR: 0.93, 
            GBP: 0.81, 
            AUD: 1.41, 
            CAD: 1.35, 
            JPY: 123.85, 
            CNY: 7.24, 
            INR: 84.08, 
            MXN: 22.74, 
            SGD: 1.49, 
            NZD: 1.55, 
            HKD: 8.63, 
            SEK: 9.34, 
            NOK: 9.25, 
            DKK: 6.87 
        },
        CNY: { 
            USD: 0.15, 
            EUR: 0.13, 
            GBP: 0.11, 
            AUD: 0.19, 
            CAD: 0.19, 
            JPY: 17.31, 
            CHF: 0.14, 
            INR: 11.59, 
            MXN: 3.14, 
            SGD: 0.21, 
            NZD: 0.22, 
            HKD: 1.23, 
            SEK: 1.33, 
            NOK: 1.32, 
            DKK: 0.98 
        },
        INR: { 
            USD: 0.013, 
            EUR: 0.011, 
            GBP: 0.0096, 
            AUD: 0.017, 
            CAD: 0.016, 
            JPY: 1.49, 
            CHF: 0.012, 
            CNY: 0.086, 
            MXN: 0.27, 
            SGD: 0.018, 
            NZD: 0.019, 
            HKD: 0.11, 
            SEK: 0.12, 
            NOK: 0.12, 
            DKK: 0.089 
        },
        MXN: { 
            USD: 0.049, 
            EUR: 0.041, 
            GBP: 0.036, 
            AUD: 0.062, 
            CAD: 0.059, 
            JPY: 5.54, 
            CHF: 0.044, 
            CNY: 0.32, 
            INR: 3.65, 
            SGD: 0.061, 
            NZD: 0.064, 
            HKD: 0.35, 
            SEK: 0.38, 
            NOK: 0.38, 
            DKK: 0.28 
        },
        SGD: { 
            USD: 0.75, 
            EUR: 0.62, 
            GBP: 0.54, 
            AUD: 0.97, 
            CAD: 0.94, 
            JPY: 86.16, 
            CHF: 0.67, 
            CNY: 4.87, 
            INR: 56.50, 
            MXN: 15.30, 
            NZD: 1.04, 
            HKD: 5.78, 
            SEK: 6.25, 
            NOK: 6.20, 
            DKK: 4.60 
        },
        NZD: { 
            USD: 0.71, 
            EUR: 0.59, 
            GBP: 0.52, 
            AUD: 0.94, 
            CAD: 0.90, 
            JPY: 82.94, 
            CHF: 0.65, 
            CNY: 4.76, 
            INR: 55.12, 
            MXN: 14.94, 
            SGD: 0.96, 
            HKD: 5.33, 
            SEK: 5.76, 
            NOK: 5.71, 
            DKK: 4.24 
        },
        HKD: { 
            USD: 0.13, 
            EUR: 0.11, 
            GBP: 0.097, 
            AUD: 0.18, 
            CAD: 0.17, 
            JPY: 15.53, 
            CHF: 0.12, 
            CNY: 0.81, 
            INR: 9.43, 
            MXN: 2.55, 
            SGD: 0.17, 
            NZD: 0.19, 
            SEK: 1.08, 
            NOK: 1.07, 
            DKK: 0.79 
        },
        SEK: { 
            USD: 0.12, 
            EUR: 0.098, 
            GBP: 0.085, 
            AUD: 0.16, 
            CAD: 0.15, 
            JPY: 13.57, 
            CHF: 0.11, 
            CNY: 0.79, 
            INR: 9.20, 
            MXN: 2.49, 
            SGD: 0.16, 
            NZD: 0.17, 
            HKD: 0.93, 
            NOK: 0.99, 
            DKK: 0.74 
        },
        NOK: { 
            USD: 0.12, 
            EUR: 0.099, 
            GBP: 0.086, 
            AUD: 0.16, 
            CAD: 0.15, 
            JPY: 13.71, 
            CHF: 0.11, 
            CNY: 0.80, 
            INR: 9.34, 
            MXN: 2.53, 
            SGD: 0.16, 
            NZD: 0.17, 
            HKD: 0.94, 
            SEK: 1.01, 
            DKK: 0.75 
        },
        DKK: { 
            USD: 0.16, 
            EUR: 0.13, 
            GBP: 0.11, 
            AUD: 0.20, 
            CAD: 0.19, 
            JPY: 17.65, 
            CHF: 0.14, 
            CNY: 1.02, 
            INR: 11.86, 
            MXN: 3.21, 
            SGD: 0.21, 
            NZD: 0.22, 
            HKD: 1.23, 
            SEK: 1.32, 
            NOK: 1.33 
        }
    };
    const convertedAmount = amount * conversionRates[fromCurrency][toCurrency];
    document.getElementById("convertedAmount").innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
});