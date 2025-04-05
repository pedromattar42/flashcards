import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from '../../../../core/theme/theme.service';

@Component({
  selector: 'app-header',
  imports: [ButtonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private themeService = inject(ThemeService)
  public theme = computed(() => this.themeService.themeSignal())

  public toggleTheme() {
    this.themeService.toggleTheme();
  }
}
