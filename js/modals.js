	// Modals

		/* ------------------- Уведомление о необходимости зарегистрироваться -------------------- */
	const infoMessageBtn = document.querySelector('.js-btn-join');
	const infoMessage = document.querySelector('.info-message');
	
	infoMessageBtn.addEventListener('click', () => {
		infoMessage.classList.remove('is-show');
		infoMessage.classList.add('is-hide');
	});

	// Запрет прокрутки и устранения дерганья при открытии модалок
	const body = document.querySelector('body');
	const scrollWidth = window.innerWidth - document.documentElement.clientWidth;

	// Закрытие модалок
	const modals = document.querySelectorAll('.modals');
	const closeModals = document.querySelectorAll('.modals__close');

	// Закрытие по .modals__close
	closeModals.forEach(button => {
		button.addEventListener('click', () => {
			modals.forEach(modal => {
				modal.classList.remove('is-active');
				body.style.overflow = '';
				body.style.paddingRight = 0;

			});
		});
	});

	// Закрытие по .modals__overlay
	function closeModal(e) {
		if (e.target.classList.contains('modals__close') || e.target.closest('.modals__close') || e.target.classList.contains('modals__overlay')) {
			const modal = e.target.closest('.modals');
			modal.classList.remove('is-active');
			body.style.overflow = '';
			body.style.paddingRight = 0;

		}
	}
	modals.forEach(modal => {
		modal.addEventListener('click', closeModal);
	});


	// Buttons Modal Open
	const btnOpenModalReg = document.querySelectorAll('.js-open-reg');
	const btnOpenModalLetter = document.querySelector('.js-open-letter');
	const btnOpenModalEmail = document.querySelector('.js-open-email');
	const btnOpenModalEmailInfo = document.querySelector('.js-open-email-info');
	const btnOpenModalSuccess = document.querySelector('.js-open-success');
	const btnCloseModalSuccess = document.querySelector('.modals-success__btn');

	// Modals
	const modalReg = document.querySelector('.modals-reg');
	const modalLetter = document.querySelector('.modals-letter');
	const modalEmail = document.querySelector('.modals-email');
	const modalEmailInfo = document.querySelector('.modals-emailinfo');
	const modalSuccess = document.querySelector('.modals-success');

	// Открытие модалки modals-reg
	btnOpenModalReg.forEach(button => {
		button.addEventListener('click', () => {
			modalReg.classList.add('is-active');
			body.style.overflow = 'hidden';
			body.style.paddingRight = `${scrollWidth}px`;
		});
	});

	// Открытие модалки modals-letter
	btnOpenModalLetter.addEventListener('click', () => {
		modalLetter.classList.add('is-active');
		body.style.overflow = 'hidden';
		body.style.paddingRight = `${scrollWidth}px`;
	});

	// Открытие модалки отправки modals-email
	btnOpenModalEmail.addEventListener('click', () => {
		modalEmail.classList.add('is-active');
		modalLetter.classList.remove('is-active');
		body.style.overflow = 'hidden';
		body.style.paddingRight = `${scrollWidth}px`;
	});

	// Открытие модалки modals-emailinfo
	btnOpenModalEmailInfo.addEventListener('click', () => {
		modalEmailInfo.classList.add('is-active');
		modalEmail.classList.remove('is-active');
		body.style.overflow = 'hidden';
		body.style.paddingRight = `${scrollWidth}px`;
	});

	// Открытие модалки modals-success
	btnOpenModalSuccess.addEventListener('click', () => {
		modalSuccess.classList.add('is-active');
		modalEmailInfo.classList.remove('is-active');
		body.style.overflow = 'hidden';
		body.style.paddingRight = `${scrollWidth}px`;
	});

	// Закрытие модалки modals-success
	btnCloseModalSuccess.addEventListener('click', () => {
		modalSuccess.classList.remove('is-active');
		body.style.overflow = '';
		body.style.paddingRight = 0;
	});

