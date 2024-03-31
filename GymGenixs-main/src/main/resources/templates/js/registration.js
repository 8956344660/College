$(function () {
    var domainUrl = "http://localhost:8085";
    var allPlanUrl = domainUrl + "/getAllPlan";
    var saveMember = domainUrl + "/addMember";

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

    function doMemberRegistration() {

        $('#save').click(function () {
            console.log('saving member');
            var url = saveMember;

            var name = $('#name').val();
            var contact_person = $("#contact-person").val();
            var relationship = $("#relationship").val();
            var emergency_contact_number = $("#emergency-contact-number").val();
            var planIndex = $("#plan").val();
            var plan = Window.plan[planIndex];
            var price = $("#price").val();
            var contact_number = $("#contact-number").val();
            var date = $("#date").val();
            var gender = $("#gender").val();
            var status = 'ACTIVE';
            var expireDate = date;

            var data = {
                'paidDate': date,
                'expireDate': expireDate,
                'status': status,
                'nameOfParticipant': name,
                'emergencyContactPerson': contact_person,
                'relationship': relationship,
                'emergencyContactNumber': emergency_contact_number,
                'plan': plan.planName,
                'price': price,
                'memberContactNumber': contact_number,
                'gender': gender,
                'validityInDays': plan.validityInDays
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

    doMemberRegistration();


});