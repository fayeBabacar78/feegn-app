import {FormControl, FormGroup, ValidationErrors} from '@angular/forms';

export function emailValidator(control: FormControl): { [key: string]: any } {
  const emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  if (control.value && !emailRegexp.test(control.value)) {
    return {invalidEmail: true};
  }
}

function passwordMatch(form: FormGroup): ValidationErrors | undefined {
  const passwordControl = form.get('password');
  const confirmPasswordControl = form.get('passwordConfirm');
  return passwordControl.value === confirmPasswordControl.value ? null : {missMatch: true};
}

function shortPassword(form: FormGroup): ValidationErrors | undefined {
  const passwordControl = form.get('password');
  return passwordControl.value.length >= 6 ? null : {short: true};
}
