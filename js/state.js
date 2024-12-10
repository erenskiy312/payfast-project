export default {
    url : "https://v6.exchangerate-api.com/v6/b66963741bcfdf6e051910ac",
    pair : {
        from: "",
        to: "",
    },
    amountFrom : "",
    amountFromFee : "",
    amountTo : "",
    next: true,

    rate : "",

    
    // промо также менять в main  promoInput.addEventListener('keyup', function(){
    // там меняется fee
    fee : "0.02",
    feeCount : "",
    promos : [  
                "PAYBONUS", 
                "PROMO5", 
    ], 
    promos20 : [ 
                "PROMO20", 
                "PAY20", 
                "BONUS20", 
                "SAVE20", 
                "SORRY20", 
                "SALE20",
    ],

    // данные из анкеты
    FIO : "",
    cartNumberTo : "",
    bank : "",
    senderName : "",
    messanger : "",
    cartNumberFrom : "",
    orderNumber : "",

    bankTo: "",
    rateConvertation: "",
    promocodes: "Промокода нет",

    sendMesngerBool: true,
    toMain: false,
}