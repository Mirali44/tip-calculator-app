const billInput = document.getElementById('bill');
const buttonDiv = document.getElementById('button_div')
const firstButton = buttonDiv.children[0];
const secondButton = buttonDiv.children[1];
const thirdButton = buttonDiv.children[2];
const fourthButton = buttonDiv.children[3];
const fifthButton = buttonDiv.children[4];
const lastButton = buttonDiv.children[5];
const peopleInput = document.getElementById('people');
const resetButton = document.getElementById('reset');
const billZero = document.getElementById('billZero')
const peopleZero = document.getElementById('peopleZero')

const total = (percent) => {
    if(billInput.value == 0){
        billInput.style = "border: 1px solid red"
        billZero.style = 'display: block'  
    } else{
        billInput.style = "border: 1px solid green"
        billZero.style = 'display: none'
    }
    if(peopleInput.value == 0){
        peopleInput.style = "border: 1px solid red"
        peopleZero.style = 'display: block'
    } else{
        peopleInput.style = "border: 1px solid green"
        peopleZero.style = 'display: none'
    }
    if(billInput.value == 0 || peopleInput.value == 0){
        return
    }
    if(percent > 100) {
        alert('Please add a value below 100')
        return
    }
    
        billInput.style = "border: 0"
        peopleInput.style = "border: 0"
        const totalPerPerson = parseFloat(billInput.value) / parseFloat(peopleInput.value);
        const totalTipPerPerson = (parseFloat(billInput.value) / parseFloat(peopleInput.value)) * percent/100;
        showValues(totalPerPerson.toFixed(2), totalTipPerPerson.toFixed(2));
    
    
}

const showValues = (amount, tip, check = true) => {
    const tipAmount = document.getElementById('tip_amount_value');
    const totalAmount = document.getElementById('total_value');
    
    if(check){
        tipAmount.textContent = `$${amount}`
        totalAmount.textContent = `$${tip}`
    } else {
        tipAmount.textContent = `$0.00`
        totalAmount.textContent = `$0.00`
        billInput.value = '';
        peopleInput.value = '';
        billInput.style = 'border: 0'
        peopleInput.style = 'border: 0'
        billZero.style = 'display: none'  
        peopleZero.style = 'display: none'  
    }
    
}

const firstButtonHandler = () => {   
    total(5);
}
const secondButtonHandler = () => {
    total(10);
}
const thirdButtonHandler = () => {
    total(15);
}
const fourthButtonHandler = () => {
    total(25);
}
const fifthButtonHandler = () => {
    total(50);
}
const lastButtonHandler = () => {
    total(lastButton.value);
}
const resetHandler = () => {
    showValues(0, 0, false);
}

firstButton.addEventListener('click', firstButtonHandler)
secondButton.addEventListener('click', secondButtonHandler)
thirdButton.addEventListener('click', thirdButtonHandler)
fourthButton.addEventListener('click', fourthButtonHandler)
fifthButton.addEventListener('click', fifthButtonHandler)
lastButton.addEventListener('keyup', lastButtonHandler)
resetButton.addEventListener('click', resetHandler)