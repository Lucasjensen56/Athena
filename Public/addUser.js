   $(document).ready(function () {


    $("#password, #password_confirm").on("keyup", function () {
        if ($("#password").val() == $("#password_confirm").val()) {
            $("#password_message").html("Password Matching").css("color", "green");
        } else 
            $("#password_message").html("Password Not Matching").css("color", "red")
    });




    $("#submitUserInfo").on("click" ,function (event) {
        
        event.preventDefault(); 
        customer_name = ($("#customer_name").val().trim());
        userName = ($("#userName").val().trim());
        password = ($("#password").val().trim());




        console.log(customer_name);
        console.log(userName);
        console.log(password);

        var newCustomer = {
            name: customer_name,
            userName: userName,
            password: password
        };

        console.log("New Customer logged as " + JSON.stringify(newCustomer))


        $.post("/api/customers")




// $.post("/api/item")

 })


});

   //         $("#password").validate({
   //      rules : {
   //          password : {
   //              minlength : 5
   //          },
   //          password_confirm: {
   //              minlength : 5,
   //              equalTo : '[name="password"]'
   //          }

   //      },
   // })
 
