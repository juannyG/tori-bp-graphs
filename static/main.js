(function () {
    function setTimestamp() {
        var ts = new Date();
        $('#timestampInput').val(ts.toDateString());
    }

    function createBPEntry() {
        modalsAPI.showSpinnerModal();
        var systolic = $('#systolicInput').val();
        var diastolic = $('#diastolicInput').val();
        var ts = new Date();
        var payload = {
            systolic: systolic,
            diastolic: diastolic,
            ts: ts.getTime()
        };

        setTimeout(_postBP, 1000, payload);
    }

    function _postBP(payload) {
	      $.post("/api/bp-data", payload, _postSuccess, 'json').fail(_postFailure);
    }

    function _postSuccess() {
        modalsAPI.showDoneModal();
        bpChartAPI.render();
        setTimeout(modalsAPI.hideDoneModal, 2000);
    }

    function _postFailure() {
	      modalsAPI.showFailureModal();
    }

    $(document).ready(function(){
        setTimestamp();
        modalsAPI.initModals();
        bpChartAPI.init();
        $('#createBPButton').click(createBPEntry);
    });
})();
