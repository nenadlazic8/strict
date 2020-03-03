$(document).ready(function () {


    $(function () {
        $(".contact-form").validate({
            highlight: function (element) {
                $(element).addClass("is-invalid").removeClass("is-valid");
            },
            unhighlight: function (element) {
                $(element).removeClass('is-invalid').addClass('is-valid');
            },
            rules: {
                name: {
                    required: true,
                    rangelength: [2, 20]
                },
                email:{
                    required:true,
                    email: true
                },
                message:{
                    required:true ,
                    maxlength:255
                }


            },
            messages: {
              name: {
                    required: 'Ime je obavezno polje',
                    rangelength: 'Ime mora bitii izmedju 2 i 20 karaktera'
                },
                email:{
                    required:'Email je obavezno polje',
                    email: 'Unesite validan email'
                },
                message:{
                    required:'Poruka je obavezno polje' ,
                    maxlength:'Poruka ne sme imati vise od 255 karaktera'
                }

            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo($(element).closest('.form-group').find('.invalid-feedback'));
            }

        });

        AOS.init();
    });
});