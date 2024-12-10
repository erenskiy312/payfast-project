import state from "./state.js"

export const renderFormPay=()=>{
   if (state.pair.from === "RUB" )
   return                    `<div class="back-icon backToApplication">
                            <img src="./img/Back-icon.svg" alt="">
                            </div>

                            <div class="conver-information">
                                <div class="conver-information-from">
                                    <p>Оплата счёта</p>
                                    <div class="conver-information-from-count">
                                        ${state.amountFrom}  ${state.pair.from} 
                                    </div>
                                </div>

                                <div class="conver-information-to">
                                    <p>К получению</p>
                                    <div class="conver-information-to-count">
                                        ${state.amountTo}  ${state.pair.to} 
                                    </div>
                                </div>
                            </div>

                            <div class="choice-title">
                                <p>Выберите способ оплаты</p>
                            </div>

                            <div class="choice-bank">
                                <div class="choice-bank__item gain-center" data-path="spb">
                                    <div class="choice-bank__item-icon">
                                        <img src="./img/spb-icon.svg" alt="">
                                    </div>

                                    <div class="choice-bank__item-title">
                                        СБП
                                    </div>

                                    <div class="choice-bank__item-description">
                                        Без комиссии
                                    </div>
                                </div>

                                <div class="choice-bank__item gain-center" data-path="sber">
                                    <div class="choice-bank__item-icon">
                                        <img src="./img/sber-icon.svg" alt="">
                                    </div>

                                    <div class="choice-bank__item-title">
                                        Сбербанк
                                    </div>

                                    <div class="choice-bank__item-description">
                                        Без комиссии
                                    </div>
                                </div>

                                <div class="choice-bank__item gain-center" data-path="tinkoff">
                                    <div class="choice-bank__item-icon">
                                        <img src="./img/T-Bank-icon.svg" alt="">
                                    </div>

                                    <div class="choice-bank__item-title">
                                        Т-Банк
                                    </div>

                                    <div class="choice-bank__item-description">
                                        Без комиссии
                                    </div>
                                </div>

                                <div class="choice-bank__item gain-center"  data-path="allBank">
                                    <div class="choice-bank__item-icon">
                                        <img src="./img/bank-icon.svg" alt="">
                                    </div>

                                    <div class="choice-bank__item-title">
                                        Другие банки
                                    </div>

                                    <div class="choice-bank__item-description">
                                        Без комиссии
                                    </div>
                                </div>
                            </div>
                            <div class="help-information">
                                <div class="help">
                                    <p>Нужна помощь?</p>
                                    <a href=" https://wa.me/+35795909400" target="_blank">
                                    <img src="./img/helpWhatsapp.svg" alt="">
                                    </a>
                                    <a href="https://t.me/victoria_support" target="_blank">
                                    <img src="./img/helpTg.svg" alt="">
                                    </a>
                                    <a href="#chatraChatExpanded">
                                    <img src="./img/helpOther.svg" alt="">
                                    </a>
                                </div>

                                <div class="order-number">
                                    Номер заказа №${state.orderNumber}
                                </div>
                            </div>`

if (state.pair.from === "UAH" )
return                    `<div class="back-icon backToApplication">
                                <img src="./img/Back-icon.svg" alt="">
                            </div>

                            <div class="conver-information">
                                <div class="conver-information-from">
                                    <p>Оплата счёта</p>
                                    <div class="conver-information-from-count">
                                        ${state.amountFrom}  ${state.pair.from} 
                                    </div>
                                </div>

                                <div class="conver-information-to">
                                    <p>К получению</p>
                                    <div class="conver-information-to-count">
                                        ${state.amountTo}  ${state.pair.to} 
                                    </div>
                                </div>
                            </div>

                            <div class="choice-title">
                                <p>Выберите способ оплаты</p>
                            </div>

                            <div class="choice-bank">
                                <div class="choice-bank__item gain-center" data-path="privat">
                                    <div class="choice-bank__item-icon">
                                        <img src="./img/privat-logo.svg" alt="">
                                    </div>

                                    <div class="choice-bank__item-title">
                                        ПриватБанк
                                    </div>

                                    <div class="choice-bank__item-description">
                                        Без комиссии
                                    </div>
                                </div>

                                <div class="choice-bank__item gain-center" data-path="allBank">
                                    <div class="choice-bank__item-icon">
                                        <img src="./img/bank-icon.svg" alt="">
                                    </div>

                                    <div class="choice-bank__item-title">
                                        Другие банки
                                    </div>

                                    <div class="choice-bank__item-description">
                                        Без комиссии
                                    </div>
                                </div>
                            </div>
                            <div class="help-information">
                                <div class="help">
                                    <p>Нужна помощь?</p>
                                    <a href=" https://wa.me/+35795909400" target="_blank">
                                    <img src="./img/helpWhatsapp.svg" alt="">
                                    </a>
                                    <a href="https://t.me/victoria_support" target="_blank">
                                    <img src="./img/helpTg.svg" alt="">
                                    </a>
                                    <a href="#chatraChatExpanded">
                                    <img src="./img/helpOther.svg" alt="">
                                    </a>
                                </div>

                                <div class="order-number">
                                    Номер заказа №${state.orderNumber}
                                </div>
                            </div>`

if (state.pair.from === "TRY" )
return                    `<div class="back-icon backToApplication">
                                <img src="./img/Back-icon.svg" alt="">
                            </div>

                            <div class="conver-information">
                                <div class="conver-information-from">
                                    <p>Оплата счёта</p>
                                    <div class="conver-information-from-count">
                                        ${state.amountFrom}  ${state.pair.from} 
                                    </div>
                                </div>

                                <div class="conver-information-to">
                                    <p>К получению</p>
                                    <div class="conver-information-to-count">
                                        ${state.amountTo}  ${state.pair.to} 
                                    </div>
                                </div>
                            </div>

                            <div class="choice-title">
                                <p>Выберите способ оплаты</p>
                            </div>

                            <div class="choice-bank">
                                <div class="choice-bank__item gain-center" data-path="akBank">
                                    <div class="choice-bank__item-icon">
                                        <img src="./img/akBank-icon.svg" alt="">
                                    </div>

                                    <div class="choice-bank__item-title">
                                        AKBANK
                                    </div>

                                    <div class="choice-bank__item-description">
                                        Без комиссии
                                    </div>
                                </div>

                                <div class="choice-bank__item gain-center" data-path="vakifBank">
                                    <div class="choice-bank__item-icon">
                                        <img src="./img/vakifbank-icon.svg" alt="">
                                    </div>

                                    <div class="choice-bank__item-title">
                                        VakifBank
                                    </div>

                                    <div class="choice-bank__item-description">
                                        Без комиссии
                                    </div>
                                </div>

                                <div class="choice-bank__item gain-center" gain-center data-path="allBank">
                                    <div class="choice-bank__item-icon">
                                        <img src="./img/bank-icon.svg" alt="">
                                    </div>

                                    <div class="choice-bank__item-title">
                                        Другие банки
                                    </div>

                                    <div class="choice-bank__item-description">
                                        Без комиссии
                                    </div>
                                </div>
                            </div>
                            <div class="help-information">
                                <div class="help">
                                    <p>Нужна помощь?</p>
                                    <a href=" https://wa.me/+35795909400" target="_blank">
                                    <img src="./img/helpWhatsapp.svg" alt="">
                                    </a>
                                    <a href="https://t.me/victoria_support" target="_blank">
                                    <img src="./img/helpTg.svg" alt="">
                                    </a>
                                    <a href="#chatraChatExpanded">
                                    <img src="./img/helpOther.svg" alt="">
                                    </a>
                                </div>

                                <div class="order-number">
                                    Номер заказа №${state.orderNumber}
                                </div>
                            </div>`

else return                `<div class="back-icon backToApplication">
                                <img src="./img/Back-icon.svg" alt="">
                            </div>

                            <div class="conver-information">
                                <div class="conver-information-from">
                                    <p>Оплата счёта</p>
                                    <div class="conver-information-from-count">
                                        ${state.amountFrom}  ${state.pair.from} 
                                    </div>
                                </div>

                                <div class="conver-information-to">
                                    <p>К получению</p>
                                    <div class="conver-information-to-count">
                                        ${state.amountTo}  ${state.pair.to} 
                                    </div>
                                </div>
                            </div>

                            <div class="choice-title">
                                <p>Выберите способ оплаты</p>
                            </div>

                            <div class="choice-bank">
                                <div class="choice-bank__item gain-center" data-path="tg">
                                    <div class="choice-bank__item-icon">
                                        <img src="./img/tg-logo.svg" alt="">
                                    </div>

                                    <div class="choice-bank__item-title">
                                        Telegram
                                    </div>

                                    <div class="choice-bank__item-description">
                                        Данный способ оплаты
                                        доступен только через
                                        менеджера
                                    </div>
                                </div>

                                <div class="choice-bank__item gain-center" data-path="allBank">
                                    <div class="choice-bank__item-icon">
                                        <img src="./img/bank-icon.svg" alt="">
                                    </div>

                                    <div class="choice-bank__item-title">
                                        Другие банки
                                    </div>

                                    <div class="choice-bank__item-description">
                                        Без комиссии
                                    </div>
                                </div>
                            </div>
                            <div class="help-information">
                                <div class="help">
                                    <p>Нужна помощь?</p>
                                    <a href=" https://wa.me/+35795909400" target="_blank">
                                    <img src="./img/helpWhatsapp.svg" alt="">
                                    </a>
                                    <a href="https://t.me/victoria_support" target="_blank">
                                    <img src="./img/helpTg.svg" alt="">
                                    </a>
                                    <a href="#chatraChatExpanded">
                                    <img src="./img/helpOther.svg" alt="">
                                    </a>
                                </div>

                                <div class="order-number">
                                    Номер заказа №${state.orderNumber}
                                </div>
                            </div>`
}

