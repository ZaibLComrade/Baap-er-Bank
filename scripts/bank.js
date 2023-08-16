const depositButton = document.getElementById("deposit-btn");
const withdrawButton = document.getElementById("withdraw-btn");

function getElementValueById(elementId) {
	const element = document.getElementById(elementId);
	return parseFloat(element.innerText);
}

function getInputValueById(inputId) {
	const input = document.getElementById(inputId);
	let val = parseFloat(input.value);
	input.value = '';
	return val;
}

function setElementValueById(elementId, newValue) {
	document.getElementById(elementId).innerText = newValue.toFixed(2);
}

// isDeposit value is true for deposit event
function manipulateAmounts(elementId, inputId, isDeposit) {
	const value = getInputValueById(inputId);
	const prevValue = getElementValueById(elementId);
	const prevTotalValue = getElementValueById("total-amount");

	if(isNaN(value) || value < 1) {
		alert("Please enter a valid number");
		return;
	}

	let newValue = prevValue + value;
	let newTotalValue;
	if(isDeposit) newTotalValue = prevTotalValue + value; 
	else {
		if(value > prevTotalValue) {
			alert("No sufficient money");
			return;
		}
		newTotalValue = prevTotalValue - value;
	}	
	setElementValueById(elementId, newValue)
	setElementValueById("total-amount", newTotalValue)	
}

depositButton.addEventListener("click", () => {
	manipulateAmounts("deposit-amount", "deposit-input", true);
})

withdrawButton.addEventListener("click", () => {
	manipulateAmounts("withdraw-amount", "withdraw-input", false)
})
