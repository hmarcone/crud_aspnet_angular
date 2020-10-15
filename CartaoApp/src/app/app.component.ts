import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PagamentoCartao';

  constructor(
    private AppService: AppService//,
    //private toastr: ToastrService
    ) { } 

  data: any;  
  CartaoForm: FormGroup; 
  submitted = false;   
  EventValue: any = "Salvar";
  exibirBotaoCancelar = false;

  ngOnInit(): void {
    this.getData();

    this.CartaoForm = new FormGroup({  
      PagamentoId: new FormControl(null),  
      NomeTitular: new FormControl("",[Validators.required]),        
      NumeroCartao: new FormControl("",[Validators.required]),  
      DataExpiracao:new FormControl("",[Validators.required]),  
      CVV: new FormControl("",[Validators.required]),  
    })

  }

  getData() {  
    this.AppService.getData().subscribe((data: any[]) => {  
      this.data = data;  
    })  
  }

  deleteData(id) {  
    console.log(id);
    this.AppService.deleteData(id).subscribe((data: any[]) => {  
      this.data = data;  
      this.getData();  
    })  
  }

  save() {   
    this.submitted = true;      
     if (this.CartaoForm.invalid) {  
            return;  
     }  
     console.log(this.CartaoForm.value.PagamentoId);
     this.CartaoForm.value.PagamentoId = 0;
     console.log(this.CartaoForm.value.PagamentoId);
     this.AppService.postData(this.CartaoForm.value).subscribe((data: any[]) => {  
      this.data = data;  
      this.resetFrom();   
      //this.toastr.success('Hello world!', 'Toastr fun!');
    })  
  }

  upDate() {   
    this.submitted = true;      
    if (this.CartaoForm.invalid) {  
     return;  
    }        

    console.log(this.CartaoForm.value);

    this.AppService.putData(this.CartaoForm.value.PagamentoId,
             this.CartaoForm.value).subscribe((data: any[]) => {  
      this.data = data;  
      this.resetFrom();  
    })  
  }  
  
  editData(data) {  
    this.CartaoForm.controls["PagamentoId"].setValue(data.pagamentoId);  
    this.CartaoForm.controls["NomeTitular"].setValue(data.nomeTitular);      
    this.CartaoForm.controls["NumeroCartao"].setValue(data.numeroCartao);  
    this.CartaoForm.controls["DataExpiracao"].setValue(data.dataExpiracao);  
    this.CartaoForm.controls["CVV"].setValue(data.cvv);  
    this.EventValue = "Atualizar"; 
    this.exibirBotaoCancelar = true; 
  }

  resetFrom()  
  {     
    this.getData();  
    this.CartaoForm.reset();  
    this.EventValue = "Salvar";  
    this.exibirBotaoCancelar = false; 
    this.submitted = false;   
  }   

  Salvar(){
    this.save();
  }

  Atualizar(){
    console.log("Atualizar...");
    this.upDate();
  }
}
