import { AbstractType, ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal } from '@angular/core';
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
import {MatDialog, MatDialogModule, MatDialogTitle, MatDialogContent, MatDialogActions} from '@angular/material/dialog'




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
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  readonly dialog = inject(MatDialog);
  matcher = new MyErrorStateMatcher();

  contatForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    message: new FormControl('')
  })

  onSubmit(){
    console.log("enviado")
    console.log(this.contatForm)
    console.warn(this.contatForm.value)
    console.log('-------')
    this.dialog.open(messagedialog)
    this.contatForm.reset()
    this.contatForm.controls.email.setErrors(null)
    this.contatForm.controls.name.setErrors(null)
    this.contatForm.controls.lastname.setErrors(null)
  }
} 

@Component({
  selector: 'dialogic-messsaje',
  templateUrl: 'dialogic-message.html',
  imports: [MatDialogModule, MatDialogActions, MatDialogContent, MatDialogTitle, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class messagedialog {}