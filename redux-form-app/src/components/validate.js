//import moment from 'moment';
import _ from 'lodash';
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
export const validateGender = value => !_.isEmpty(value) ? '' : 'Required'
export const validateEmail = values => {
  if (!values) {
    return 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values)) {
    return 'Invalid email address';
  }
  return ''
}