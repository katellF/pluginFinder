


class ValidationClass{

    constructor() {

        this.initEventListeners();
    }


    validateEmail(email) {

       const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+/;
        return re.test(email);
    }


    validateRegister(){

        const lastname = $("#lastname").val();
        const firstname = $("#firstname").val();
        const pseudo = $("#pseudo").val();
        const password = $("#password").val();
        const confirmPassword = $("#confirmPassword").val();

        $("#lastname").val(lastname.trim());
        $("#firstname").val(firstname.trim());
        $("#pseudo").val(pseudo.trim());
        $("#password").val(password.trim());
        $("#confirmPassword").val(confirmPassword.trim());


        $("#lastnameCheck").text("");
        if ( lastname.length < 3  ){
            $("#lastnameCheck").text("Last Name is too short...");
            $("#lastnameCheck").css("color", "red");
            return false;
        }

        $("#firstnameCheck").text("");
        if ( firstname.length < 3  ){
            $("#firstnameCheck").text("First Name is too short...");
            $("#firstnameCheck").css("color", "red");
            return false;
        }

        const result = $("#result");
        const email = $("#email").val();
        $("#email").val(email.trim());

        result.text("");

        if (this.validateEmail(email)) {
            result.text("");

        } else {
            result.text(email + " is not valid :(");
            result.css("color", "red");
            return false;
        }

        $("#pseudoCheck").text("");
        if ( pseudo.length < 3  ){
            $("#pseudoCheck").text("Pseudo is too short...");
            $("#pseudoCheck").css("color", "red");
            return false;
        }


        $("#passwordCheck").text("");
        if ( password.length < 5  ){
            $("#passwordCheck").text("Password is too short...");
            $("#passwordCheck").css("color", "red");
            return false;
        }

        console.log(password)
        console.log(confirmPassword)



        $("#confirmPasswordCheck").text("");
        if ( confirmPassword.length < 5  ){
            $("#confirmPasswordCheck").text("Password is too short...");
            $("#confirmPasswordCheck").css("color", "red");
            return false;
        }




        $("#confirmPasswordCheck").text("");
        if ( password !== confirmPassword ){
            $("#confirmPasswordCheck").text("Passwords needs to be identical");
            $("#confirmPasswordCheck").css("color", "red");
            return false;
        }



        return true;

    }



    validateConnect(){

        // LOGIN FORM
        const pseudoConnect = $("#pseudoConnect").val();
        const passwordConnect = $("#passwordConnect").val();

        $("#pseudoConnect").val(pseudoConnect.trim());
        $("#passwordConnect").val(passwordConnect.trim());


        $("#pseudoConnectCheck").text("");
        if ( pseudoConnect.length < 3  ){
            $("#pseudoConnectCheck").text("Login is too short...");
            $("#pseudoConnectCheck").css("color", "red");
            return false;
        }

        $("#passwordConnectCheck").text("");

        if ( passwordConnect.length < 5  ){
            $("#passwordConnectCheck").text("Password is too short...");
            $("#passwordConnectCheck").css("color", "red");
            return false;
        }

        return true;


    }

    validateModifyPwd(){


        // MODIFY PASSWORD FORM
        const passwordConnect = $("#passwordConnect").val();
        const passwordConfirm = $("#passwordConfirm").val();

        $("#passwordConnect").val(passwordConnect.trim());
        $("#passwordConfirm").val(passwordConfirm.trim());


        $("#passwordConnectCheck").text("");
        if ( passwordConnect.length < 5  ){
            $("#passwordConnectCheck").text("Password is too short...");
            $("#passwordConnectCheck").css("color", "red");
            return false;
        }

        $("#passwordConfirmCheck").text("");

        if ( passwordConfirm.length < 5  ){
            $("#passwordConfirmCheck").text("Password is too short...");
            $("#passwordConfirmCheck").css("color", "red");
            return false;
        }

        $("#passwordConfirmCheck").text("");
        if ( passwordConnect !== passwordConfirm ){
            $("#passwordConfirmCheck").text("Passwords needs to be identical");
            $("#passwordConfirmCheck").css("color", "red");
            return false;
        }

        return true;


    }


    validateContact() {

        const lastname= $("#lastname").val();
        const firstname= $("#firstname").val();
        const message= $("#message").val();

        $("#lastname").val(lastname.trim());
        $("#firstname").val(firstname.trim());
        $("#message").val(message.trim());


        $("#lastnameCheck").text("");
        if ( lastname.length < 3  ){
            $("#lastnameCheck").text("Last Name is too short...");
            $("#lastnameCheck").css("color", "red");
            return false;
        }

        $("#firstnameCheck").text("");
        if ( firstname.length < 3  ){
            $("#firstnameCheck").text("First Name is too short...");
            $("#firstnameCheck").css("color", "red");
            return false;
        }

        const result = $("#result");
        const email = $("#email").val();
        $("#email").val(email.trim());

        result.text("");

        if (this.validateEmail(email)) {
            result.text("");

        } else {
            result.text(email + " is not valid :(");
            result.css("color", "red");
            return false;
        }


        $("#messageCheck").text("");
        if ( message.length < 5  ){
            $("#messageCheck").text("Your message is too short...");
            $("#messageCheck").css("color", "red");
            return false;
        }


        return true;
    }

    initEventListeners() {

        $("#sendcontact").click(() => {


            let validation = this.validateContact()

            if( !validation ) {
                event.preventDefault();
            }



        });

        $("#sendconnect").click((event) => {

            let validation = this.validateConnect();

            if( !validation ) {
                event.preventDefault();
            }


        });

        $("#sendregister").click(() => {

            let validation = this.validateRegister();

            if( !validation ) {
                event.preventDefault();
            }

        });


        $("#sendmodifypwd").click(() => {

            let validation = this.validateModifyPwd();

            if( !validation ) {
                event.preventDefault();
            }

        });


    }
}


