function bet()
{
    var a=document.getElementById('mySwitch1');
    if (a.checked == true)
    {
        document.getElementById('amt').style.display = "inline-block";
        document.getElementById('amt2').style.display = "inline-block";
    }
    else
    {
        document.getElementById('amt').style.display = "none";
        document.getElementById('amt2').style.display = "none";
    }
}
function fees() {
    var a = document.getElementById('mySwitch2');
    if (a.checked == true) {
        document.getElementById('fee').style.display = "inline-block";
        document.getElementById('fee2').style.display = "inline-block";
    }
    else {
        document.getElementById('fee').style.display = "none";
        document.getElementById('fee2').style.display = "none";
    }
}

const lands = [];
const d = [];
const col = [];
for (var i = 1; i <= 120; i++) {
    lands.push("D" + i + " Available");
    d.push(1);
    col.push("blue");
    i++;
    lands.push("D" + i + " Occupied");
    d.push(1);
    col.push("red");
}

var xValues = lands;
var yValues = d;
var barColors = col;

new Chart("myChart", {
    type: "doughnut",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "Lands"
        },
        legend: { display: false }
    }
});