const openModalPromo = document.getElementById('openModalPromo')
const closeModalPromo = document.getElementById('closeModalPromo')
const closeModalKYC = document.getElementById('closeModalKYC')
const closeModalBtnKYC = document.getElementById('closeModalBtn')
const modalPromo = document.getElementById('modal-promo')
const copyBtn = document.getElementById('copyBtn')
const promo = document.getElementById('promo-code')

const openModalKYC = document.getElementById('openModalKYC')
const modalKYC = document.getElementById('modal-kyc')
// Модальное окно подарка (промокод)
    
openModalPromo.addEventListener('click', () => {
    modalPromo.style.display = 'flex'
} )

closeModalPromo.addEventListener('click', () => {
    modalPromo.style.display = 'none'
})

modalPromo.addEventListener('click', (event) => {
    if (event.target === modalPromo) {
        modalPromo.style.display = 'none'
    }
})

copyBtn.addEventListener('click', () => {
    const promoCode = 'PAYBONUS';
    navigator.clipboard.writeText(promoCode).then(() => {
        copyBtn.innerText = 'Скопировано'
        copyBtn.disabled = true
    })

    setTimeout(() => {
        copyBtn.innerText = 'Копировать'
        copyBtn.disabled = false
    }, 2000)
})

promo.addEventListener('click', () => {
    const promoCode = 'PAYBONUS';
    navigator.clipboard.writeText(promoCode).then(() => {
        copyBtn.innerText = 'Скопировано'
        copyBtn.disabled = true
    })

    setTimeout(() => {
        copyBtn.innerText = 'Копировать'
        copyBtn.disabled = false
    }, 3000)
})

// Модальное окно AML/KYC

openModalKYC.addEventListener('click', () => {
    modalKYC.style.display = 'flex'
})

closeModalKYC.addEventListener('click', () => {
    modalKYC.style.display = 'none'
})