// const handleBackdrop = name => {
//     const backdrop = document.querySelector(`[data-backdrop-${name}]`);
//     const buttons = document.querySelectorAll(
//       `[data-toggle-backdrop-${name}]`,
//     );
//     const toggleBackdrop = () =>
//       backdrop.classList.toggle('is-hidden');
//     buttons.forEach(button =>
//       button.addEventListener('click', toggleBackdrop),
//     );
//   };

  // // sign
  // hendleBackdrop('sign')

  (() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();
  