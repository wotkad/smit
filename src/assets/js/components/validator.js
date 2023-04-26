const validateName = (name) => {
  if (name.length >= 2 && name.length < 50) {
    return name.match(
      /^[а-яА-Я]/
    );
  }
}

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const validatePhone = (phone) => {
  return phone.match(
    /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
  );
}

const validatedName = () => {
  const name = $('.service-popup__label-name input').val();

  if (validateName(name)) {
    $('.service-popup__label-name').removeClass('error').addClass('success');
  } else {
    $('.service-popup__label-name').addClass('error').removeClass('success');
  }
  if (name == '') {
    $('.service-popup__label-name').removeClass('error').removeClass('success');
  }
  return false;
}

const validatedEmail = () => {
  const email = $('.service-popup__label-email input').val();

  if (validateEmail(email)) {
    $('.service-popup__label-email').removeClass('error').addClass('success');
  } else {
    $('.service-popup__label-email').addClass('error').removeClass('success');
  }
  if (email == '') {
    $('.service-popup__label-email').removeClass('error').removeClass('success');
  }
  return false;
}

const validatedPhone = () => {
  const phone = $('.service-popup__label-phone input').val();

  if (validatePhone(phone)) {
    $('.service-popup__label-phone').removeClass('error').addClass('success');
  } else {
    $('.service-popup__label-phone').addClass('error').removeClass('success');
  }
  if (phone == '') {
    $('.service-popup__label-phone').removeClass('error').removeClass('success');
  }
  return false;
}

$('.service-popup__label-name input').on('input', validatedName);
$('.service-popup__label-email input').on('input', validatedEmail);
$('.service-popup__label-phone input').on('input', validatedPhone);

export { validateName, validateEmail, validatePhone }