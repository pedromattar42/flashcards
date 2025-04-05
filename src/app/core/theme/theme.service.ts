import { effect, Injectable, signal, WritableSignal } from '@angular/core';
import { ValidThemes } from './interfaces/theme';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  private readonly _themeSignal: WritableSignal<ValidThemes> = signal<ValidThemes>('light');
  public readonly themeSignal = this._themeSignal.asReadonly();

  constructor() {
    const savedTheme = localStorage.getItem('userTheme') as ValidThemes;
    if (savedTheme === 'dark' || savedTheme === 'light') {
      this._themeSignal.set(savedTheme);
    }

    effect(() => {
      const theme = this._themeSignal();
      this.applyTheme(theme);
      localStorage.setItem('userTheme', theme);
    });
  }

  public get theme(): ValidThemes {
    return this._themeSignal();
  }

  public toggleTheme(): void {
    this._themeSignal.update(current => current === 'light' ? 'dark' : 'light');
  }

  private applyTheme(theme: ValidThemes): void {
    const themeLink = document.getElementById('app-theme') as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = `${theme}.css`;
    }
  }
}
