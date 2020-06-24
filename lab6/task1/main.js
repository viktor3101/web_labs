$(document).ready(function () {
    let pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    let patternName = /^[-A-Za-zА-Яа-яЁёІіЇїЄє]+$/;

        $("#form").submit(function(evt) {
            evt.preventDefault();
            var formData = {
                "email":$("#email").val(),
                "name":$("#name").val(),
                "message":$("#message").val()
            };
            $.ajax({
				type: "POST",
				url: "sdfdfgdfg",
				data: formData,
				dataType: "json"
			}).success(function() { 
				alert("Failed to add to-do"); 
			});
        });



    $('#email').blur(function () {
        if ($(this).val() != '') {
            if (pattern.test($(this).val())) {
                $(this).css({
                    'border': '1px solid #569b44'
                });
                $('#valid').text('');
            } else {
                $(this).css({
                    'border': '1px solid #ff0000'
                });
                $('#valid').text('Не верно');
            }
        } else {
            $(this).css({
                'border': '1px solid #ff0000'
            });
            $('#valid').text('Поле email не должно быть пустым');

        }
    });

    $('#name').blur(function () {
        if ($(this).val() != '') {
            if (patternName.test($(this).val())) {
                $(this).css({
                    'border': '1px solid #569b44'
                });
                $('#validName').text('');
            } else {
                $(this).css({
                    'border': '1px solid #ff0000'
                });
                $('#validName').text('Не верно');
            }
        } else {
            $(this).css({
                'border': '1px solid #ff0000'
            });
            $('#validName').text('Поле email не должно быть пустым');

        }
    });

});