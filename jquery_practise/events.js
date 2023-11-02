// when user clicks on button hide, paragraph with class second is hidden
$(document).ready(function () {
    $("#btn-hide").click(function () {
        $(".second").hide();
    });

    $('#myForm').submit(function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the input values
        var name = $('#name').val();
        var email = $('#email').val();

        // Display the input values in a result div
        $('#result').html('Name: ' + name + '<br>Email: ' + email);

        // You can also send the data to a server using AJAX
        // Example: $.post('submit.php', { name: name, email: email }, function(response) {
        //   // Handle the server response
        // });
    });
});