export const renderFormPayAllbank = () => {
    return                    `<div class="back-icon backToApplication">
                                    <img src="./img/Back-icon.svg" alt="">
                                </div>
 
                             <div class="conver-information">
                                 <div class="conver-information-from">
                                     <p>Оплата счёта</p>
                                     <div class="conver-information-from-count">
                                         ${state.amountFrom}  ${state.pair.from} 
                                     </div>
                                 </div>
 
                                 <div class="conver-information-to">
                                     <p>К получению</p>
                                     <div class="conver-information-to-count">
                                         ${state.amountTo}  ${state.pair.to} 
                                     </div>
                                 </div>
                             </div>
 
                             <div class="choice-title">
                                 <p>Выберите способ оплаты</p>
                             </div>
 
                             <div class="choice-bank">
                                <div class="choice-bank__item gain-center" data-path="spb">
                                     <div class="choice-bank__item-icon">
                                         <img src="./img/spb-icon.svg" alt="">
                                     </div>
 
                                     <div class="choice-bank__item-title">
                                         СБП
                                     </div>
 
                                     <div class="choice-bank__item-description">
                                         Без комиссии
                                     </div>
                                </div>
 
                                <div class="choice-bank__item gain-center" data-path="sber">
                                     <div class="choice-bank__item-icon">
                                         <img src="./img/sber-icon.svg" alt="">
                                     </div>
 
                                     <div class="choice-bank__item-title">
                                         Сбербанк
                                     </div>
 
                                     <div class="choice-bank__item-description">
                                         Без комиссии
                                     </div>
                                </div>
 
                                 <div class="choice-bank__item gain-center" data-path="tinkoff">
                                     <div class="choice-bank__item-icon">
                                         <img src="./img/T-Bank-icon.svg" alt="">
                                     </div>
 
                                     <div class="choice-bank__item-title">
                                        Т-Банк
                                     </div>
 
                                     <div class="choice-bank__item-description">
                                         Без комиссии
                                     </div>
                                 </div>
 
                                 <div class="choice-bank__item gain-center" data-path="privat">
                                    <div class="choice-bank__item-icon">
                                        <img src="./img/privat-logo.svg" alt="">
                                    </div>

                                    <div class="choice-bank__item-title">
                                        ПриватБанк
                                    </div>

                                    <div class="choice-bank__item-description">
                                        Без комиссии
                                    </div>
                                 </div>

                                 <div class="choice-bank__item gain-center" data-path="akBank">
                                    <div class="choice-bank__item-icon">
                                        <img src="./img/akBank-icon.svg" alt="">
                                    </div>

                                    <div class="choice-bank__item-title">
                                        AKBANK
                                    </div>

                                    <div class="choice-bank__item-description">
                                        Без комиссии
                                    </div>
                                </div>

                                <a href="https://t.me/victoria_support" target="_blank">
                                <div class="choice-bank__item gain-center" data-path="tg">
                                    <div class="choice-bank__item-icon">
                                        <img src="./img/tg-logo.svg" alt="">
                                    </div>

                                    <div class="choice-bank__item-title">
                                        Не нашли?
                                    </div>

                                    <div class="choice-bank__item-description">
                                        Обратитесь к нам
                                    </div>
                                </div>
                                </a>

                             </div>
                             <div class="help-information">
                                 <div class="help">
                                     <p>Нужна помощь?</p>
                                     <a href=" https://wa.me/+35795909400" target="_blank">
                                     <img src="./img/helpWhatsapp.svg" alt="">
                                     </a>
                                     <a href="https://t.me/victoria_support" target="_blank">
                                     <img src="./img/helpTg.svg" alt="">
                                     </a>
                                     <a href="#chatraChatExpanded">
                                     <img src="./img/helpOther.svg" alt="">
                                     </a>
                                 </div>
 
                                 <div class="order-number">
                                     Номер заказа №${state.orderNumber}
                                 </div>
                             </div>`
}

