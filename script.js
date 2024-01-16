var inputDate = document.querySelector("#Date");
var inputMonth = document.querySelector("#Month");
var inputYear = document.querySelector("#Year");
var btn = document.querySelector(".btn");
var age = document.querySelector(".Age");

btn.addEventListener("click", () => {
    d1 = inputDate.value;
    m1 = inputMonth.value;
    y1 = inputYear.value;

    var date = new Date();
    var d2 = date.getDate();
    var m2 = date.getMonth() + 1;
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31];

    if(d1 > d2){
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if(m1 > m2){
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    age.innerHTML = `Your Age is ${y} Years ${m} Months ${d} Days`;
});