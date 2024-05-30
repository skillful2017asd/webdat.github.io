
$('.form-submit').click(function (event) {
    let email = $('input[name="emailRegister"]').val();
    let firstname = $('input[name="firstName"]').val();
    let phone = $('input[name="phoneNumber"]').val();
    let pass = $('input[name="passwordRegister"]').val();



    let validateName = true;
    let validatePass = true;
    let validateEmail = true;
    let validatePhone = true;
    let validate = true;

    if (email === '') {
        $('.erroremail').text('email đang để trống');
        validateEmail = false
    } else if (!isValidEmail(email)) {
        $('.erroremail').text('Email không hợp lệ');
        validateEmail = false;
    }
    else {
        $('.erroremail').text('');
        validateEmail = true;
    }
    if (firstname === '') {
        $('.errorname').text('Tên đang để trống');
        validateName = false
    } else {
        $('.errorname').text('');
        validateName = true;
    }
    if (phone === '') {
        $('.errorphone').text('Số điện thoại đang để trống');
        validateName = false
    } else if (!isValidPhone(phone)) {
        $('.errorphone').text('Số điện thoại không hợp lệ');
        validatePhone = false;
    }
    else {
        $('.errorphone').text('');
        validateName = true;
    }
    if (pass === '') {
        $('.errorpass').text('Mật khẩu đang để trống');
        validateName = false
    } else {
        $('.errorpass').text('');
        validateName = true;
    }
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    function isValidPhone(phone) {
        const phoneRegex = /^\+?\d{1,3}?[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/;
        return phoneRegex.test(phone);
    }
    validate = validateName && validatePass && validateEmail && validatePhone;
    if (validate) {
        alert('Đăng ký thành công')
    }
});


$('.form-contact').click(function (e) {
    let email_contact = $('input[name="email-Contact"]').val();
    let name = $('input[name="name-Contact"]').val();
    let prolem = $('input[name="problem-Contact"]').val();
    let content = $('input[name="content-Contact"]').val();

    let validateName = true;
    let validateProblem = true;
    let validateEmail = true;
    let validateContent = true;
    let validate = true;

    if (email_contact === '') {
        $('.erroremail_contact').text('Email đang để rỗng');
        validateEmail = false;
    }
    else if (!isValidEmail(email)) {
        $('.erroremail_contact').text('Email không hợp lệ');
        validateEmail = false;
    } else {
        $('.erroremail_contact').text('aaa');
        validateEmail = true;
    }
    if (name === '') {
        $('.errorname').text('Tên đang để rỗng');
        validateName = false;
    } else {
        $('.errorname').text('');
        validateName = true;
    }
    if (prolem === '') {
        $('.errorproblem').text('Vấn đề đang để rỗng');
        validateProblem = false;
    } else {
        $('.errorproblem').text('');
        validateProblem = true;
    }
    if (content === '') {
        $('.errorcontent').text('Nội dung đang để rỗng');
        validateProblem = false;
    } else {
        $('.errorcontent').text('');
        validateProblem = true;
    }
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    validate = validateEmail && validateName && validateProblem && validateContent;
    if (validate) {
        alert('Cảm ơn quý khách đã góp ý')
    }

});
