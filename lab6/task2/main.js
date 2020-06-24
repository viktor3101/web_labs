$(document).ready(function () {
    $(function(){
        $.getJSON('http://dummy.restapiexample.com/api/v1/employees', function(data) {
                for(var i=0;data.data.length;i++){
                    $('#users').append('<tr><td>' + data.data[i].id + '</td><td>' + data.data[i].employee_name + 
                    '</td><td>' + data.data[i].employee_salary + '</td><td>'+'</td><td>' + data.data[i].employee_age+'</td></tr>');
                }
        });
    });
});