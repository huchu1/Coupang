/**
 * 
 */
// document가 load된 후 실행하기 위한 이벤트리스너
document.addEventListener("DOMContentLoaded", function() {

	// 약관 화살표 클릭이벤트 처리를 위한 변수
	var linkOne = document.getElementById("agreeOne");
	var linkTwo = document.getElementById("agreeTwo");
	var linkThree = document.getElementById("agreeThree");
	var linkFour = document.getElementById("agreeFour");
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
		if (event.target == modalOne) {
			modalOne.style.display = "none";
		}
		if (event.target == modalTwo) {
			modalTwo.style.display = "none";
		}
		if (event.target == modalThree) {
			modalThree.style.display = "none";
		}
		if (event.target == modalFour) {
			modalFour.style.display = "none";
		}
    }
 
	//-------------------------------------------------------------
	// 이메일 입력란 id 읽기
 	const inputEmail = document.getElementById("email");
	
	// 이메일 입력란에 포커싱이 된 경우
	inputEmail.addEventListener('focusin', function() {
		//document.getElementById("email-error").classList.remove("error-text");
		//inputEmail.classList.remove("error-input");		
		inputEmail.classList.add("input-focus");
		document.getElementById("email-ok").classList.remove("btn-check-ok");
		console.log("email focus");
	});
	
	// 이메일 입력란에 포커싱을 벗어난 경우
	inputEmail.addEventListener('focusout', function() {
		let isTextExist;
		const emailText = document.getElementById("email-input");
		inputEmail.classList.remove("input-focus");
		//inputEmail.classList.add("error-input");
		isTextExist = readInputText(emailText);
		
		console.log(isTextExist);
		
		if (!isTextExist) { // 텍스트가 존재하지 않으면 에러상태를 나타낸다.
			document.getElementById("emailrule").classList.remove("error-text");
			document.getElementById("email-error").classList.remove("error-text");
			document.getElementById("email-error").classList.add("error-text");
			inputEmail.classList.remove("error-input");
			inputEmail.classList.add("error-input");
			console.log("add error input");
		} else { // 텍스트가 존재하는 경우 입력처리
			let isMatch = checkEmailRule(emailText);
			if (isMatch) { // 정규식 비교 결과 정상 입력.
				document.getElementById("email-error").classList.remove("error-text");
				document.getElementById("emailrule").classList.remove("error-text");
				inputEmail.classList.remove("error-input");
				document.getElementById("email-ok").classList.add("btn-check-ok");
			} else { // 정규식 비교 결과 이메일 양식으로 작성되지 않음.
				document.getElementById("email-error").classList.remove("error-text");
				document.getElementById("emailrule").classList.remove("error-text");
				document.getElementById("emailrule").classList.add("error-text");
			}
		}
		
		console.log("email focus out " + emailText.value);
	});

	//-------------------------------------------------------------
	// 이름 입력란의 id 읽기
	const inputName = document.getElementById("name");
	
	// 이름 입력란에 포커싱이 된 경우
	inputName.addEventListener('focusin', function() {
		inputName.classList.add("input-focus");
		document.getElementById("name-ok").classList.remove("btn-check-ok");
		console.log("name focus");
	});
	
	// 이름 입력란에 포커싱을 벗어난 경우
	inputName.addEventListener('focusout', function() {
		let isTextExist;
		const nameText = document.getElementById("name-input");
		inputName.classList.remove("input-focus");
		isTextExist = readInputText(nameText);
		
		console.log(isTextExist);
		
		if (!isTextExist) { // 텍스트가 존재하지 않으면 에러상태를 나타낸다.
			document.getElementById("name-error").classList.add("error-text");
			inputName.classList.add("error-input");
			console.log("add error input");
		} else { // 텍스트가 존재하는 경우 입력처리
			document.getElementById("name-error").classList.remove("error-text");
			inputName.classList.remove("error-input");
			document.getElementById("name-ok").classList.add("btn-check-ok");
		}
		
		console.log("name focus out");
	});
	
	//-------------------------------------------------------------
	// 휴대폰 번호 입력란의 id 읽기
	const inputPhone = document.getElementById("phone");
	
	// 휴대폰 번호 입력란에 포커싱이 된 경우
	inputPhone.addEventListener('focusin', function() {
		inputPhone.classList.add("input-focus");
		document.getElementById("phone-ok").classList.remove("btn-check-ok");
		console.log("phone focus");
	});
	
	// 휴대폰 번호 입력란에 포커싱을 벗어난 경우
	inputPhone.addEventListener('focusout', function() {
		let isTextExist;
		const phoneText = document.getElementById("phone-input");
		inputPhone.classList.remove("input-focus");
		isTextExist = readInputText(phoneText);
		
		console.log(isTextExist);
		
		if (!isTextExist) { // 텍스트가 존재하지 않으면 에러상태를 나타낸다.
			document.getElementById("phonenumber-rule").classList.remove("error-text");
			document.getElementById("phone-error").classList.remove("error-text");
			document.getElementById("phone-error").classList.add("error-text");
			inputPhone.classList.remove("error-input");
			inputPhone.classList.add("error-input");
			console.log("add error input");
		} else { // 텍스트가 존재하는 경우 입력처리
			let isMatch = checkPhoneRule(phoneText);
			if (isMatch) { // 정규식 비교 결과 정상 입력.
				document.getElementById("phone-error").classList.remove("error-text");
				document.getElementById("phonenumber-rule").classList.remove("error-text");
				inputPhone.classList.remove("error-input");
				document.getElementById("phone-ok").classList.add("btn-check-ok");
			} else { // 정규식 비교 결과 휴대폰번호 양식으로 작성되지 않음.
				document.getElementById("phone-error").classList.remove("error-text");
				document.getElementById("phonenumber-rule").classList.remove("error-text");
				document.getElementById("phonenumber-rule").classList.add("error-text");
			}
		}
		
		console.log("phone focus out");
	});
	
	//-------------------------------------------------------------
	// 비밀번호 입력란의 id 읽기
	const inputPsw = document.getElementById("psw");
	
	// 비밀번호 입력란에 포커싱이 된 경우
	inputPsw.addEventListener('focusin', function() {
		inputPsw.classList.add("input-focus");
		document.getElementById("psw-check").classList.add("psw-focus");
		document.getElementById("psw-ok").classList.remove("btn-check-ok");
		console.log("psw focus");
	});
	
	// 비밀번호 입력란에 포커싱을 벗어난 경우
	inputPsw.addEventListener('focusout', function() {
		let isTextExist;
		const pswText = document.getElementById("psw-input");
		inputPsw.classList.remove("input-focus");
		isTextExist = readInputText(pswText);
		
		console.log(isTextExist);
		
		if (!isTextExist) { // 텍스트가 존재하지 않으면 에러상태를 나타낸다.
			document.getElementById("pw-all-checked").classList.remove("not-success");
			document.getElementById("pw-all-checked").classList.add("not-success");
			document.getElementById("pw-all-checked").classList.remove("success");
			inputPsw.classList.add("error-input");
			console.log("add error input");
		} else { // 정상 입력처리
			document.getElementById("psw-check").classList.remove("error-text");
			document.getElementById("psw-check").classList.remove("psw-focus");
			document.getElementById("pw-all-checked").classList.remove("not-success");
			document.getElementById("pw-all-checked").classList.remove("success");
			document.getElementById("pw-all-checked").classList.add("success");
			inputPsw.classList.remove("error-input");
			document.getElementById("psw-ok").classList.add("btn-check-ok");
		}
		
		console.log("psw focus out");
	});

	// 입력 중 비밀번호 규칙 확인
	inputPsw.addEventListener('input', function() {
		let isRuleOk; 
		const pswText = document.getElementById("psw-input");

		isRuleOk = checkPasswordRule(pswText);

		console.log(isRuleOk + ", text: " + pswText.value);

		if (isRuleOk) { // 비밀번호 규칙 첫번째 준수
			document.getElementById("pw-conbine").classList.remove("error-text");
			document.getElementById("pw-conbine").classList.remove("not-success");
			document.getElementById("pw-conbine").classList.add("not-success");
			document.getElementById("pw-conbine-ok").classList.remove("not-success");
			document.getElementById("pw-conbine-ok").classList.remove("success");
			document.getElementById("pw-conbine-ok").classList.add("success");
		} else { // 규칙을 준수하지 못함
			document.getElementById("pw-conbine-ok").classList.remove("success");
			document.getElementById("pw-conbine-ok").classList.remove("not-success");
			document.getElementById("pw-conbine-ok").classList.add("not-success");
			document.getElementById("pw-conbine").classList.remove("error-text");
			document.getElementById("pw-conbine").classList.add("error-text");
			inputPsw.classList.remove("error-input");
			inputPsw.classList.add("error-input");
		}

		if(/(\w)\1\1/.test(pswText.value)){ // 같은 문자 3번 이상인 경우
			document.getElementById("pw-sequence-ok").classList.remove("success");
			document.getElementById("pw-sequence-ok").classList.remove("not-success");
			document.getElementById("pw-sequence-ok").classList.add("not-success");
			document.getElementById("pw-sequence").classList.remove("error-text");
			document.getElementById("pw-sequence").classList.add("error-text");
			inputPsw.classList.remove("error-input");
			inputPsw.classList.add("error-input");
		} else { // 중복 검사 통과
			document.getElementById("pw-sequence").classList.remove("error-text");
			document.getElementById("pw-sequence").classList.remove("not-success");
			document.getElementById("pw-sequence").classList.add("not-success");
			document.getElementById("pw-sequence-ok").classList.remove("not-success");
			document.getElementById("pw-sequence-ok").classList.remove("success");
			document.getElementById("pw-sequence-ok").classList.add("success");
		}

		// email 아이디란에 입력한 값을 비밀번호에 사용했는지 검사
		const emailText = document.getElementById("email-input");
		const emailSplit = emailText.value.split("@");

		console.log(emailSplit[0]);
		// email @ 이전 아이디 값을 사용하는가
		if (!pswText.value.match(emailSplit[0])) { 
			document.getElementById("ispw-id").classList.remove("error-text");
			document.getElementById("ispw-id").classList.remove("not-success");
			document.getElementById("ispw-id").classList.add("not-success");
			document.getElementById("ispw-id-ok").classList.remove("not-success");
			document.getElementById("ispw-id-ok").classList.remove("success");
			document.getElementById("ispw-id-ok").classList.add("success");
		} else { // 아이디 값을 비밀번호로 쓴 경우
			document.getElementById("ispw-id-ok").classList.remove("success");
			document.getElementById("ispw-id-ok").classList.remove("not-success");
			document.getElementById("ispw-id-ok").classList.add("not-success");
			document.getElementById("ispw-id").classList.remove("error-text");
			document.getElementById("ispw-id").classList.add("error-text");
			inputPsw.classList.remove("error-input");
			inputPsw.classList.add("error-input");
		}
	});
	
	//-------------------------------------------------------------
	// 비밀번호 확인 입력란의 id 읽기
	const inputConfirmPsw = document.getElementById("confirmPsw");
	
	// 비밀번호 확인 입력란에 포커싱이 된 경우
	inputConfirmPsw.addEventListener('focusin', function() {
		inputConfirmPsw.classList.add("input-focus");
		document.getElementById("confirm-check").classList.remove("psw-focus");
		document.getElementById("confirm-check").classList.add("psw-focus");
		document.getElementById("psw-match").classList.remove("not-success");
		document.getElementById("psw-match").classList.add("not-success");
		document.getElementById("confirmPsw-ok").classList.remove("btn-check-ok");
		console.log("confirmPsw focus");
	});
	
	// 비밀번호 확인 입력란에 입력을 하는 경우
	inputConfirmPsw.addEventListener('input', function() {
		let isTextMatch;
		const pswText = document.getElementById("psw-input");
		const confirmPswText = document.getElementById("confirmPsw-input");
		
		inputConfirmPsw.classList.remove("input-focus");
		
		if (pswText.value === confirmPswText.value) {
			isTextMatch = true;
		} else {
			
			isTextMatch = false;
		}
		
		console.log("pw " + pswText.value + ", input: " + confirmPswText.value);
		
		console.log(isTextMatch);
		
		if (!isTextMatch) { // 텍스트가 존재하지 않으면 에러상태를 나타낸다.
			document.getElementById("psw-not-match").classList.remove("not-success");
			document.getElementById("psw-match").classList.remove("success");
			document.getElementById("confirm-check").classList.remove("error-text");
			document.getElementById("confirm-check").classList.add("error-text");
			inputConfirmPsw.classList.remove("error-input");
			inputConfirmPsw.classList.add("error-input");
			console.log("add error input");
		} else { // 정상 입력처리
			inputConfirmPsw.classList.remove("error-input");
			document.getElementById("confirm-check").classList.remove("error-text");
			document.getElementById("confirm-check").classList.add("success");
			document.getElementById("psw-not-match").classList.add("not-success");
			document.getElementById("psw-match").classList.remove("not-success");
			document.getElementById("confirmPsw-ok").classList.add("btn-check-ok");
		}
		
		console.log("confirmPsw input");
	});
	
	// 모든 동의 체크박스 처리
	const allCheck = document.querySelector("input[name=all-agree]");
	let checkbox = document.getElementsByName('agree');
	
	allCheck.addEventListener('change', function() {
		if (this.checked) {
			console.log("Checkbox is checked..");
			for (let chkIdx = 0; chkIdx < checkbox.length; chkIdx++) {
				console.log(checkbox[chkIdx] + "...true");
				checkbox[chkIdx].checked = true;
			}
		} else {
			console.log("Checkbox is not checked..");
			for (let chkIdx = 0; chkIdx < checkbox.length; chkIdx++) {
				console.log(checkbox[chkIdx] + "...false");
				checkbox[chkIdx].checked = false;
			}
		}
	});
});

