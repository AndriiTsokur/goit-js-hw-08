import Throttle from 'lodash.throttle';
import * as FormOps from './03/formOps';

const formRef = document.querySelector('.feedback-form');

FormOps.restoreInput();

formRef.addEventListener(
	'input',
	Throttle(FormOps.handleInput, 500, { leading: false })
);

formRef.addEventListener('submit', FormOps.handleSubmit);
