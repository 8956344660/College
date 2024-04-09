$(function () {

    var domainUrl = "http://localhost:8085";
    var allPlanUrl = domainUrl + "/getAllPlan";
    var doPaymentVar = domainUrl + "/addPayment";

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

                $('#plan')
                    .find('option')
                    .remove();
                Window.plan = result;
                $.each(result, function (index, value) {
                    console.log(index + ' -> ' + value);
                    $('#plan')
                        .append($("<option></option>")
                            .attr("value", index)
                            .text(value.planName));

                });

                var planIndex = $("#plan").val();
                var plan = Window.plan[planIndex];
                $('#price').val(plan.amount);
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
    $('#plan').change(function () {
        var planIndex = $(this).val();
        var plan = Window.plan[planIndex];
        $('#price').val(plan.amount);
    });


    function doPayment() {
        console.log("do payment listener attached");
        $('#save').click(function () {
            console.log('saving payment');
            var url = doPaymentVar;

            var name = $('#name').val();
            var memberId = $("#member-id").val();

            var planIndex = $("#plan").val();
            var plan = Window.plan[planIndex];
            var price = $("#price").val();
            var date = $("#date").val();


            var data = {

                'paidDate': date,
                'nameOfParticipant': name,
                'plan': plan.planName,
                'validityInDays': plan.validityInDays,
                'price': price,
                'memberId': memberId
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
                    console.log("success > " + result)
                },
                error: function (error) {
                    console.log(error);
                    console.log("error > " + error);

                }
            });
        });

    };

    doPayment();


});