$(function(){

    var domainUrl = "http://localhost:8085";
    var saveLogin = domainUrl + '/saveLogin';
    
    function doUserRegistration() {

        $('#save').click(function () {
            console.log('saving user');
            var url = saveLogin;

            var name = $('#name').val();
            var mobile = $("#mobile").val();
            var userId = $("#userId").val();
            var password = $("#password").val();
            var address = $("#address").val();
            var gender = $("#gender").val();

           // var expireDate = date;

            var data = {
                'mobile': mobile,
                'userId': userId,
                'password': password,
                'address': address,                
                'gender': gender
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
                    $("#user-reg").trigger('reset'); 
                },
                error: function (error) {
                    console.log(error);
                    console.log("error > " + error);

                }
            });
        });

    };

    doUserRegistration();

});