 $('.sl').slick({
 	autoplay: true,
 	autoplaySpeed: 2000,
 	fade: true,
 	dots: false,
 	draggable: true,
 	arrows: false

 });



 window.addEventListener("load", function () {

            
            document.forms[0].addEventListener("submit", function (e) {
                var isValid = true;

                var login = document.getElementsByName("login")[0],
                    password = document.getElementsByName("password")[0];
                    email = document.getElementsByName("email")[0];
               
                if (login.value.length == 0) {
                    isValid = false;
                }
                if (password.value.length == 0) {
                    isValid = false;
                }

                if (email.value.length == 0) {
                    isValid = false;
                }

                
                if (!isValid) {
                    e.preventDefault();
                    alert("Вcе поля вводов должны быть заполнены");
                }
            });

        })