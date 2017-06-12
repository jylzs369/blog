$(function () {
    var $btnUpload = $('[data-action="upload"]');

    $btnUpload.on('click', function () {
        $.ajax({ 
            url: '/publish',
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