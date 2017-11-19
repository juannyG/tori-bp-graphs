(function () {
    function initBPChart() {
        new Chart(
            document.getElementById("myChart"), {
                "type":"line",
                "data": {
                    "labels": ["January","February","March","April","May","June","July"],
                    "datasets":[{
                        "label": "High",
                        "data": [130,128,132,133,132,128,129],
                        "fill":false,
                        "borderColor": "red",
                        "lineTension":0.1
                    },{
                        "label": "Low",
                        "data": [65,59,80,81,56,55,40],
                        "fill":false,
                        "borderColor": "blue",
                        "lineTension": 0.1
                    }]
                }
            }
        );
    }

    $(document).ready(function(){
        initBPChart();
    });
})();
