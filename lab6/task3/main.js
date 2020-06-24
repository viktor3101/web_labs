$(document).ready(function () {
    let counter = 0;
    let counterTime = 1;
    $("#go").click(function () {
        counter++;
        if (counter % 2 != 0) {
            window.timerochok = window.setInterval(function () {
                $('.screen').text(counterTime++);
            }, 1000);
        }else{
            window.clearInterval(window.timerochok);
        }

    })
    $("#reset").click(function(){
        $('.screen').text("00:00");
        counterTime = 1;
        window.clearInterval(window.timerochok);
    })
});
