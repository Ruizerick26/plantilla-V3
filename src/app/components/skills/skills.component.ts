import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Interface } from 'readline';

interface dataSkils{
  name: string,
  image: string
}


@Component({
  selector: 'app-skills',
  imports: [MatDividerModule, MatCardModule, MatButtonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skils: dataSkils[] = [
    {name: "Node.js", image: "../../../assets/nodejs.png"},
    {name: "C++", image: "../../../assets/C.png"},
    {name: "HTML", image: "../../../assets/html-5.png"},
    {name: "CSS", image: "../../../assets/css-3.png"},
    {name: "JAVA", image: "../../../assets/java.png"},
    {name: "Mondo DB", image: "../../../assets/mongo.jpg"},
    {name: "Office", image: "../../../assets/office.webp"},
    {name: "Python", image: "../../../assets/python.png"},
    {name: "Java Script", image: "../../../assets/javasp.png"},
    {name: "Visual Basic", image: "../../../assets/visualB.png"},
    {name: "Kotlin", image: "../../../assets/android.png"},
    {name: "Git", image: "../../../assets/git.png"},
    {name: "Github", image: "../../../assets/github.png"},
    {name: "SQL", image: "../../../assets/servidor-sql.png"},
    {name: "Flutter", image: "../../../assets/flutter.svg"},
    {name: "Ionic", image: "../../../assets/ionic.png"},
  ]
}
