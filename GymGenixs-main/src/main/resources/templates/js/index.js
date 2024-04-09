$(function () {

    var domainUrl = "http://localhost:8085";
    var allPlanUrl = domainUrl + "/getAllPlan";
    

    function loadPlan() {
        console.log('loading plan');
        var url = allPlanUrl;
        $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            processData: false,
            dataType: 'json',
            success: function (result) {
                $('#plans-container').empty();

                $.each(result, function (index, value) {
                    console.log(index + ' -> ' + value);
                    $('#plans-container').append(' <div class="membership-plan">' +
                        '<h2 id="pl">' + value.planName + '</h2><br>' +
                        '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.' +
                        ' Sapiente cupiditate vero quas dolorem commodi' +
                        ' rerum doloremque maxime blanditiis nemo,' +
                        'laboriosam reprehenderit.</h4><br><br>' +
                        '<div class="price">' + value.amount + ' &#8377;</div><br>' +
                        '<a href="use_register.html"><button class="purchase-button">Purchase</button></a>' +
                        '</div>');


                });


                console.log(result);
                console.log("success > ")
            },
            error: function (error) {
                console.log(error);
                console.log("error > " + error);

            }
        });
    };

    loadPlan();

});