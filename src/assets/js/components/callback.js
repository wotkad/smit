import successPopup from "./success-popup";
import errorPopup from "./error-popup";
import { validateEmail, validatePhone, validateName } from "./validator";

export default function callback() {

  let form = $('.callback__form');

  if (form) {
    form.submit(function(e) {
      e.preventDefault();
      if (validateName($('.label-name input').val()) && validateEmail($('.label-email input').val()) && validatePhone($('.label-phone input').val())) {
        fetch('/assets/files/callback.php', {
          method: 'POST',
          body: new FormData(form.get(0))
        }).then((response) => {
          if (response.status !== 200) {
            form.get(0).reset();
            successPopup('Ваша заявка принята', 'Наши менеджеры перезвонят вам в ближайшее время');
            $('.callback__form__label').removeClass('success');
          } else if (response.status == 200) {
            errorPopup();
          }
        });
      }
    });
  }
}
callback();
