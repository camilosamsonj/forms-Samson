import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  userForm: FormGroup;
  constructor (
    private formBuilder: FormBuilder){
      this.userForm = this.formBuilder.group({

        nombre: ['', [Validators.required, Validators.minLength(3)]],
        apellido: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      })
      
    }
    get nombreControlIsInvalid(){
      return this.userForm.controls['nombre'].invalid && this.userForm.controls['nombre'].touched;
    }
    get apellidoControlIsInvalid(){
      return this.userForm.controls['apellido'].invalid && this.userForm.controls['apellido'].touched;
    }
    get emailControlIsInvalid(){
      return this.userForm.controls['email'].invalid && this.userForm.controls['email'].touched;
    }
    get passwordControlIsInvalid(){
      return this.userForm.controls['password'].invalid && this.userForm.controls['password'].touched;
    }
    get nombreControl(){
      return this.userForm.controls['nombre'];
    }
    get apellidoControl(){
      return this.userForm.controls['apellido'];
    }

    get emailControl(){
      return this.userForm.controls['email'];
    }

    get passwordControl(){
      return this.userForm.controls['password'];
    }

    onSubmit(): void{
      if(this.userForm.invalid){
        alert('Debes llenar el formulario')
      } else {
        console.log(this.userForm.value)
      }     
    }
}
