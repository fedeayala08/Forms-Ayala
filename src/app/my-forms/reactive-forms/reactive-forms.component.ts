import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface UserModel{
  name: FormControl<string|null>;
  surname: FormControl<string|null>;
  email: FormControl<string | null>;
  address: FormControl<string|null>;
  city: FormControl<string|null>;
  password: FormControl<string|null>;
  
}
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {
 
  nameControl = new FormControl ('', [Validators.required]);
  surnameControl = new FormControl ('', [Validators.required]);
  emailControl = new FormControl ('', [Validators.required, Validators.email]);
  addressControl = new FormControl ('');
  cityControl = new FormControl ('');
  passwordControl = new FormControl ('', [Validators.required, Validators.minLength(10)]);

  userModel: FormGroup<UserModel> = new FormGroup({
    name: this.nameControl,
    surname:this.surnameControl,
    email:this.emailControl,
    address:this.addressControl,
    city: this.cityControl,
    password:this.passwordControl
  });

  constructor(private fb: FormBuilder) {
     
  }

  onSubmit(): void {
    if (this.userModel.invalid) {
      this.userModel.markAllAsTouched();
    } else {
       this.userModel.reset();
    }
  }

 
}
