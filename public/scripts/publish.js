$(function () {
    var $btnPublish = $('[data-action="publish"]');

    $btnPublish.on('click', function () {
        var data = {
            title: $('#title').val(),
            content: $('#content').val()
        };
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