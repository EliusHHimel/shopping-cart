function updateProductNumber(product, isIncreasing, price) {
    const inputCase = document.getElementById('input-' + product);
    let inputNumber = inputCase.value;
    if (isIncreasing == true) {
        inputNumber = parseInt(inputNumber) + 1;
    }
    else if (inputNumber > 0) {
        inputNumber = parseInt(inputNumber) - 1;
    }
    inputCase.value = inputNumber;

    const phoneTotal = document.getElementById(product + '-total');
    phoneTotal.innerText = inputNumber * price;

    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById('input-' + product);
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', true, 1219)
})

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', false, 1219)
})

document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', true, 59)
})

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', false, 59)
})

