const validateFields = (form, fieldsArray) => {

    fieldsArray.forEach((field) =>{
        field.removeClass("input-error");
        if(field.val().trim() === "") {
            field.addClass("input-error");
        }
    });

    const errorFields = form.find(".input-error");

    return errorFields.length === 0;
}


$('.form').submit(e => {
    e.preventDefault();

    const form = $(e.currentTarget);
    const name = form.find("[name='name']");
    const phone = form.find("[name='phone']");
    const comment = form.find("[name='comment']");
    const to = form.find("[name='to']");

    const modal = $("#modal");
    const modalContent = modal.find(".modal__content");

    modal.removeClass("error-modal");

    const isValid = validateFields(form, [ phone, comment, to]);

 
    if(isValid) {
        $.ajax({
            url: "https://webdev-api.loftschool.com/sendmail",
            method: "post",
            data:{
                name: name.val(),
                phone:phone.val(),
                comment:comment.val(),
                to:to.val(),
            },
            
        });

        request.done((data) => {
            modalContent.text(data.message)
            console.log(data);
        });

        request.fail((data) =>{
            const message = data.responseJSON.message;
            modalContent.text(message);
            console.log(data);
            modal.addClass("error-modal");
        });

        // вызов модального окна
        request.always((data) =>{
            $.fansybox.open ({
                src:"#modal",
                type:"inline"
            });
        });
    }

 
});


// Закрытие модального окна
$(".app-submit-btn").click(e =>{
    e.preventDefault();


    $.fansybox.close();
})

// 4:38