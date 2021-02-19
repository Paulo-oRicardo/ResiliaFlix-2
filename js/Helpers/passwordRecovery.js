const $ = document.getElementById.bind(document);
const checarBox = $("agreeCheck");
const btnCheck = $("button");

btnCheck.addEventListener("click", function verificaEMAIL(e) {
	e.preventDefault();
	let passwordReset = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
	let inputEmail = $("emailCheck").value;
	let spanAlert = $("spanAlert");

	let mailError = `<small id ="emailAlert"> Please, enter the email address associated with your account. </small>`;

	let mailSucess = `<small id ="emailAlert"> We sent a password reset link to  <a class="alert-link">${inputEmail}.</a> </small>
	<p>Back to login. Click <a href="../">here</a></p>`;

	if (inputEmail == "") {
		emailAlert.innerHTML = mailError;
        
	} else if(inputEmail != "") {
        emailAlert.innerHTML = mailSucess;
    } 
});

function Check(CheckBox) {
	if (CheckBox.checked) {
		$("button").disabled = false;
	} else {
		$("button").disabled = true;
	}
}