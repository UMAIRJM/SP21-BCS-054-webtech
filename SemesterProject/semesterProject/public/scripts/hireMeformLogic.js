$(function(){
    $("#hireMeForm").validate(
        {
            rules:{
                fullName:{
                    required:true,
                    minlength:4,
                },
                emailAddress:{
                    required:true,
                },
                companyName:{
                    required:true,
                },
                industry:{
                    required:true
                },
                phoneNumber:{
                    required:true,
                    minlength:11,
                    maxlength:11,
                },
                description:{
                    required:true,
                },
                extimatedBudget:{
                    required:true,
                },
                projectTimeline:{
                    required:true,
                },
                additionalComments:{
                    required:true,
                },
                project:{
                    required:true
                },
                preferredPlatform:{
                    required:true
                }

            },messages:{
                fullName:{
                    required:"Full name is required",
                    minlength:"min length of name should be 4 characters"
                },
                emailAddress:{
                    required:"Email address is required",
                },
                companyName:{
                    required:"Please enter you comapany name or associated platform",
                },
                industry:{
                    required:"provide us the industry you are affiliated with"
                },
                phoneNumber:{
                    required:"Enter your phone number",
                    minlength:"Minimum length should be 11  digit",
                    maxlength:"Maximum length should  be 11 digit",
                },
                description:{
                    required:"Please provide us brief disciption of your project",
                },
                extimatedBudget:{
                    required:"enter the estimated budget you are willing to spend on this project",
                },
                projectTimeline:{
                    required:"Timiline in whic you are expecting your project is required ",
                },
                additionalComments:{
                    required:"Provide us some more about you requirements",
                },
                project:{
                    required:"Please provide platform for your project"
                },
                preferredPlatform:{
                    required:"please provide your preffered platform"
                }

            },
            submitHandler:function(form){
                return true
            }
        }
    )

})