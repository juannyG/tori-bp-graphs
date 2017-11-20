(function () {
    function setTimestamp() {
        var ts = new Date();
        $('#timestampInput').val(ts.toDateString());
    }

    function createBPEntry() {
        modalsAPI.showSpinnerModal();
        var high = $('#highInput').val();
        var low = $('#lowInput').val();
        var ts = new Date();
        var payload = {
            high: high,
            low: low,
            ts: ts.getTime()
        };

	      setTimeout(_postBP, 1000, payload);
    }

    function _postBP(payload) {
	      $.post("/bp-data", payload, _postSuccess, 'json').fail(_postFailure);
    }

    function _postSuccess() {
        modalsAPI.showDoneModal();
        setTimeout(doneModal.hide, 2000);
    }

    function _postFailure() {
	      modalsAPI.showFailureModal();
    }

    $(document).ready(function(){
        setTimestamp();
        modalsAPI.initModals();
        bpChartAPI.render();
        $('#createBPButton').click(createBPEntry);
    });
})();
