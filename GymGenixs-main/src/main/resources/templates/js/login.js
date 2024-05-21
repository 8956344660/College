$(function () {

    var domainUrl = "http://localhost:8085";
    var doLoginUrl = domainUrl + '/login';

    function dologinFunction() {

        $('#login').click(function () {
            console.log('login');
            var url = doLoginUrl;
            var userId = $("#userId").val();
            var password = $("#password").val();

            var data = {
                'username': userId,
                'password': password
            };

            $.ajax({
                url: url,
                type: 'POST',
                cache: false,
                processData: false,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(data),
                dataType: 'json',
                success: function (result) {


                    console.log(result);
                    console.log("success > " + result);
                    $("#login-form").trigger('reset');

                    if (result.errorCode == 400) {
                        console.log('login success condition')
                        if (result.data.role == 'admin') {
                            console.log('admin page')
                            window.location.href = "admin.html";
                        }
                        else window.location.href = "index.html";
                    }
                    else {
                        //show bootstratp pop
                    }


                },
                error: function (error) {
                    console.log(error);
                    console.log("error > " + error);

                }
            });
        });

    };

    dologinFunction();


});