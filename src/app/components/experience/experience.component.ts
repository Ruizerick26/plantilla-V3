import { ChangeDetectionStrategy,Component, viewChild, signal } from '@angular/core';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-experience',
  imports: [MatExpansionModule, MatDividerModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers:[provideNativeDateAdapter()],
})
export class ExperienceComponent {
  accordion = viewChild.required(MatAccordion)
}
