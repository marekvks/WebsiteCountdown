var finishDate = new Date("Jan 12, 2022 00:00:00").getTime();

var x = setTimeout(function () {
    var now = new Date().getTime();

    var distance = finishDate - now;

    var days = Math.ceil(distance / (1000 * 60 * 60 * 24));

    document.getElementById("time").innerHTML = days;
}, 1000);