const validEmail = "kmjahanzaib@gmail.com";
const validPass = "1234";

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", () => {
	let email = document.getElementById("input-email");
	console.log(email);
	let pass = document.getElementById("input-pass");
	console.log(pass);
	if(email.value == '' && pass.value == '') {
		alert("Input fields are empty. Please fill inputs");
		return;
	}
	if(email.value != validEmail) {
		alert("Email not valid. Please try again");
		email.value = '';
		return;
	}
	if(pass.value != validPass) {
		alert("Password not valid. Please try again");
		pass.value = '';
		return;
	}
	window.location.href = "./bank.html"
});
