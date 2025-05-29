import { Component, inject, input, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { QuestionComponent } from '../../../shared/components/molecules/question/question.component';

@Component({
  selector: 'app-deck-view',
  standalone: true,
  imports: [ButtonModule, QuestionComponent],
  templateUrl: './deck-view.component.html',
  styleUrl: './deck-view.component.scss'
})
export class DeckViewComponent {
  public title = signal('Título de exemplo');
  public description = signal('Descrição de exemplo');
  private router = inject(Router)


  public returnToDecks() {
    this.router.navigate(['baralho']);
  }

  public goToStudy() {
    this.router.navigate(['baralho/estudar/1']);
  }
}
