import moment from 'moment';

export const required = value => value ? '' : 'Required'
export const validateSignup = values => {
  const errors = {};
  if (!values.password) {
    errors.password = 'Required';
  }
  else if(values.password.length < 8){
    errors.password = 'Password must be longer than 8 characters';
  }
  if (!values.cfPassword) {
    errors.cfPassword = 'Required';
  } else if (values.cfPassword !== values.password) {
    errors.cfPassword = 'Password mismatched';
  }
  return errors;
};
// export const minLength = min => value => value && value.length < min ? "Must be ${min} characters or more": undefined
// export const minLength8 = minLength(8);
export const age = value => {
  console.log("age", typeof (value))
  console.log("time now", moment().format("DD/MM/YY"))
  return value && value > 100 ? 'You might be too old for this' : undefined;

}