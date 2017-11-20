(function () {
    var spinnerModal, doneModal;

    function setTimestamp() {
        var ts = new Date();
        $('#timestampInput').val(ts.toDateString());
    }

    function initModals() {
        spinnerModal = UIkit.modal($('#spinnerModal'));
        doneModal = UIkit.modal($('#doneModal'));
    }

    function createBPEntry() {
        showSpinnerModal();
        var high = $('#highInput').val();
        var low = $('#lowInput').val();
        var ts = new Date();
        var payload = {
            high: high,
            low: low,
            ts: ts.getTime()
        };

        // TODO: handle failure state with failure modal
	setTimeout(_postBP, 1000, payload);
    }

    function showSpinnerModal() {
        spinnerModal.show();
    }

    function _postBP(payload) {
	$.post("/bp-data", payload, _postSuccess, 'json').fail(_postFailure);
    }

    function _postSuccess() {
        doneModal.show();
        setTimeout(doneModal.hide, 2000);
    }

    function _postFailure() {
	failureModal.show();
    }

    $(document).ready(function(){
        setTimestamp();
        initModals();
        $('#createBPButton').click(createBPEntry);
    });
})();
