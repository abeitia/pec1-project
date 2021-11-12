
const $modal = document.querySelector('#modal');

function showform(event)
{

    _showModal();
}

function hideform(event)
{

    _hideModal();
}

/**
 * Shows the modal modifiying the data-isVisible attribute
 */
 function _showModal() {
    const $modalWrapper = document.querySelector('#modal-wrapper');
	$modalWrapper.setAttribute('data-isVisible', true);
}

/**
 * TODO: Hides the modal.
 *
 * - Should only hide the modal when the user clicks on the modal Wrapper (not the modal itself!)
 */
function _hideModal(e) {
    const $modalWrapper = document.querySelector('#modal-wrapper');

	
		$modalWrapper.removeAttribute('data-isVisible');
	
	

}