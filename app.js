let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let clock = () => {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let period = "AM";
    if (h === 0) {h =12;}
    else if (h >= 12) {
        h = h - 12;
        period = "PM";
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    let time = `${h}:${m}:${s} ${period}`;
    document.getElementById("clock").innerText = time;
    setTimeout(clock, 1000);
}
clock();