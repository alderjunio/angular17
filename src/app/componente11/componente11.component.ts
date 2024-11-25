import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';

@Component({
  selector: 'app-componente11',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './componente11.component.html',
  styleUrl: './componente11.component.css'
})
export class Componente11Component {

    //Obejto de formulario
    formulario = new FormGroup({
      nome : new FormControl('', [Validators.required, Validators.minLength(3)]),
      idade : new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
      cidade : new FormControl('', [Validators.required, Validators.minLength(3)])
    });

    //visibilidade dos botoes
    btnCadastrar:boolean = true;

    // vetor
    vetor:Pessoa[] = [];


}
