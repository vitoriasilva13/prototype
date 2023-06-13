const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const modal = document.getElementById('modal-aside');
    const resizeFlex = document.getElementById('middle');
    const resizeModal = modal.querySelector('#resizeModal');
    const main = document.querySelector('main');
    modal.classList.toggle('active');
    resizeModal.classList.toggle('active');

    const active = modal.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        main.setAttribute('style', 'flex-direction:row !important');

        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
        resizeFlex.classList.remove('active_middle')

    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
        main.removeAttribute('style', 'flex-direction:row !important');
        resizeFlex.classList.add('active_middle')


    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);