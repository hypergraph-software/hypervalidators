import {Validator, ValidatorFn, ValidationErrors} from '@angular/forms';
import {AbstractControl} from '@angular/forms';

export class HyperValidators {
  static equalTo(target:AbstractControl): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value == target.value) {
        return null;
      }

      return {'equalTo': {'equalTo': control.value, 'actual':target.value}};
    }
  }
  
  static identicalTo(target:AbstractControl): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value === target.value) {
        return null;
      }

      return {'identicalTo': {'identicalTo': control.value, 'actual':target.value}};
    }
  }
}
