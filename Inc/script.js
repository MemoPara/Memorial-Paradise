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
window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "List of Lands"
        },

        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                { y: 1, label: "D1 Occupied", color: "red" },
                { y: 1, label: "D2 Available", color: "blue" },
                { y: 1, label: "D3 Occupied", color: "red" },
                { y: 1, label: "D4 Available", color: "blue" },
                { y: 1, label: "D5 Occupied", color: "red" },
                { y: 1, label: "D6 Available", color: "blue" }
            ]
        }]
    });
    chart.render();

}