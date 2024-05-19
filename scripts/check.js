
$('.form-submit').click(function (event){
    let email = $('input[name="emailRegister"]').val();
    let firstname = $('input[name="firstName"]').val();
    let phone = $('input[name="phoneNumber"]').val();
    let pass = $('input[name="passwordRegister"]').val();


    let validateName = true;
	let validatePass = true;
	let validateEmail = true;
	let validatePhone = true;
	let validate = true;

    if (email === ''){
        $('.erroremail').text('email đang để trống');
        validateEmail = false
    }else{
        $('.erroremail').text('');
        validateEmail = true;
    }
    if (firstname === ''){
        $('.errorname').text('Tên đang để trống');
        validateName = false
    }else{
        $('.errorname').text('');
        validateName = true;
    }
    if (phone === ''){
        $('.errorphone').text('Số điện thoại đang để trống');
        validateName = false
    }
    else if  (isNaN(phone)){
        $('.errorpass').text('Hãy nhập số điện thoại là kiểu số');
        validateName = false
    }
    else{
        $('.errorphone').text('');
        validateName = true;
    }
    if (pass === ''){
        $('.errorpass').text('Mật khẩu đang để trống');
        validateName = false
     }else{
        $('.errorpass').text('');
        validateName = true;
    }
    validate = validateName && validatePass && validateEmail && validatePhone;
    if(validate){
        alert('Đăng ký thành công')
    }
});