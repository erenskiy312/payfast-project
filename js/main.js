import { convertion, handlInput, handlInputTo, handlQuestionnaire, handleSubmit, switchCorrencis } from "./conver.js";
import { renderCheckPay, renderFormPay, renderFormPayAllbank, renderFormPayOther } from "./markups.js";
import state from "./state.js"
import { sendMassege } from "./telegram.js";
import varibles from "./varibles.js"

const { promoInput, amountFromInput, amountToInput, switchButton, 
formConvertor, formApplication, buttonToApplication, backToConvertor, buttonToQuestionnaire, formQuestionnaire, formQuestionnaireAllBank, formCheck,
FIO, cartNumberTo, bank, senderName, messanger, cartNumberFrom,
progressBarFormApplication, progressBarFormQuestionnaire, progressBarFormCheck, 
selectDiv, borderfrom, selectChoise, selectDivTo, borderTo, selectChoiseTo, openModalPromo, closeModalBtn, modalPromo} = varibles;

document.addEventListener('DOMContentLoaded', async()=>{

    // менять назначение select
    state.pair.from = 'UAH';
    state.pair.to = 'RUB';
    state.amountFrom = Number(amountFromInput.value);
    
    handleSubmit();

    progressBarFormApplication.classList.add('hide')
    progressBarFormQuestionnaire.classList.add('hide')
    progressBarFormCheck.classList.add('hide')

    const date = new Date();
    
    const modalClousedOverlay = document.querySelector('.modals_cloused-overlay');
    const modalsClouse = document.querySelector('.modal_cloused');
    const closeModalClouse = document.getElementById('modal_cloused-clouse');
    if (date.getDay() < 6){
        if ((date.getUTCHours() + 3) < 10){
            modalsClouse.classList.add('modal--visible');
            modalClousedOverlay.classList.add('modal-overlay--visible');
        }
        if ((date.getUTCHours() + 3) > 19){
            modalsClouse.classList.add('modal--visible');
            modalClousedOverlay.classList.add('modal-overlay--visible');
        }
    }
    if (date.getDay() > 5){
        if ((date.getUTCHours() + 3) < 12){
            modalsClouse.classList.add('modal--visible');
            modalClousedOverlay.classList.add('modal--visible');
        }
        if ((date.getUTCHours() + 3) > 19){
            modalsClouse.classList.add('modal--visible');
            modalClousedOverlay.classList.add('modal-overlay--visible');
        }
    }

    closeModalClouse.addEventListener('click', ()=>{
        modalClousedOverlay.classList.remove('modal-overlay--visible');
        modalsClouse.classList.remove('modal--visible');
    });

    modalClousedOverlay.addEventListener('click', (e)=>{
        if (e.target == modalClousedOverlay){
            modalClousedOverlay.classList.remove('modal-overlay--visible');
            modalsClouse.classList.remove('modal--visible');
        }
    });

    document.addEventListener('keydown', function(evt) {
        if (evt.key === 'Escape' || evt.key === 'Esc') {
            modalClousedOverlay.classList.remove('modal-overlay--visible');
            modalsClouse.classList.remove('modal--visible');
        }
    });


    let openSelectFrom = false;
    let openSelectTo = false;

    const overlaySelect = document.querySelector('.overlay-selector')


    if(openSelectFrom){
        selectDiv.classList.add('hide');
        borderfrom.classList.remove('borderBottomNopn')
        openSelectFrom = false;
    }

    const fromSelect = document.getElementById('from-Select')
    fromSelect.addEventListener('click', ()=>{

        if(openSelectFrom){
            selectDiv.classList.add('hide');
            borderfrom.classList.remove('borderBottomNopn')
            overlaySelect.classList.remove('modal-overlay--visible')
            
            openSelectFrom = false;
        }
        else{
            selectDiv.classList.remove('hide');
            borderfrom.classList.add('borderBottomNopn')
            overlaySelect.classList.add('modal-overlay--visible')

            openSelectFrom = true;
        }

        selectDivTo.classList.add('hide');
        borderTo.classList.remove('borderBottomNopn')
        openSelectTo = false;
    })

    selectChoise.forEach((el) =>{
        el.addEventListener('click', (e)=>{
            let path = e.currentTarget.getAttribute('data-path');
            const selectTxt = document.querySelector('.select-content-txt-from')
            selectTxt.innerText = `${path}`;

            document.querySelectorAll('.select-icons-from').forEach((icon)=>{
                icon.classList.add('hide')
            })

            document.querySelector(`[data-target-from="${path}"]`).classList.remove('hide');

            state.pair.from = path;

            selectDiv.classList.add('hide');
            borderfrom.classList.remove('borderBottomNopn')
            overlaySelect.classList.remove('modal-overlay--visible')
            openSelectFrom = false;
            handleSubmit()
        })
    })

    if(openSelectTo){
        selectDivTo.classList.add('hide');
        borderTo.classList.remove('borderBottomNopn')
        openSelectTo = false;
    }

    const toSelect = document.getElementById('to-Select')
    toSelect.addEventListener('click', ()=>{

        if(openSelectTo){
            selectDivTo.classList.add('hide');
            borderTo.classList.remove('borderBottomNopn')
            overlaySelect.classList.remove('modal-overlay--visible')
            openSelectTo = false;
        }
        else{
            selectDivTo.classList.remove('hide');
            borderTo.classList.add('borderBottomNopn')
            overlaySelect.classList.add('modal-overlay--visible')
            openSelectTo = true;
        }

        selectDiv.classList.add('hide');
        borderfrom.classList.remove('borderBottomNopn')
        openSelectFrom = false;
    })


    selectChoiseTo.forEach((el) =>{
        el.addEventListener('click', (e)=>{
            let path = e.currentTarget.getAttribute('data-path');
            const selectTxt = document.querySelector('.select-content-txt-to')
            selectTxt.innerText = `${path}`;

            document.querySelectorAll('.select-icons-to').forEach((icon)=>{
                icon.classList.add('hide')
            })

            document.querySelector(`[data-target-to="${path}"]`).classList.remove('hide');

            state.pair.to = path;

            selectDivTo.classList.add('hide');
            borderTo.classList.remove('borderBottomNopn')
            overlaySelect.classList.remove('modal-overlay--visible')
            openSelectTo = false;
            handleSubmit()
        })
    })

    overlaySelect.addEventListener('click', (e)=>{
        if (e.target == overlaySelect){
            overlaySelect.classList.remove('modal-overlay--visible')
            
            selectDiv.classList.add('hide');
            borderfrom.classList.remove('borderBottomNopn')
            
            selectDivTo.classList.add('hide');
            borderTo.classList.remove('borderBottomNopn')
            openSelectFrom = false;
            openSelectTo = false;
        }
    })
    
})

