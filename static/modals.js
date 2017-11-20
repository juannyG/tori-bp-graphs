var modalsAPI = (function () {
    var spinnerModal, doneModal, failureModal;
    var errorText;

    function initModals() {
        spinnerModal = UIkit.modal($('#spinnerModal'));
        doneModal = UIkit.modal($('#doneModal'));
        failureModal = UIkit.modal($('#failureModal'));
        errorText = $('#errorText');
    }

    function showSpinnerModal() {
        spinnerModal.show();
    }

    function showFailureModal(message) {
        var errors = [];
        for (key in message) {
            if (message.hasOwnProperty(key)) {
                errors.push(key + ": " + message[key]);
            }
        }
        errorText.text(errors.join("\n"));
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
