import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { UserService } from '../../services/user-service/user.service';
import { CustomValidators } from '../../_helpers/custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    passwordConfirm: new FormControl(null, [Validators.required]),
    // first_name: new FormControl(null, [Validators.required]),
    // second_name: new FormControl(null, [Validators.required]),
    // third_name: new FormControl(null, [Validators.required]),
    // birthday: new FormControl(null, [Validators.required]),
    // avatar_url: new FormControl(null, [Validators.required]),
    // sex: new FormControl(null, [Validators.required])
  },
    { validators: CustomValidators.passwordsMatching }
  );

  constructor(private userService: UserService, private router: Router) { }

  register() {
    if (this.form.valid) {
      this.userService.create({
        email: this.email.value,
        password: this.password.value,
        username: this.username.value,
        // first_name: this.first_name.value,
        // second_name:this.second_name.value,
        // third_name:this.third_name.value,
        // birthday: this.birthday.value,
        // avatar_url:this.avatar_url.value,
        // sex:this.sex.value
      }).pipe(
        tap(() => this.router.navigate(['../login']))
      ).subscribe();
    }
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get username(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  get passwordConfirm(): FormControl {
    return this.form.get('passwordConfirm') as FormControl;
  }

  // get first_name(): FormControl {
  //   return this.form.get('first_name') as FormControl;
  // }

  // get second_name(): FormControl {
  //   return this.form.get('second_name') as FormControl;
  // }

  // get third_name(): FormControl {
  //   return this.form.get('third_name') as FormControl;
  // }

  // get birthday(): FormControl {
  //   return this.form.get('birthday') as FormControl;
  // }

  // get avatar_url(): FormControl {
  //   return this.form.get('avatar_url') as FormControl;
  // }

  // get sex(): FormControl {
  //   return this.form.get('sex') as FormControl;
  // }

}
