


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

        const result = $("#result");
        const email = $("#email").val();
        console.log(email);
        $("#email").val(email.trim());

        result.text("");

        if (this.validateEmail(email)) {
            result.text("");

        } else {
            result.text(email + " is not valid :(");
            result.css("color", "red");
        }
        return false;

    }



    validateConnect(){

        // LOGIN FORM
        const pseudoConnect = $("#pseudoConnect").val();
        const passwordConnect = $("#passwordConnect").val();

        $("#pseudoConnect").val(pseudoConnect.trim());
        $("#passwordConnect").val(passwordConnect.trim());

        return false;
    }

    validateContact() {

        const lastname= $("#lastname").val();
        const firstname= $("#firstname").val();
        const message= $("#message").val();

        $("#lastname").val(lastname.trim());
        $("#firstname").val(firstname.trim());
        $("#message").val(message.trim());


        const result = $("#result");
        const email = $("#email").val();
        $("#email").val(email.trim());

        result.text("");

        if (this.validateEmail(email)) {
            result.text("");

        } else {
            result.text(email + " is not valid :(");
            result.css("color", "red");
        }
        return false;
    }

    initEventListeners() {

        $("#sendcontact").click(() => {
            this.validateContact()
        });

        $("#sendconnect").click(() => {
            this.validateConnect()
        });

        $("#sendregister").click(() => {
            this.validateRegister()
        });



    }
}


