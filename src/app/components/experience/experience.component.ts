import { ChangeDetectionStrategy,Component, viewChild, signal } from '@angular/core';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-experience',
  imports: [MatExpansionModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers:[provideNativeDateAdapter()],
})
export class ExperienceComponent {
  accordion = viewChild.required(MatAccordion)
}
