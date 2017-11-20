var bpChartAPI = (function () {
    var chart;

    function initChart() {
        chart = new Chart(
            $('#bpChart'), {
                type: "line",
                data: {
                    labels: [],
                    datasets: [{
                        label: "Systolic BP",
                        fill: false,
                        data: [],
                        borderColor: "red",
                        lineTension: 0.1
                    },{
                        label: "Diastolic BP",
                        fill: false,
                        data: [],
                        borderColor: "blue",
                        lineTension: 0.1
                    }]
                },
                options: {
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                        borderWidth: 1
                    }
                }
            }
        );
        renderChart();
    }

    function renderChart() {
        $.get('/api/bp-data', _getSuccess).fail(_getFailure);
    }

    function dateDisplay(ts) {
        var d = new Date(ts);
        return (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear() + " " + d.toLocaleTimeString();
    }

    function _getSuccess(data) {
        chart.data.labels = data.map(a => dateDisplay(a.ts));
        chart.data.datasets[0].data = data.map(a => a.systolic);
        chart.data.datasets[1].data = data.map(a => a.diastolic);
        chart.update();
    }

    function _getFailure(data) {
        modalsAPI.showFailureModal();
    }

    return {
        init: initChart,
        render: renderChart
    };
})();
