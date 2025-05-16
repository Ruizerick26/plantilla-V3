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
import {MatDialog, MatDialogModule, MatDialogTitle, MatDialogContent, MatDialogActions} from '@angular/material/dialog';
import { NodemailerService } from './nodemailer.service';


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
  api: NodemailerService = inject(NodemailerService)

  contatForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    message: new FormControl('')
  })

 onSubmit() {
    this.api.sendmail(this.contatForm.value.email!,this.contatForm.value.name!,this.contatForm.value.lastname!,this.contatForm.value.message!)
    console.log("enviado")
    console.log('-------')
    this.dialog.open(messagedialog)
    this.contatForm.reset()
    this.contatForm.controls.email.setErrors(null) 
    this.contatForm.controls.name.setErrors(null)
    this.contatForm.controls.lastname.setErrors(null)
  }
} 

//popup message

@Component({
  selector: 'dialogic-messsaje',
  templateUrl: 'dialogic-message.html',
  imports: [MatDialogModule, MatDialogActions, MatDialogContent, MatDialogTitle, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class messagedialog {}