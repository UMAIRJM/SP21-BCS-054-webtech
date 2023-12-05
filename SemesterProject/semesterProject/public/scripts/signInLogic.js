$(function(){
    $("#signInform").validate({
        rules:{
            email:{
                required:true,
            },
            password:{
                required:true,
                minlength:5,
            }
            
        },
        messages:{
            email:{
                required:"Email Address is required"
            },
            password:{
                required:"Password is required",
                minlength:"Password minimum length should be atleast 5 "
            }

        },
        submitHandler:function (form){
            return true;
        }
    })


})