export const renderCheckPay = () => {
    return `                <div class="backToMain" id="backToMain">
                                <div class="backToMain-txt">На главную</div>
                                <img src="./img/backToMain.svg" alt="">
                            </div>

                            <div class="status">
                                <img src="./img/status.svg" alt="">
                                Успех
                            </div>

                            <div class="choice-title">
                                <p>Информация о  переводе</p>
                            </div>

                            <div class="traslate-information">
                                <div class="traslate-info">
                                    <span class="left">Статус заказа</span>
                                    <span class="right">В обработке</span>
                                </div>
                                <div class="traslate-info">
                                    <span class="left">Получатель</span>
                                    <span class="right">${state.FIO}</span>
                                </div>
                                <div class="traslate-info">
                                    <span class="left">Номер карты получателя</span>
                                    <span class="right">${state.cartNumberTo}</span>
                                </div>
                                <div class="traslate-info">
                                    <span class="left">Банк получателя</span>
                                    <span class="right">${state.bank}</span>
                                </div>
                                <div class="traslate-info">
                                    <span class="left">К получению</span>
                                    <span class="right">${state.amountTo}</span>
                                </div>
                            </div>

                            <div class="help-information">
                                <div class="help">
                                    <p>Нужна помощь?</p>
                                    <a href=" https://wa.me/+35795909400" target="_blank">
                                    <img src="./img/helpWhatsapp.svg" alt="">
                                    </a>
                                    <a href="https://t.me/victoria_support" target="_blank">
                                    <img src="./img/helpTg.svg" alt="">
                                    </a>
                                    <a href="#chatraChatExpanded">
                                    <img src="./img/helpOther.svg" alt="">
                                    </a>
                                </div>

                                <div class="order-number">
                                    Номер заказа №${state.orderNumber}
                                </div>
                            </div>`
}

