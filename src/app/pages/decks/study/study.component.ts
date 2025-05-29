import { Component, computed, effect, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { FlipCardComponent } from '../../../shared/components/molecules/flip-card/flip-card.component';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-study',
  standalone: true,
  imports: [ButtonModule, ProgressBarModule, FlipCardComponent, TagModule],
  templateUrl: './study.component.html',
  styleUrl: './study.component.scss',
})
export class StudyComponent {
  private router = inject(Router);
  public subject = signal('Matemática Básica');
  public currentQuestion = computed(
    () => this.questions()[this.currentQuestionIndex()]
  );
  public currentQuestionIndex = signal(0);
  public totalQuestions = signal(0);
  public percentage = computed(
    () => ((this.currentQuestionIndex() + 1) / this.totalQuestions()) * 100
  );
  public questions = signal<{ question: string; answer: string }[]>([
    { question: 'Qual é 1 + 1?', answer: '2' },
    { question: 'Qual é 2 + 2?', answer: '4' },
    { question: 'Qual é 3 + 3?', answer: '6' },
  ]);
  public studyCompleted = signal(false)

  constructor() {}

  ngOnInit() {
    this.totalQuestions.set(this.questions().length);
  }

  nextQuestion() {
    if (this.currentQuestionIndex() >= this.totalQuestions() - 1) {
      this.studyCompleted.set(true);
      return;
    };

    this.currentQuestionIndex.update((value) => value + 1);
  }

  previousQuestion() {
    if (this.currentQuestionIndex() <= 0) return;

    this.currentQuestionIndex.update((value) => value - 1);
  }

  resetStudy() {
    this.currentQuestionIndex.set(0);
    this.studyCompleted.set(false);
  }

  returnToDeckView() {
    this.router.navigate(['baralho/visualizar/1']);
  }
}
