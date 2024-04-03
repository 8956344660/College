$(function () {
    var domainUrl = "http://localhost:8085";
    var allMember = domainUrl + "/getAllMember";
    var deleteMemberUrl = domainUrl + "/deleteMember";

    function deleteMember() {
        var url = deleteMemberUrl;
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
                    loadMembers();
                },
                error: function (error) {
                    console.log(error);
                    console.log("error > " + error);

                }
            });


        });
    };


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
                    '<th>Emergency Contact Person </th>' +
                    '<th>Relationship</th>' +
                    '<th>Relationship Number</th>' +
                    '<th>Edit</th>' +
                    '<th>Delete</th>' +
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
                        '<td>' + value.emergencyContactPerson + '</td>' +
                        '<td>' + value.relationship + '</td>' +
                        '<td>' + value.emergencyContactNumber + '</td>' +
                        '<td> <button class="edit-button">Edit</button> </td>' +
                        '<td> <button class="delete-button">Delete</button> </td>' +
                        '</tr>');

                });
                deleteMember();

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