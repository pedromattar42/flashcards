import { NgClass, NgStyle } from '@angular/common';
import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './flip-card.component.html',
  styleUrl: './flip-card.component.scss'
})
export class FlipCardComponent {
  public toggleProperty = signal(false)
  public configuration = input.required<{height: string; width: string}>()
  public toggle() {
    this.toggleProperty.update(value => !value)
  }
}
