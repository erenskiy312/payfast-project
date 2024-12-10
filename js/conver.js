import chengeRates from "./chengeRates.js"
import state from "./state.js"
import varibles from "./varibles.js";

const { success, amountToInput, amountFromInput, rateInput, feeOutput, amountFromOutput,
    rateLast,minCoust} = varibles;


export const convertion = (rate) =>{
    rate = chengeRate (rate);
    state.rateConvertation = rate;

    state.next = true;

    console.log("Курс: " + rate + " " + state.pair.from + " > " + state.pair.to);

    state.feeCount = (state.amountFrom*state.fee).toFixed();
    state.amountTo = (state.amountFrom-state.feeCount)*rate;
    state.amountTo = state.amountTo.toFixed();
    
    
    amountToInput.value = state.amountTo;
    rateInput.value = rate.toFixed(2);
    feeOutput.innerHTML = `${state.feeCount} ${state.pair.from}`;
    amountFromOutput.innerHTML = `${state.amountFrom-state.feeCount} ${state.pair.from}`;
    
    if (state.pair.from == 'UAH' && state.amountFrom < 250){
        minCoust.innerText = 'Минимальная сумма конвертации 250 UAH'
        state.next = false;
        return
    }
    if (state.pair.from == 'RUB' && state.amountFrom < 500){
        minCoust.innerText = 'Минимальная сумма конвертации 500 RUB'
        state.next = false;
        return
    }
    if (state.pair.from == 'TRY' && state.amountFrom < 200){
        minCoust.innerText = 'Минимальная сумма конвертации 200 TRY'
        state.next = false;
        return
    }
    if (state.pair.from == 'KZT' && state.amountFrom < 5000){
        minCoust.innerText = 'Минимальная сумма конвертации 5000 KZT'
        state.next = false;
        return
    }
    if (state.pair.from == 'UZS' && state.amountFrom < 800000){
        minCoust.innerText = 'Минимальная сумма конвертации 800000 UZS'
        state.next = false;
        return
    }
    if (state.pair.from == 'GEL' && state.amountFrom < 15){
        minCoust.innerText = 'Минимальная сумма конвертации 15 GEL'
        state.next = false;
        return
    }
    if (state.pair.from == 'BYN' && state.amountFrom < 20){
        minCoust.innerText = 'Минимальная сумма конвертации 20 BYN'
        state.next = false;
        return
    }
    if (state.pair.from == 'USD' && state.amountFrom < 5){
        minCoust.innerText = 'Минимальная сумма конвертации 5 USD'
        state.next = false;
        return
    }
    if (state.pair.from == 'EUR' && state.amountFrom < 5){
        minCoust.innerText = 'Минимальная сумма конвертации 5 EUR'
        state.next = false;
        return
    }
    minCoust.innerText = ''
}

const convertionTo = (rate) =>{
    rate = chengeRate(rate);
    state.rateConvertation = rate;

    state.next = true;

    state.amountFrom = Number(state.amountTo/(rate*(1-state.fee))).toFixed();
    state.feeCount = (state.amountFrom*state.fee).toFixed();

    amountFromInput.value = state.amountFrom;

    
    rateInput.value = rate.toFixed(2);
    feeOutput.innerHTML = `${state.feeCount} ${state.pair.from}`;
    amountFromOutput.innerHTML = `${state.amountFrom-state.feeCount} ${state.pair.from}`;
    if (state.pair.from == 'UAH' && state.amountFrom < 250){
        minCoust.innerText = 'Минимальная сумма конвертации 250 UAH'
        state.next = false;
        return
    }
    if (state.pair.from == 'RUB' && state.amountFrom < 500){
        minCoust.innerText = 'Минимальная сумма конвертации 500 RUB'
        state.next = false;
        return
    }
    if (state.pair.from == 'TRY' && state.amountFrom < 200){
        minCoust.innerText = 'Минимальная сумма конвертации 200 TRY'
        state.next = false;
        return
    }
    if (state.pair.from == 'KZT' && state.amountFrom < 5000){
        minCoust.innerText = 'Минимальная сумма конвертации 5000 KZT'
        state.next = false;
        return
    }
    if (state.pair.from == 'UZS' && state.amountFrom < 80000){
        minCoust.innerText = 'Минимальная сумма конвертации 80000 UZS'
        state.next = false;
        return
    }
    if (state.pair.from == 'GEL' && state.amountFrom < 15){
        minCoust.innerText = 'Минимальная сумма конвертации 15 GEL'
        state.next = false;
        return
    }
    if (state.pair.from == 'BYN' && state.amountFrom < 20){
        minCoust.innerText = 'Минимальная сумма конвертации 20 BYN'
        state.next = false;
        return
    }
    if (state.pair.from == 'USD' && state.amountFrom < 5){
        minCoust.innerText = 'Минимальная сумма конвертации 5 USD'
        state.next = false;
        return
    }
    if (state.pair.from == 'EUR' && state.amountFrom < 5){
        minCoust.innerText = 'Минимальная сумма конвертации 5 EUR'
        state.next = false;
        return
    }
    minCoust.innerText = ''
}

