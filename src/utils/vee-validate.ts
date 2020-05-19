import Vue from 'vue';
import { required, min, max, email } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';

extend('required', {
  ...required,
  message: 'Obligatory field'
});

extend('max', {
  ...max,
  message: 'This field must be {length} characters or less'
});

extend('email', {
  ...min,
  message: 'This field must contain at least {length} characters'
});

extend('email', {
  ...email,
  message: 'invalid email'
});
