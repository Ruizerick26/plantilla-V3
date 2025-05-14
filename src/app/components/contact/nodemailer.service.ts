import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    const url= "http://localhost:300/api/sendmail"
    try{
      this.http.post(url,json).subscribe(JSON => {
        console.log("correo enviado",JSON)
      })
    }catch(error){
      console.log(error) 
    }
  }
  
}
