$(function () {
    var domainUrl = "http://localhost:8085";
    var allMember = domainUrl + "/getAllMember";

    function loadMembers() {
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
                    '<tr>' +
                    '<th>Member ID</th>' +
                    '<th>Member Name</th>' +
                    '<th>Gender</th>' +
                    '<th>Phone</th>' +
                    '<th>Join Date</th>' +
                    '<th>Relationship</th>' +
                    '<th>Relationship Number</th>' +
                    '</tr>');

                $.each(result, function (index, value) {
                    console.log(index + ' -> ' + value);
                    $('#member-table').append(
                        '<tr id="' + value.memberId + '">' +
                        '<td>' + value.memberId + '</td>' +
                        '<td>' + value.nameOfParticipant + '</td>' +
                        '<td>' + value.gender + '</td>' +
                        '<td>' + value.memberContactNumber + '</td>' +
                        '<td>' + value.paidDate + '</td>' +
                        '<td>' + value.relationship + '</td>' +
                        '<td>' + value.emergencyContactNumber + '</td>' +
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