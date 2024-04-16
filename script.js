var sec, min, i = 0;
var a;

function start() {
    a = setInterval(startChange, 1);
}

function startChange() {
    var sec = document.getElementsByName("sec")[0];
    var min = document.getElementsByName("min")[0];
    if (i <= 59) {
        sec.value = i;
        i++;
    } else {
        i = 0;
        min.value++;
        sec.value = i;
        i++;
    }
}

function sto() {
    clearInterval(a);
}

function reset() {
    clearInterval(a);
    document.getElementsByName("min")[0].value = "00";
    document.getElementsByName("sec")[0].value = "00";
    i = 0;
    minutes = 0;
}