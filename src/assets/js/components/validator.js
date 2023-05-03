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
  const name = $('.label-name input').val();

  if (validateName(name)) {
    $('.label-name').removeClass('error').addClass('success');
  } else {
    $('.label-name').addClass('error').removeClass('success');
  }
  if (name == '') {
    $('.label-name').removeClass('error').removeClass('success');
  }
  return false;
}

const validatedEmail = () => {
  const email = $('.label-email input').val();

  if (validateEmail(email)) {
    $('.label-email').removeClass('error').addClass('success');
  } else {
    $('.label-email').addClass('error').removeClass('success');
  }
  if (email == '') {
    $('.label-email').removeClass('error').removeClass('success');
  }
  return false;
}

const validatedPhone = () => {
  const phone = $('.label-phone input').val();

  if (validatePhone(phone)) {
    $('.label-phone').removeClass('error').addClass('success');
  } else {
    $('.label-phone').addClass('error').removeClass('success');
  }
  if (phone == '') {
    $('.label-phone').removeClass('error').removeClass('success');
  }
  return false;
}

$('.label-name input').on('input', validatedName);
$('.label-email input').on('input', validatedEmail);
$('.label-phone input').on('input', validatedPhone);

export { validateName, validateEmail, validatePhone }