import state from "./state.js";

export const sendMassege = async() =>{
    const arr = {
        'Сумма конвертации:': state.amountFrom + " " + state.pair.from,
        'Итоговая конвертация:': state.amountTo + " " + state.pair.to,
        'Данные получателя:' : "",
        'ФИО:' : state.FIO,
        'Карта получателя:' : state.cartNumberTo,
        'Банк получателя:' : state.bank,
        'Данные отправителя:' : "",
        'Имя отправителя:' : state.senderName,
        'Мессенджер:' : state.messanger,
        'Карта отправителя:' : state.cartNumberFrom,
        'Номер заказа:' : state.orderNumber,
        'Дополнительная информация:' : "",
        'Сумма отправленна в:' : state.bankTo,
        'Курс перевода:' : state.rateConvertation,
        'Промокод:' : state.promocodes,


    };

    const token = "7471086929:AAF5GwGgzrCNMz0X_nMHQI1jfuLJar8mj3U";
    const chat_id = "-1002217913530";

    let txt = '';
    
    for (const [key, value] of Object.entries(arr)) {
        if (!value) {
        txt += ` %0A<i><u>${key}</u></i> %0A`;
        } else {
        txt += `<b>${key}</b> ${value} %0A`;
        }
    };
    await fetch (`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${txt}`)
}