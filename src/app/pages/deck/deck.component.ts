import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardComponent } from '../../shared/components/molecules/card/card.component';

@Component({
  selector: 'app-deck',
  standalone: true,
  imports: [ButtonModule, CardComponent],
  templateUrl: './deck.component.html',
  styleUrl: './deck.component.scss'
})
export class DeckComponent {

}
