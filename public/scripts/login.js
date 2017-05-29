$(function () {
    var $btnLogin = $('[data-action="login"]');

    $btnLogin.on('click', function () {
        var data = {
            name: $('#name').val(),
            password: $('#password').val()
        };
        $.ajax({ 
            url: '/login',
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