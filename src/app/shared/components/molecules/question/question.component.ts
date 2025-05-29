import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  public question = signal('Pergunta de exemplo?');
  public answer = signal('Resposta de exemplo');
}
