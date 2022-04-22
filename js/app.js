function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const isString = pin + '';
    if (isString.length == 4) {
        return pin;
    }
    else {
        // console.log('get 3 digit, so back');
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-input').value = pin;
}
function verifyPin() {
    const pin = document.getElementById('display-input').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const success = document.getElementById('notify-success');
    const fail = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        success.style.display = 'block';
        fail.style.display = 'none';
    }
    else {
        fail.style.display = 'block';
        success.style.display = 'block';
    }
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText; //new number
    const calc = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calc.value = '';
        }
    }
    else {
        const previousNumber = calc.value;
        const newNumber = previousNumber + number;
        calc.value = newNumber;
    }


})