function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin
    }
    else {
        return getPin();
        console.log('4 digit pin genaret', pin);
    }
}




function generatePin() {

    const pin = getPin();
    document.getElementById('show-pin').value = pin;

}

document.getElementById('calc-body').addEventListener('click', function (event) {



    const number = event.target.innerText;
    const calsInput = document.getElementById('calc-number');
    if (isNaN(number)) {

        if (number == 'C') {
            calsInput.value = '';
        }

    }

    else {
        const priviusNumber = calsInput.value;
        const newNumber = priviusNumber + number;
        calsInput.value = newNumber;
    }


})


function varifyCode() {
    const calsNumber = document.getElementById('calc-number').value;
    const showPin = document.getElementById('show-pin').value;
    const notifySuccess = document.getElementById('notify-success');
    const notifyerror = document.getElementById('notify-error');
    if (showPin == calsNumber) {

        notifySuccess.style.display = 'block';
        notifyerror.style.display = 'none';
    }
    else {
        notifySuccess.style.display = 'none';
        notifyerror.style.display = 'block';
    }
}