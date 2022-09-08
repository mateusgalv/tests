const modalBtn = document.getElementById('modal-btn')
const myModal = new bootstrap.Modal(document.getElementById('myModal'))

modalBtn.addEventListener('click', (e) => {
	e.preventDefault()
	myModal.show()
})