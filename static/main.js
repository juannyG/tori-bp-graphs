(function () {
    function setTimestamp() {
        var ts = new Date();
        $('#timestampInput').val(ts.toDateString());
    }

    function createSuccess() {
        location.reload();
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
        $.post("/bp-data", payload, createSuccess, 'json');
    }

    $(document).ready(function(){
        setTimestamp();
        $('#createBPButton').click(createBPEntry);
    });
})();
