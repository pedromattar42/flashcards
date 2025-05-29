import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-home',
  imports: [TagModule, BadgeModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent { 
  private router = inject(Router)

  goToDecks() {
    this.router.navigate(['baralho'])
  }

}
