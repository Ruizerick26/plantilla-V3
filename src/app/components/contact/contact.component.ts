import { AbstractType, Component, signal } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'; 
import {   
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  AbstractControl, } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-contact',
  imports: [MatDividerModule,MatFormFieldModule,MatButtonModule, FormsModule, MatInputModule, ReactiveFormsModule  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  matcher = new MyErrorStateMatcher();

  contatForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    message: new FormControl('')
  })

  onSubmit(){
    console.log("enviado")
    console.warn(this.contatForm.value)
    console.log('-------')
    this.contatForm.reset()
    this.contatForm.controls.email.setErrors(null)
    this.contatForm.controls.name.setErrors(null)
    this.contatForm.controls.lastname.setErrors(null)
  }
}
