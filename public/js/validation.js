var pwd = document.getElementById("password");
var pwd2 = document.getElementById("password2");
var phone = document.getElementById("phone");
    function validate()
   {
     let regexp=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
     let regexpe=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
     if (phone.value=='')
     {
         alert("Enter phone");
         return false;
     }
     else if (false==(regexpe.test(phone.value)))
     {
        alert("phone no is not in correct format");
        return false;
     }
     else if (pwd.value=='')
     {
         alert("enter password");
         return false;
     }
     else if (pwd2.value=='')
     {
         alert("confirm password");
         return false;
     }
     else if (false==(pwd.value==pwd2.value))
     {
         alert("passwords not match!");
         return false;
     }
     else if (regexp.test(pwd.value))
     {
        return true;
     }
     else
     {
         alert("Password must conatain at least one number and one uppercase and lowecase letter,and at least 8 or more characters");
         return false;
     }
   }

    function passwordChanged() 
    {
        var strength = document.getElementById('strength');
        var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        if (pwd.value.length == 0) {
            strength.innerHTML = '<span style="color:blue">Type Password</span>';
        } 
         else if (strongRegex.test(pwd.value)) {
            strength.innerHTML = '<span style="color:green">Strong!</span>';
        } else if (mediumRegex.test(pwd.value)) {
            strength.innerHTML = '<span style="color:orange">Medium!</span>';
        } else {
            strength.innerHTML = '<span style="color:red">Weak!</span>';
        }
    }