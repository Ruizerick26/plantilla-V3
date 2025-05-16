import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NodemailerService {
  private http= inject(HttpClient)
  constructor(){
  }
  sendmail(email:any,name:string,lastname:string,message:string){
    var json = {
      email: email,
      nombre: name,
      apellido: lastname,
      mensaje: message
    }
    const url=  `${environment.apiURL}/api/sendmail`
    try{
      this.http.post(url,json).subscribe(JSON => {
        console.log("correo enviado",JSON)
      })
    }catch(error){
      console.log(error) 
    }
  }
  
}
