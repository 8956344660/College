$(function () {
    console.log('hello');

    var domainUrl = "http://localhost:8085";
    var addPlanUrl = domainUrl + "/addPlan";
    var allPlanUrl = domainUrl + "/getAllPlan";
    var deletePlanUrl = domainUrl + "/deletePlan";

    function deletePlan() {
        var url = deletePlanUrl;
        $(".delete-button").on('click', function (event) {
            console.log('delete button clicked');
            var planId = $(this).parent().parent().attr('id');
            console.log(planId);
            $.ajax({
                url: url + '?id=' + planId,
                type: 'GET',
                cache: false,
                processData: false,
                success: function (result) {
                    console.log(result);
                    console.log("success > ");
                    loadPlan();
                },
                error: function (error) {
                    console.log(error);
                    console.log("error > " + error);

                }
            });


        });
    }

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
                $('#planTable').empty();
                $.each(result, function (index, value) {
                    console.log(index + ' -> ' + value);
                    $('#planTable').append(
                        '<tr id="' + value.planId + '">' +
                            '<td>' + value.planName + '</td>' +
                            '<td>' + value.validityInDays + '</td>' +
                            '<td>' + value.amount + '</td>' +
                            '<td> <button class="edit-button">Edit</button> </td>' +
                            '<td> <button class="delete-button">Delete</button> </td>' +
                        '</tr>');
                    deletePlan();

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


    function savePlan() {
        console.log('button clicked')
        var plan_name = $("#plan-name").val();
        var validity = $("#validity").val();
        var amount = $("#amount").val();

        console.log(plan_name + ' ' + validity + ' ' + amount);

        var url = addPlanUrl;
        var data = {
            'planName': plan_name,
            'validityInDays': validity,
            'amount': amount
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
                console.log("success > ")
                $("#planTable tr").remove();
                loadPlan();
                $("#planForm").trigger('reset'); 
            },
            error: function (error) {
                console.log(error);
                console.log("error > " + error);

            }
        });


    };

    loadPlan();
    $("#save").click(savePlan);


});