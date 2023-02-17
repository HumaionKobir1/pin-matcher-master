/********************* WAY0 - 1 ************ */

// function getPin(){
//     const pin = generatePin();
//     const pinString = pin + '';

//     if(pinString.length === 4){
//         return pin;
//     }
//     else{
//         return getPin();
//     }
// }



// function generatePin(){
//     const random = Math.round(Math.random()*10000);
//     return random;
// }



/********************* WAY0 - 2 ************ */
function btnGeneratePin(){
    // const pin = getPin();
    // // display pin
    // const displayPinField = document.getElementById('display-pin');
    // displayPinField.value = pin;

    const randomNumber = Math.floor(Math.random() * 9000 + 1000);
    document.getElementById("display-pin").value = randomNumber;
    // let inputField = document.getElementById("displayRandomNumber").value;
    
}

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousNumber = typedNumberField.value;

    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }

    
    else{
        
        const newTypedNumber = previousNumber + number;
        typedNumberField.value = newTypedNumber;
    }
})

function verifyBtn(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;
    const typedNumberField = document.getElementById('typed-numbers');
    const pinWrongMessage = document.getElementById('pin-wrong');
    const pinSuccessMessage = document.getElementById('pin-success');

    const typedNumber = typedNumberField.value;

    typedNumberField.value = '';
    displayPinField.value = '';

    if (currentPin === typedNumber){
        pinSuccessMessage.style.display = 'block';
        pinWrongMessage.style.display = 'none';
    }
    else{
        pinWrongMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
}