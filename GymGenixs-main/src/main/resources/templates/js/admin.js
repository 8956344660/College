$(function(){
    var domainUrl = "http://localhost:8085";
    var allMember = domainUrl + "/getAllMember";

    function loadMembers(){
        console.log('loading getAllMember');
        var url = allMember;
        $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            processData: false,
            dataType: 'json',
            success: function (result) {

                $('#member-table').empty();
                $('#member-table').append(
                    '<tr>'+
                        '<th>Member ID</th>'+
                        '<th>Paid Date</th>'+
                        '<th>Expire Date</th>'+
                        '<th>Status</th>'+
                    '</tr>');

                $.each(result, function (index, value) {
                    console.log(index + ' -> ' + value);
                    $('#member-table').append(
                        '<tr id="' + value.memberId + '">' +
                            '<td>' + value.memberId + '</td>' +
                            '<td>' + value.paidDate + '</td>' +
                            '<td>' + value.expireDate + '</td>' +
                            '<td>' + value.status + '</td>' +
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
    };

    loadMembers();
});