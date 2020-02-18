

$(document).ready(function() {
    $('#emailCheck').keyup(function() {
        console.log("TEST TEST TEST")
        var data = $('#emailCheck').serialize()
        $.ajax({
            method: "POST",
            url: "/emailCheck",
            data: data
        })
        .done(function(res) {
            $('#emailMsg').html(res)
    
        })
    })
})
    
