const chengeRate =(rate)=>{
    const {pair:{from, to}} = state;
    if ( from === "UAH" && to === "RUB" ) rate+=chengeRates.UahRub;
    if ( from === "RUB" && to === "UAH" ) rate+=chengeRates.RubUah;

    if ( from === "TRY" && to === "RUB" ) rate+=chengeRates.TruRub;
    if ( from === "RUB" && to === "TRY" ) rate+=chengeRates.RubTry;

    if ( from === "TRY" && to === "UAH" ) rate+=chengeRates.TruUah;
    if ( from === "UAH" && to === "TRY" ) rate+=chengeRates.UahTru;

    if ( from === "UAH" && to === "USD" ) rate+=chengeRates.UahUsd;
    if ( from === "USD" && to === "UAH" ) rate+=chengeRates.UsdUah;

    if ( from === "TRY" && to === "USD" ) rate+=chengeRates.TruUsd;
    if ( from === "USD" && to === "TRY" ) rate+=chengeRates.UsdTru;
    
    if ( from === "RUB" && to === "USD" ) rate+=chengeRates.RubUsd;
    if ( from === "USD" && to === "RUB" ) rate+=chengeRates.UsdRub;
    

    if ( from === "UAH" && to === "UZS" ) rate+=chengeRates.UahUzs;
    if ( from === "UZS" && to === "UAH" ) rate+=chengeRates.UzsUah;

    if ( from === "TRY" && to === "UZS" ) rate+=chengeRates.TruUzs;
    if ( from === "UZS" && to === "TRY" ) rate+=chengeRates.UzsTru;
    
    if ( from === "RUB" && to === "UZS" ) rate+=chengeRates.RubUzs;
    if ( from === "UZS" && to === "RUB" ) rate+=chengeRates.UzsRub;


    if ( from === "UAH" && to === "AZN" ) rate+=chengeRates.UahAzn;
    if ( from === "AZN" && to === "UAH" ) rate+=chengeRates.AznUah;

    if ( from === "TRY" && to === "AZN" ) rate+=chengeRates.TruAzn;
    if ( from === "AZN" && to === "TRY" ) rate+=chengeRates.AznTru;
    
    if ( from === "RUB" && to === "AZN" ) rate+=chengeRates.RubAzn;
    if ( from === "AZN" && to === "RUB" ) rate+=chengeRates.AznRub;
    

    if ( from === "UAH" && to === "GEL" ) rate+=chengeRates.UahGel;
    if ( from === "GEL" && to === "UAH" ) rate+=chengeRates.GelUah;

    if ( from === "TRY" && to === "GEL" ) rate+=chengeRates.TruGel;
    if ( from === "GEL" && to === "TRY" ) rate+=chengeRates.GelTru;
    
    if ( from === "RUB" && to === "GEL" ) rate+=chengeRates.RubGel;
    if ( from === "GEL" && to === "RUB" ) rate+=chengeRates.GelRub;


    if ( from === "UAH" && to === "CNY" ) rate+=chengeRates.UahCny;
    if ( from === "CNY" && to === "UAH" ) rate+=chengeRates.CnyUah;

    if ( from === "TRY" && to === "CNY" ) rate+=chengeRates.TruCny;
    if ( from === "CNY" && to === "TRY" ) rate+=chengeRates.CnyTru;
    
    if ( from === "RUB" && to === "CNY" ) rate+=chengeRates.RubCny;
    if ( from === "CNY" && to === "RUB" ) rate+=chengeRates.CnyRub;


    if ( from === "UAH" && to === "BYN" ) rate+=chengeRates.UahByn;
    if ( from === "BYN" && to === "UAH" ) rate+=chengeRates.BynUah;

    if ( from === "TRY" && to === "BYN" ) rate+=chengeRates.TruByn;
    if ( from === "BYN" && to === "TRY" ) rate+=chengeRates.BynTru;
    
    if ( from === "RUB" && to === "BYN" ) rate+=chengeRates.RubByn;
    if ( from === "BYN" && to === "RUB" ) rate+=chengeRates.BynRub;
    

    if ( from === "UAH" && to === "EUR" ) rate+=chengeRates.UahEur;
    if ( from === "EUR" && to === "UAH" ) rate+=chengeRates.EurUah;

    if ( from === "TRY" && to === "EUR" ) rate+=chengeRates.TruEur;
    if ( from === "EUR" && to === "TRY" ) rate+=chengeRates.EurTru;
    
    if ( from === "RUB" && to === "EUR" ) rate+=chengeRates.RubEur;
    if ( from === "EUR" && to === "RUB" ) rate+=chengeRates.EurRub;


    if ( from === "USD" && to === "UZS" ) rate+=chengeRates.UsdUzs;
    if ( from === "UZS" && to === "USD" ) rate+=chengeRates.UzsUsd;

    if ( from === "USD" && to === "AZN" ) rate+=chengeRates.UsdAzn;
    if ( from === "AZN" && to === "USD" ) rate+=chengeRates.AznUsd;

    if ( from === "USD" && to === "GEL" ) rate+=chengeRates.UsdGel;
    if ( from === "GEL" && to === "USD" ) rate+=chengeRates.GelUsd;

    if ( from === "USD" && to === "CNY" ) rate+=chengeRates.UsdCny;
    if ( from === "CNY" && to === "USD" ) rate+=chengeRates.CnyUsd;

    if ( from === "USD" && to === "BYN" ) rate+=chengeRates.UsdByn;
    if ( from === "BYN" && to === "USD" ) rate+=chengeRates.BynUsd;

    if ( from === "USD" && to === "EUR" ) rate+=chengeRates.UsdEur;
    if ( from === "EUR" && to === "USD" ) rate+=chengeRates.EurUsd;
    

    if ( from === "UZS" && to === "AZN" ) rate+=chengeRates.UzsAzn;
    if ( from === "AZN" && to === "UZS" ) rate+=chengeRates.AznUzs;

    if ( from === "UZS" && to === "GEL" ) rate+=chengeRates.UzsGel;
    if ( from === "GEL" && to === "UZS" ) rate+=chengeRates.GelUzs;

    if ( from === "UZS" && to === "CNY" ) rate+=chengeRates.UzsCny;
    if ( from === "CNY" && to === "UZS" ) rate+=chengeRates.CnyUzs;

    if ( from === "UZS" && to === "BYN" ) rate+=chengeRates.UzsByn;
    if ( from === "BYN" && to === "UZS" ) rate+=chengeRates.BynUzs;

    if ( from === "UZS" && to === "EUR" ) rate+=chengeRates.UzsEur;
    if ( from === "EUR" && to === "UZS" ) rate+=chengeRates.EurUzs;
    

    if ( from === "AZN" && to === "GEL" ) rate+=chengeRates.AznGel;
    if ( from === "GEL" && to === "AZN" ) rate+=chengeRates.GelAzn;

    if ( from === "AZN" && to === "CNY" ) rate+=chengeRates.AznCny;
    if ( from === "CNY" && to === "AZN" ) rate+=chengeRates.CnyAzn;

    if ( from === "AZN" && to === "BYN" ) rate+=chengeRates.AznByn;
    if ( from === "BYN" && to === "AZN" ) rate+=chengeRates.BynAzn;

    if ( from === "AZN" && to === "EUR" ) rate+=chengeRates.AznEur;
    if ( from === "EUR" && to === "AZN" ) rate+=chengeRates.EurAzn;


    if ( from === "GEL" && to === "CNY" ) rate+=chengeRates.GelCny;
    if ( from === "CNY" && to === "GEL" ) rate+=chengeRates.CnyGel;

    if ( from === "GEL" && to === "BYN" ) rate+=chengeRates.GelByn;
    if ( from === "BYN" && to === "GEL" ) rate+=chengeRates.BynGel;

    if ( from === "GEL" && to === "EUR" ) rate+=chengeRates.GelEur;
    if ( from === "EUR" && to === "GEL" ) rate+=chengeRates.EurGel;
    
    
    if ( from === "CNY" && to === "BYN" ) rate+=chengeRates.CnyByn;
    if ( from === "BYN" && to === "CNY" ) rate+=chengeRates.BynCny;

    if ( from === "CNY" && to === "EUR" ) rate+=chengeRates.CnyEur;
    if ( from === "EUR" && to === "CNY" ) rate+=chengeRates.EurCny;
    

    if ( from === "BYN" && to === "EUR" ) rate+=chengeRates.BynEur;
    if ( from === "EUR" && to === "BYN" ) rate+=chengeRates.EurByn;


    if ( from === "KZT" && to === "UAH" ) rate+=chengeRates.KztUah;
    if ( from === "UAH" && to === "KZT" ) rate+=chengeRates.UahKzt;

    if ( from === "KZT" && to === "RUB" ) rate+=chengeRates.KztRub;
    if ( from === "RUB" && to === "KZT" ) rate+=chengeRates.RubKzt;

    if ( from === "KZT" && to === "TRY" ) rate+=chengeRates.KztTru;
    if ( from === "TRY" && to === "KZT" ) rate+=chengeRates.TruKzt;


    if ( from === "KZT" && to === "USD" ) rate+=chengeRates.KztUsd;
    if ( from === "USD" && to === "KZT" ) rate+=chengeRates.UsdKzt;

    if ( from === "KZT" && to === "UZS" ) rate+=chengeRates.KztUzs;
    if ( from === "UZS" && to === "KZT" ) rate+=chengeRates.UzsKzt;

    if ( from === "KZT" && to === "AZN" ) rate+=chengeRates.KztAzn;
    if ( from === "AZN" && to === "KZT" ) rate+=chengeRates.AznKzt;

    if ( from === "KZT" && to === "GEL" ) rate+=chengeRates.KztGel;
    if ( from === "GEL" && to === "KZT" ) rate+=chengeRates.GelKzt;

    if ( from === "KZT" && to === "CNY" ) rate+=chengeRates.KztCny;
    if ( from === "CNY" && to === "KZT" ) rate+=chengeRates.CnyKzt;

    if ( from === "KZT" && to === "BYN" ) rate+=chengeRates.KztByn;
    if ( from === "BYN" && to === "KZT" ) rate+=chengeRates.BynKzt;

    if ( from === "KZT" && to === "EUR" ) rate+=chengeRates.KztEur;
    if ( from === "EUR" && to === "KZT" ) rate+=chengeRates.EurKzt;

    return rate;
}