amountFromInput.addEventListener('keyup', handlInput);
amountToInput.addEventListener('keyup', handlInputTo);
switchButton.addEventListener('click', switchCorrencis);

// скидки на промокоды в 50% комиссии
promoInput.addEventListener('keyup', function(){
    state.fee=0.02;
    convertion(state.rate);
    state.promocodes = 'Промокода нет';

    state.promos.forEach((promo) =>{
        if (promoInput.value === promo) {
            state.fee=0.019;
            state.promocodes = 'Промокод на 5%';
            convertion(state.rate);

        }
    });
    state.promos20.forEach((promo) =>{
        if (promoInput.value === promo) {
            state.fee=0.016;
            state.promocodes = 'Промокод на 20%';
            convertion(state.rate);
        }
    });
});

buttonToApplication.addEventListener('click', function(){
    if(state.amountFrom == "" || state.amountTo == "" || state.rate == "" || state.next == false) return;

    formConvertor.classList.add('hide');
    formApplication.classList.remove('hide');
    progressBarFormApplication.classList.remove('hide');
    
    state.orderNumber = Date.now();
    const orderNumberFromHtml = document.querySelector('.orderNumber');
    orderNumberFromHtml.innerText = `Назовите номер заявки №${state.orderNumber}`

    // 
    if ( state.pair.from != "RUB" && state.pair.from != "UAH" && state.pair.from != "TRY" ) {
        formQuestionnaire.innerHTML = renderFormPayOther();
        state.bankTo = 'Менеджер';

        const buttonToContects = document.getElementById('buttonToContects');
        const modalOverlay = document.querySelector('.modal-overlay');
        const modals = document.querySelectorAll('.modal');

        buttonToContects.addEventListener('click', (e)=>{
            let path = e.currentTarget.getAttribute('data-path');

            modals.forEach((el)=>{
                el.classList.remove('modal--visible')
            });

            document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
            modalOverlay.classList.add('modal-overlay--visible');
        });
    }
    else{
        formQuestionnaire.innerHTML = renderFormPay();
    }
    formQuestionnaireAllBank.innerHTML = renderFormPayAllbank();
        
    const translateCost = document.querySelectorAll('.bank-translate')
    translateCost.forEach((el)=>{
        el.innerHTML = ` К оплате ${state.amountFrom} ${state.pair.from}
                         <div class="bank-translate-border"></div>`
    });

    const modalDescriptionOverlay = document.querySelector('.modal-description-overlay');
    const modalsDescription = document.querySelectorAll('.modal-description');
    const closeModalDescription = document.getElementById('modal-description-clouse');
    const openModalDescription = document.querySelector('.convert-description');

    const nextModalDescription1 = document.getElementById('nextModalDescription1');
    const nextModalDescription2 = document.getElementById('nextModalDescription2');


    openModalDescription.addEventListener('click', function(event){
        event.preventDefault();

        modalsDescription.forEach((el)=>{
            el.classList.remove('modal--visible')
        });

        modalsDescription[0].classList.add('modal--visible');
        modalDescriptionOverlay.classList.add('modal-overlay--visible');
    });

    nextModalDescription1.addEventListener('click', function(event){
        event.preventDefault();

        modalsDescription.forEach((el)=>{
            el.classList.remove('modal--visible')
        });

        modalsDescription[1].classList.add('modal--visible');
    });

    nextModalDescription2.addEventListener('click', function(event){
        event.preventDefault();

        modalsDescription.forEach((el)=>{
            el.classList.remove('modal--visible')
        });

        modalsDescription[2].classList.add('modal--visible');
    });

    closeModalDescription.addEventListener('click', ()=>{
        modalDescriptionOverlay.classList.remove('modal-overlay--visible');
        modalsDescription.forEach((el)=>{
            el.classList.remove('modal--visible')
        });
    });


    modalDescriptionOverlay.addEventListener('click', (e)=>{
        if (e.target == modalDescriptionOverlay){
            modalDescriptionOverlay.classList.remove('modal-overlay--visible');
            modalsDescription.forEach((el)=>{
                el.classList.remove('modal--visible')
            });
        }
    });

    document.addEventListener('keydown', function(evt) {
        if (evt.key === 'Escape' || evt.key === 'Esc') {
            modalDescriptionOverlay.classList.remove('modal-overlay--visible');
            modalsDescription.forEach((el)=>{
                el.classList.remove('modal--visible')
            });
        }
    });

});

