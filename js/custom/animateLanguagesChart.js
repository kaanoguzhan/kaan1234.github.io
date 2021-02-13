
$(function () {
    var oTop = $('#counter').offset().top - window.innerHeight;
    var chartHidden = true;
    $(window).scroll(function () {
        var pTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        if ((pTop > oTop) && (chartHidden)) {
            chartHidden = false;
            start_count();
        }
    });
});

function start_count() {
    var ctx = document.getElementById("languageCart").getContext('2d');
    var languageCart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ['German', 'English', 'Turkish'],
            datasets: [{
                data: [15, 18, 20],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    // 'rgba(75, 192, 192, 0.2)',
                    // 'rgba(153, 102, 255, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    // 'rgba(75, 192, 192, 1)',
                    // 'rgba(153, 102, 255, 1)',
                    // 'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1.5
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        min: 0,
                        display: false, //this removed the labels on the x-axis
                    },
                    // scaleLabel: {
                    //     display: true,
                    //     labelString: "Hours",
                    // },
                }]
            },
            legend: {
                display: false
            },
            animation: {
                duration: 8000,
            }, tooltips: {
                callbacks: {
                    label: function (tooltipItem) {
                        if (tooltipItem.xLabel == 15) {
                            return "Advanced (C1)";
                        } else if (tooltipItem.xLabel == 18) {
                            return "Advanced";
                        } else if (tooltipItem.xLabel == 20) {
                            return "Native";
                        } else {
                            return tooltipItem.xLabel;
                        }
                    }
                }
            }
        }
    }
    );
}