//менять 

export const handlInput = ({ target : { value, name } }) =>{
    state[name] = Number(value).toFixed();
    setTimeout(convertion, 200, state.rate);
};

export const handlInputTo = ({ target : { value, name } }) =>{
    state[name] = Number(value).toFixed();
    setTimeout(convertionTo, 200, state.rate);
};


export const switchCorrencis = () => {
    const { url, pair: { to, from}} = state;

    if ( !to || !from ) return;
    
    state.pair = {
        to: from,
        from: to,
    }
    

    const selectTxtFrom = document.querySelector('.select-content-txt-from')
    selectTxtFrom.innerText = `${to}`;

    const selectTxtTo = document.querySelector('.select-content-txt-to')
    selectTxtTo.innerText = `${from}`;

    document.querySelectorAll('.select-icons-from').forEach((icon)=>{
        icon.classList.add('hide')
    })
    document.querySelector(`[data-target-from="${to}"]`).classList.remove('hide');

    document.querySelectorAll('.select-icons-to').forEach((icon)=>{
        icon.classList.add('hide')
    })
    document.querySelector(`[data-target-to="${from}"]`).classList.remove('hide')

    
    if ( !to || !from ) return;
    handleSubmit();
}

const convertTime = (date) => {
    // const options = {
    //     month: "long",
    //     day: "numeric",
    //     hour: 'numeric',
    //     minute: 'numeric',
    //     second: 'numeric',
    //     timeZone: 'UTC'
    // };

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    
    return new Intl.DateTimeFormat("ru", options).format(new Date(date));
};

export const handleSubmit = async() => {
    const { url, pair: { to, from}} = state;
    
    const response = await fetch(`${url}pair/${from}/${to}`)
    const date = await response.json();
    if (date.result === success) {
        state.rate = date.conversion_rate;
        console.log('Курс с API: ' + state.rate + ' ' + from + ' > '  + to);
        convertion(state.rate);
        
        rateLast.innerText = `Обновлено ${convertTime(date.time_last_update_utc)}`;
    }
}

export const handlQuestionnaire = ({target : {value, name} }) => {
    state[name] = value;
};