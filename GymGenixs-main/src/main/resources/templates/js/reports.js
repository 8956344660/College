$(function () {

    var domainUrl = "http://localhost:8085";
    var getTotalAmount = domainUrl + '/getTotalAmount';
    var getAllPayments = domainUrl + '/findAllPayments';


    $("#date-range-total-search").on('click', function () {
        console.log('button clicked');
        var fromDate = $('#from-date').val();
        var toDate = $('#to-date').val();
        $.ajax({
            url: getTotalAmount + '?fromDate=' + fromDate + "&toDate=" + toDate,
            type: 'GET',
            cache: false,
            processData: false,
            success: function (result) {
                console.log(result);
                console.log("success > ");
                $("#total-label").text(result);
            },
            error: function (error) {
                console.log(error);
                console.log("error > " + error);

            }
        });
    });

    function loadPaymentsOrderByDesc() {
        console.log('loading payments');
        var url = getAllPayments;
        $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            processData: false,
            dataType: 'json',
            success: function (result) {
                $('#payments-table').empty();
                $('#payments-table').append(
                    '<tr>' +
                    '<th>NAME OF PARTICIPANT</th>' +
                    '<th>MEMBER ID</th>' +
                    '<th>PLAN</th>' +
                    '<th>PRICE</th>' +
                    '<th>PAID DATE</th>' +
                    '</tr>');
                $.each(result, function (index, value) {
                    console.log(index + ' -> ' + value);
                    $('#payments-table').append(
                        '<tr id="' + value.id + '">' +
                        '<td>' + value.nameOfParticipant + '</td>' +
                        '<td>' + value.memberId + '</td>' +
                        '<td>' + value.plan + '</td>' +
                        '<td>' + value.price + '</td>' +
                        '<td>' + value.paidDate + '</td>' +
                        '</tr>');
                });

                console.log(result);
                console.log("success > ")
            },
            error: function (error) {
                console.log(error);
                console.log("error > " + error);

            }
        });
    }

    loadPaymentsOrderByDesc();
    function reset() {
        $('#cancel').on('click', function () {
            $("#reports-form").trigger('reset');
            $('#total-label').text('');

        });
    };
    reset();

});