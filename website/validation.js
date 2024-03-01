$(document).ready(() => {
    $("#submit").click(() => {
        if (validateFormData() == true) {
            $.ajax({
                url: "/porasuna",
                type: "get",
                dataType: "json",
                data: {
                    first_name: $("#first_name").val(),
                    last_name: $("#last_name").val(),
                    gender: $("#gender").val(),
                    dob: $("#dob").val(),
                    mnumber: $("#mnumber").val(),
                    email: $("#email").val()
                },
                success: (result) => {
                    $("#output").html(`
                            Server Message: ${result.message}
                            <br />
                            Name: ${result.first_name} ${result.last_name}
                            <br />
                            Gender: ${result.gender}
                            <br>
                            Date of Birth: ${result.dob}
                            <br>
                            Mobile Number: ${result.mnumber}
                            <br>
                            Email: ${result.email}`);
                    $("#output").show();
                }
            });
        }
    });
});
function validateFormData() {
    var isValid = true;
        var first_name = $('#first_name').val();
        var last_name = $('#last_name').val();
        var mnumber = $('#mnumber').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var dob = $('#dob').val();
        var gender = $('input[name=gender]:checked');
        $(".error").remove();

        if (first_name.length < 3) {
            $('#first_name').after('<span class="error">*please enter your first name </span>');
        }
        if (last_name.length < 3) {
            $('#last_name').after('<span class="error">*please enter your last name</span>');
        }
        if (mnumber.length != 11) {
            $('#mnumber').after('<span class="error">*please enter your mobile number</span>');
        }

        if (email.length < 1) {
            $('#email').after('<span class="error">*please enter your email address</span>');
        } else if (validateEmail() != 1) {
            //var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
            //var validEmail = regEx.test(email);
            //if (!validEmail) {
            $('#email').after('<span class="error">Enter a valid email</span>');
        }

        if (password.length < 8) {
            $('#password').after('<span class="error">*password must be at least 8 characters long</span>');
        }

        
        if (gender.length < 1) {
            $("#errorGender").text('*please choose your gender');
            //alert('Choose a gender.');
        }

        if (dob.length < 1) {
            $("#errordob").text('*please enter your date of birth');
                //after('<span class="error">This field is required</span>');
    }
    return isValid;
}

function reset() {
    $(".error").remove();
    $("#errorGender").text('');
    $("#errordob").text('');
}

function validateEmail() {
    var email;
    var t = 1;
    email = document.getElementById('email').value;
    if (email.value == '') {
        //alert('Empty');
    }
    var res = email.split('@');
    if (email.split('@').length != 2) {
        //alert('zero @ OR morethan one @ ');
        t = 0;
    }
    var part1 = res[0];
    var part2 = res[1];

    // part1
    if (part1.length == 0) {
        //alert('no content bfr @');
        t = 0;
    }
    if (part1.split(' ').length > 2) {
        //alert('Invalid:Space before @')
        t = 0;
    }

    //chk afr @ content:  part2
    var dotsplt = part2.split('.');  //alert( After @ : +part2);
    if (part2.split('.').length < 2) {
        //alert('dot missing');
        t = 0;
    }
    if (dotsplt[0].length == 0) {
        //alert("no content b/ w @ and dot");
        t = 0;
    }
    if (dotsplt[1].length < 2 || dotsplt[1].length > 4) {
        //alert('err aftr dot');
        t = 0;
    }

    if (t == 1) {
        //alert('it is a valid email');
    }

    return t;
}