// 텍스트 입력란에 텍스트가 존재하는지 검사하는 함수
let readInputText = (input) => {
	let result = false;

	console.log("input value: " + input.value);
	if ((input.value === null) || (input.value === "")) {
		result = false;
	} else {
		result = true;
	}
	
	return result;
}

// email 정규식을 검사하는 함수
let checkEmailRule = (emailText) => {
	//이메일 정규식
	var emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

	if (emailRule.test(emailText.value)) {
		console.log("correct input email");
	} else {
		console.log("this is not email form");
	}

	return emailRule.test(emailText.value); // 정규식 비교 결과를 리턴 (true / false)
}

// 휴대폰 번호 정규식을 검사하는 함수
let checkPhoneRule = (phoneText) => {
	// 휴대폰 번호 정규식
	var phoneRule = /^\d{3}-\d{3,4}-\d{4}$/;

	if (phoneRule.test(phoneText.value)) {
		console.log("correct input phone number");
	} else {
		console.log("this is not match phone number form");
	}

	return phoneRule.test(phoneText.value); // 정규식 비교 결과를 리턴 (true / false)
}

// 비밀번호 정규식을 검사하는 함수
let checkPasswordRule = (password) => {
	// 길이 8~20, 소문자 하나, 특수문자 하나이상
	var passwordRule = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{8,20}$/;

	if (passwordRule.test(password.value)) {
		console.log("comply with password rule");
	} else {
		console.log("comply with password rule");
	}

	return passwordRule.test(password.value); // 정규식 비교 결과를 리턴 (true / false)
}