backToConvertor.addEventListener('click', function(){
    formApplication.classList.add('hide');
    progressBarFormApplication.classList.add('hide');
    formConvertor.classList.remove('hide');
})


FIO.addEventListener('keyup', handlQuestionnaire);
cartNumberTo.addEventListener('keyup', handlQuestionnaire);
bank.addEventListener('keyup', handlQuestionnaire);
senderName.addEventListener('keyup', handlQuestionnaire);
messanger.addEventListener('keyup', handlQuestionnaire);
cartNumberFrom.addEventListener('keyup', handlQuestionnaire);

const copyButtons = document.querySelectorAll('.copy-translation-cartNumber')
copyButtons.forEach((button) =>{
    button.addEventListener('click', (e)=>{
        let path = e.currentTarget.getAttribute('data-path');
        navigator.clipboard.writeText(path);
    });
})

buttonToQuestionnaire.addEventListener('click', function(event){
    event.preventDefault();

    const inputErr = 'border: 1px solid rgb(208, 0, 0);';
    const inputOk = 'border: 1px solid rgb(177, 177, 177);';

    FIO.style = inputOk;
    cartNumberTo.style = inputOk;
    bank.style = inputOk;
    senderName.style = inputOk;
    messanger.style = inputOk;
    cartNumberFrom.style = inputOk;

    if (state.FIO === "") FIO.style = inputErr;
    if (state.cartNumberTo === "") cartNumberTo.style = inputErr;
    if (state.bank === "") bank.style = inputErr;
    if (state.senderName === "") senderName.style = inputErr;
    if (state.messanger === "") messanger.style = inputErr;
    if (state.cartNumberFrom === "") cartNumberFrom.style = inputErr;
    
    if(state.FIO == "" || state.cartNumberTo == "" || state.bank == "" || state.senderName == "" || state.messanger == "" || state.cartNumberFrom== "") return;


    if ( state.pair.from != "RUB" && state.pair.from != "UAH" && state.pair.from != "TRY" ) {
        if(state.sendMesngerBool){
            sendMassege();
            state.sendMesngerBool = false;
        }
    }   

    progressBarFormApplication.classList.add('hide');
    formApplication.classList.add('hide');
    formQuestionnaire.classList.remove('hide');
    progressBarFormQuestionnaire.classList.remove('hide');

    const backToApplication = document.querySelectorAll('.backToApplication')
    backToApplication.forEach((el)=>{
        el.addEventListener('click', ()=>{
            formQuestionnaire.classList.add('hide');
            formQuestionnaireAllBank.classList.add('hide');
            progressBarFormQuestionnaire.classList.add('hide');
            formApplication.classList.remove('hide');
            progressBarFormApplication.classList.remove('hide');

        });
    });

    const btns = document.querySelectorAll('.choice-bank__item');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modals = document.querySelectorAll('.modal');
    const closeModal = document.querySelectorAll('.close-icon');

    btns.forEach((el)=>{
        el.addEventListener('click', (e)=>{
            let path = e.currentTarget.getAttribute('data-path');
            state.bankTo = path;

            if (path=="tg"){
                return;
            }

            modals.forEach((el)=>{
                el.classList.remove('modal--visible')
            });

            document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
            modalOverlay.classList.add('modal-overlay--visible');
        });
    });
    const buttonModals = document.querySelectorAll('.buttonForAllBank');
    buttonModals.forEach((button) =>{
        button.addEventListener('click', (e)=>{
            let path = e.currentTarget.getAttribute('data-path');

            if (path=="toTg"){
                if(state.sendMesngerBool){
                    sendMassege();
                    state.sendMesngerBool = false;
                }

                formCheck.innerHTML = renderCheckPay();
                formQuestionnaire.classList.add('hide');
                formQuestionnaireAllBank.classList.add('hide');
                progressBarFormQuestionnaire.classList.add('hide');
                formCheck.classList.remove('hide');
                progressBarFormCheck.classList.remove('hide');

                const buttonToMain = document.getElementById('backToMain');
                buttonToMain.addEventListener('click',() =>{
                    location.reload(); 
                })

                const buttonToMainFromAllBank = document.querySelector('.toMain');
                buttonToMainFromAllBank.addEventListener('click', ()=>{
                    modalOverlay.classList.remove('modal-overlay--visible');
                    modals.forEach((el)=>{
                        el.classList.remove('modal--visible')
                    });
                });
            }
    
            modals.forEach((el)=>{
                el.classList.remove('modal--visible')
            });
    
            document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
            modalOverlay.classList.add('modal-overlay--visible');
        });
    })

    

    closeModal.forEach((el)=>{
        el.addEventListener('click', ()=>{
            modalOverlay.classList.remove('modal-overlay--visible');
            modals.forEach((el)=>{
                el.classList.remove('modal--visible')
            });
        });
    });

    modalOverlay.addEventListener('click', (e)=>{
        if (e.target == modalOverlay){
            modalOverlay.classList.remove('modal-overlay--visible');
            modals.forEach((el)=>{
                el.classList.remove('modal--visible')
            });
        }
    });

    document.addEventListener('keydown', function(evt) {
        if (evt.key === 'Escape' || evt.key === 'Esc') {
            modalOverlay.classList.remove('modal-overlay--visible');
            modals.forEach((el)=>{
                el.classList.remove('modal--visible')
            });
        }
    });

    const buttonsToPaymentСonfirmation = document.querySelectorAll('.paid');
    buttonsToPaymentСonfirmation.forEach((buttonToPaymentСonfirmation)=>{
        buttonToPaymentСonfirmation.addEventListener('click', (e)=>{

            let path = e.currentTarget.getAttribute('data-path');

            modals.forEach((el)=>{
                el.classList.remove('modal--visible')
            });

            document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
            modalOverlay.classList.add('modal-overlay--visible');
        });
    })

    const buttonsToPayQr = document.querySelectorAll('.paidQr');
    buttonsToPayQr.forEach((buttonToPaymentСonfirmation)=>{
        buttonToPaymentСonfirmation.addEventListener('click', (e)=>{

            let path = e.currentTarget.getAttribute('data-path');

            modals.forEach((el)=>{
                el.classList.remove('modal--visible')
            });

            document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
            modalOverlay.classList.add('modal-overlay--visible');
        });
    })

    const buttonToCheck = document.querySelector('.paidYes');
    buttonToCheck.addEventListener('click',() =>{
        formCheck.innerHTML = renderCheckPay();
        formQuestionnaire.classList.add('hide');
        formQuestionnaireAllBank.classList.add('hide');
        progressBarFormQuestionnaire.classList.add('hide');
        formCheck.classList.remove('hide');
        progressBarFormCheck.classList.remove('hide');
        
        if(state.sendMesngerBool){
            sendMassege();
            state.sendMesngerBool = false;
        }
        
        modalOverlay.classList.remove('modal-overlay--visible');
        modals.forEach((el)=>{
            el.classList.remove('modal--visible')
        });
        
        const buttonToMain = document.getElementById('backToMain');
        buttonToMain.addEventListener('click',() =>{
            location.reload(); 
        })
    })
    const buttonBackApplication = document.querySelector('.paidNo');
    buttonBackApplication.addEventListener('click',() =>{
        modalOverlay.classList.remove('modal-overlay--visible');
        modals.forEach((el)=>{
            el.classList.remove('modal--visible')
        });
    })

})