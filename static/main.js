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

    function createSuccess() {
        doneModal.show();
        setTimeout(doneModal.hide, 2000);
    }

    function showSpinnerModal() {
        spinnerModal.show();
        setTimeout(createSuccess, 2000);
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
	setTimeout($.post, 1000, "/bp-data", payload, createSuccess, 'json');
    }

    $(document).ready(function(){
        setTimestamp();
        initModals();
        $('#createBPButton').click(createBPEntry);
    });
})();
