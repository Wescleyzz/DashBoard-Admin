const openbtnModal = document.querySelector('#aaaaa');
const closebtnModal = document.querySelector('#closemodal');
const modal = document.querySelector('.modal');

openbtnModal.addEventListener('click', openModal);

function openModal(){
    modal.style.display = 'block';
}

closebtnModal.addEventListener('click', closeModal);

function closeModal(){
    modal.style.display = 'none';
}