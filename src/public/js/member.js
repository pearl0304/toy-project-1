document.addEventListener('DOMContentLoaded', function () {
  const submitBtn = document.getElementById('submit_btn');
  const submitSignupBtn = document.getElementById('submit_signup_btn');

  if (submitBtn) {
    submitBtn.addEventListener('click', function () {
      handleButtonClick(event, [['uid', '아이디'], ['passwd', '비밀번호']]);
    });
  }

  if (submitSignupBtn) {
    submitSignupBtn.addEventListener('click', function () {
      handleButtonClick(event, [['uid','아이디'], ['name','이름'], ['email','이메일'], ['passwd','패스워드']]);
    });
  }
});

function validateAndFocus(inputName, errorMessage) {
  const input = document.getElementsByName(inputName)[0];

  if (!input.value.trim()) {
    Swal.fire({
      title: errorMessage,
      icon: 'warning'
    }).then(() => {
      if (input) {
        input.focus();
      }
    });
    return false;
  }
  return true;
}

function handleButtonClick(event, fields) {
  for (const [fieldName, fieldLabel] of fields) {
    const fieldValue = document.getElementsByName(fieldName)[0].value;
    if (fieldValue == '') {
      const errorMessage = `${fieldLabel}을 입력하세요.`
      validateAndFocus(fieldName, errorMessage);
      event.preventDefault();
      return;
    }
  }
}