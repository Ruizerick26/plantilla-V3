import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface direccion{
  titulo: string,
  url: string
}

interface proyecto{
  nombre: string,
  descripcion: string,
  imagen: string,
  colaboradores: string[],
  detalles: direccion[],
  avatar: string

}

const avatar_default= "../../../assets/codigo.png"

@Component({
  selector: 'app-proyects',
  imports: [ MatCardModule, MatDividerModule, MatButtonModule, MatIconModule],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.scss'
})
export class ProyectsComponent {

  proyectos: proyecto[]=[
    {nombre:"FASHIONGEC",descripcion:"Sistema BACKEND para la aplicación Movil FASHIONGEC y su respectivo WEBSITE",
      imagen:"../../../assets/fashion.png", colaboradores: ["Gilmar morales", "Cristian Simba"], detalles: [{titulo:"FASHIONGEC.com",url:"https://fashiongec.vercel.app/"}], avatar:"../../../assets/logo.jpg"
    },
    {nombre:"PORTAFOLIO WEB V2",descripcion:"Portafolio Web realizado con Node.js y Angular",
      imagen:"../../../assets/portafolioweb.png", colaboradores: [], detalles: [{titulo:"REPOSITORIO",url:"https://github.com/Ruizerick26/plantilla-V3"},{titulo:"DESPLIEGUE",url:"https://protafoliorceee-ruizerick26s-projects.vercel.app/"}], avatar: avatar_default
    },
  ]

}