export const renderFormPayOther = () => {
    return                    `<div class="back-icon backToApplication">
                                    <img src="./img/Back-icon.svg" alt="">
                                </div>

                                <div class="conver-information">
                                    <div class="conver-information-from">
                                        <p>Оплата счёта</p>
                                        <div class="conver-information-from-count">
                                            ${state.amountFrom}  ${state.pair.from} 
                                        </div>
                                    </div>

                                    <div class="conver-information-to">
                                        <p>К получению</p>
                                        <div class="conver-information-to-count">
                                            ${state.amountTo}  ${state.pair.to} 
                                        </div>
                                    </div>
                                </div>

                                <div class="choice-title">
                                    <p>Перевод требует ручной обработки</p>
                                </div>

                                <div class="choice-bank payOrder">
                                    К сожалению, мы не можем завершить этот перевод в автоматическом режиме. Наш менеджер свяжется с вами в течение 30 минут по указанным ранее контактам и предоставит реквизиты для оплаты заявки. Благодарим за ваше понимание и терпение!                                
                                
                                    <button class="buttonToContects gain-center" id="buttonToContects" data-path="contacts">Связаться самостоятельно</button>

                                </div>
                                
                                <div class="help-information">
                                    <div class="help">
                                        <p>Нужна помощь?</p>
                                        <a href=" https://wa.me/+35795909400" target="_blank">
                                        <img src="./img/helpWhatsapp.svg" alt="">
                                        </a>
                                        <a href="https://t.me/victoria_support" target="_blank">
                                        <img src="./img/helpTg.svg" alt="">
                                        </a>
                                        <a href="#chatraChatExpanded">
                                        <img src="./img/helpOther.svg" alt="">
                                        </a>
                                    </div>

                                    <div class="order-number">
                                        Номер заказа №${state.orderNumber}
                                    </div>
                                </div>`
}