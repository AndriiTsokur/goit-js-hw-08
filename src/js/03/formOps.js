import * as LocalStorageOps from '../common-modules/localStorageOps';

const LOCAL_STORAGE_KEY = 'feedback-form-state';
const emailRef = document.querySelector('[name="email"]');
const messageRef = document.querySelector('[name="message"]');

let formContent = {
	email: '',
	message: '',
};

export function restoreInput() {
	if (!LocalStorageOps.read(LOCAL_STORAGE_KEY)) {
		return;
	}

	formContent = LocalStorageOps.read(LOCAL_STORAGE_KEY);
	fillInputValues();
}

export function handleInput(e) {
	formContent[e.target.name] = e.target.value.trim();
	LocalStorageOps.write(LOCAL_STORAGE_KEY, formContent);
}

export function handleSubmit(e) {
	e.preventDefault();
	console.log(formContent);

	LocalStorageOps.remove(LOCAL_STORAGE_KEY);
	formContent.email = '';
	formContent.message = '';

	fillInputValues();
}

function fillInputValues() {
	emailRef.value = formContent.email;
	messageRef.value = formContent.message;
}
