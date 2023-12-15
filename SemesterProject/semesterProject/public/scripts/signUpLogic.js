$(document).ready(function(){
    $("#myForm").validate({
        rules:{
            firstName:{
                
                required:true,
                minlength: 3,
            },
            secondName:{
                required:true,
                minlength: 3,
            },
            phoneNumber:{
                required:true,
                minlength:11,
            },
            emailAddress:{
                required:true,

            },
            passwordField:{
                required:true,
                minlength:5,

            },
            confirmPasswordFiled:{
                required:true,
                equalTo:"#floatingPassword"
            }



        },
        messages:{
            firstName:{
                required:"please enter first name",
                minlength:"first Name should have atleast 3 character"
        
            },
            secondName:{
                required:"please enter first name",
                minlength:"Second Name should have atleast 3 character"
        
            },
            phoneNumber:{
                required:"Phone number is required",
                minlength:"phone number should be 11 digits long"


            },
            emailAddress:{
                required:"Email address is required"
            },
            passwordField:{
                required:"Password is  required",
                minlength:"min length of password should be 5 characters"

            },
            confirmPasswordFiled:{
                required:"password is required",
                equalTo:"Passwords are not matchded"
            }
        },
        submitHandler: function(form){
            return true
        }
        

    })
})