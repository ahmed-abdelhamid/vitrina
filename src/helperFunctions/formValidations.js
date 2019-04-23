import validator from 'validator';

export const editFormValidation = ({
  firstname,
  lastname,
  email,
  mobile,
  password,
  repassword
}) => {
  const errors = {};

  if (!firstname) {
    errors.firstname = 'حقل إلزامى';
  }
  if (!lastname) {
    errors.lastname = 'حقل إلزامى';
  }
  if (!email) {
    errors.email = 'حقل إلزامى';
  }

  if (email && !validator.isEmail(email)) {
    errors.email = 'البريد الإلكترونى غير صحيح';
  }

  if (!mobile) {
    errors.mobile = 'يرجى إدخال رقم الهاتف';
  }

  if (mobile && !validator.isMobilePhone(mobile, 'ar-SA')) {
    errors.mobile = ' رقم الجوال يجب ان يبدا بـ 05 ومكون من 10 أرقام';
  }

  if (password && password !== repassword) {
    errors.repassword = 'إعادة كلمة المرور لا تتطابق مع كلمة المرور';
  }

  return errors;
};
