


class ValidationClass{

    constructor() {

        this.initEventListeners();
    }


    validateEmail(email) {

       const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+/;
        return re.test(email);
    }

    validate() {
       const result = $("#result");
        const email = $("#email").val();
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

        $("#send").click(() => {
            this.validate()
        });
    }

}


