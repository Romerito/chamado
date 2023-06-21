import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ChamadoDTOComponent } from './chamadoDTO.component';

@Component({
  selector: 'app-chamado',
  templateUrl: './chamado.component.html',
  styleUrls: ['./chamado.component.css']
})
export class ChamadoComponent implements OnInit {
  title = 'Chamado';
  chamadoForm!: FormGroup;

  titulo!: string;
  descricao!: string;
  listarChamado!: boolean;

  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.createForm(new ChamadoDTOComponent());
  }
  
  
  createForm(chamado: ChamadoDTOComponent) {
    this.chamadoForm =  this.formBuilder.group({
      titulo: new FormControl(chamado.titulo),
      descricao: new FormControl(chamado.descricao),
      arquivo: new FormControl(chamado.arquivo),
    })
  }

  onSubmit(){
    if(this.chamadoForm.value.titulo == '' || this.chamadoForm.value.titulo == null){
      this.titulo = 'Preencher o título do chamado';
      if(this.chamadoForm.value.descricao == '' || this.chamadoForm.value.descricao == null){
        this.descricao = 'Preencher o titulo do descrição';
        return;
      }
    }
    this.listarChamado = true;
    console.log(this.chamadoForm.value.title)

  }

  setCleanTitulo (){
    this.title = '';
  }

  setCleanDescricao (){
    this.descricao = '';
  }

}
