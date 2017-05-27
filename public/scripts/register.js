$(function () {
    var $btnRegister = $('[data-action="register"]');

    $btnRegister.on('click', function () {
        var data = {
            name: $('#name').val(),
            password: $('#password').val(),
            email: $('#email').val()
        };
        $.ajax({ 
            url: '/register',
            type: 'POST',
            data: data,
            success: function(data){
                alert(data);
            },
            error: function(data){ 
                alert(data);
            }
        }); 
    })
});