import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  mustBeNumber() : ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
      const value = control.value;

      if (!value) {
        return null;
      }

      return isNaN(value) ? {isNotNumber: true} : null;
    }
  }
}
