import successPopup from "./success-popup";
import errorPopup from "./error-popup";
import validator from "./validator";

export default function callback() {

  let form = $('.callback__form');

  if (form) {
    form.submit(function(e) {
      e.preventDefault();
		 if (validator.validateName($('.label-name input').val()) && validator.validateEmail($('.label-email input').val()) && validator.validatePhone($('.label-phone input').val())) {
			 
			grecaptcha.ready(function() {
				grecaptcha.execute(recaptcha_token, { action: 'submit' }).then(function (token) {

					let url = form.get(0).action;
					let formData = new FormData(form.get(0));
					formData.append('token', token);
			
					fetch(url, {
						method: 'POST',
						headers: {
							'X-CSRFToken' : String(formData.get('csrfmiddlewaretoken')),
						},
						body: formData
					}).then((response) => {
						if (response.status === 200) {
							form.get(0).reset();
							successPopup('Ваша заявка принята', 'Наши менеджеры перезвонят вам в ближайшее время');
							$('.callback__form__label').removeClass('success');
						} else {
							errorPopup();
						}
					});
					
				});
			});
			 
      }
    });
  }
}
callback();
