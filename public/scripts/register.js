$(function () {
    var $btnRegister = $('[data-action="register"]');

    $btnRegister.on('click', function () {
        var data = {
            name: $('#name').val(),
            password: $('#password').val(),
            passwordRepeat: $('#passwordRepeat').val(),
            email: $('#email').val()
        };
        $.ajax({ 
            url: '/register',
            type: 'POST',
            data: data,
            success: function(response){
                if (response.status === 'success') {
                    alert(response.message);
                    location.href = '/';
                } else {
                    alert(response.message);
                }
            },
            error: function(response){
                alert(response);
            }
        }); 
    })
});