$(document).ready(function() {
    $('#next form').validate({
        rules: {
            phone: "required",
            password: "required",
        },
        messages: {
            phone: {
                required: "Пожалуйста, введите свой номер телефона",                
                
            },
            password: {
                required: "Пожалуйста, введите пароль",                
            }
        }
    });
    $('#registration form').validate({
        rules: {
            name: "required",
            phone: "required",
            password: "required",  
            passwordRepeat: "required"
        },
        messages: {
            name: {
                required: "Пожалуйста, введите своё имя",                
                
            },
            phone: {
                required: "Пожалуйста, введите свой номер телефона"
            },
            password: {
                required: "Пожалуйста, введите свой пароль"
            },
            passwordRepeat: {
                required: "Пожалуйста, повторите ввод пароля"
            }
        }
    });
    $('#thank form').validate();
    $('#restorePassword form').validate({
        rules: {
            сode: "required",            
        },
        messages: {
            сode: {
                required: "Пожалуйста, введите свой код",                                
            },
        }
    });
    $('#NewPassword form').validate();   
     $('#questions form, label').validate({
        rules: {            
            name:  "required",
            phone:  "required",
            question: "required"
        },
        messages: {
            name: {
                required: "Пожалуйста, введите своё имя",                                
            },
            phone: {
                required: "Пожалуйста, введите свой номер телефона"
            },
            question: {
                required: "Пожалуйста, задайте свой"
            }            
        }
    });        
});