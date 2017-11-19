(function () {
    function setTimestamp() {
        var ts = new Date();
        $('#timestampInput').val(ts.toDateString());
    }

    function createBPEntry() {
        var high = $('#highInput').val();
        var low = $('#lowInput').val();
        var ts = new Date();
        var payload = {
            high: high,
            low: low,
            ts: ts.getTime()
        };
        console.log(payload);
        //location.reload();
    }

    $(document).ready(function(){
        setTimestamp();
        $('#createBPButton').click(createBPEntry);
    });
})();
