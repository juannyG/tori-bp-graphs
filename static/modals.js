var modalsAPI = (function () {
    var spinnerModal, doneModal, failureModal;

    function initModals() {
        spinnerModal = UIkit.modal($('#spinnerModal'));
        doneModal = UIkit.modal($('#doneModal'));
        failureModal = UIkit.modal($('#failureModal'));
    }

    function showSpinnerModal() {
        spinnerModal.show();
    }

    function showFailureModal() {
        failureModal.show();
    }

    function showDoneModal() {
        doneModal.show();
    }

    function hideDoneModal() {
        doneModal.hide();
    }

    return {
        initModals: initModals,
        showSpinnerModal: showSpinnerModal,
        showFailureModal: showFailureModal,
        showDoneModal: showDoneModal,
        hideDoneModal: hideDoneModal
    };
})();
