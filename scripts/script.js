/**
 * Shows the modal
 */
 function _showModal() {
    const $modalWrapper = document.querySelector('#modal-wrapper');
	$modalWrapper.setAttribute('data-isVisible', true);
}

/**
 * Hides the modal
 */
function _hideModal(e) {
    const $modalWrapper = document.querySelector('#modal-wrapper');
	$modalWrapper.removeAttribute('data-isVisible');
}

 const $btnBuscar = document.querySelector('#btnBuscar');
 $btnBuscar.addEventListener('click', _showModal);

 
 const $btnClose = document.querySelector('#btnClose');
 $btnClose.addEventListener('click', _hideModal);

