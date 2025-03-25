import { Component} from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import { ExperienceComponent } from '../../components/experience/experience.component';
import {MatDividerModule} from '@angular/material/divider';


@Component({
  selector: 'app-home',
  imports: [ FooterComponent, MatCardModule, MatButtonModule, MatIconModule, ExperienceComponent, MatDividerModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(iconRegistry: MatIconRegistry, domSantizer: DomSanitizer){
    iconRegistry.addSvgIconSet(
      domSantizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')
    );
  }
}
