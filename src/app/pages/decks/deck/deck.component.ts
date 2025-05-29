import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import { CardComponent } from '../../../shared/components/molecules/card/card.component';
import { DeckFormComponent } from '../../../shared/components/organisms/deck-form/deck-form.component';
import { SkeletonModule } from 'primeng/skeleton';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deck',
  standalone: true,
  imports: [ButtonModule, CardComponent, SkeletonModule],
  templateUrl: './deck.component.html',
  styleUrl: './deck.component.scss',
  providers: [DialogService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeckComponent {
  private dialogService = inject(DialogService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  public newDeck() {
    const ref = this.dialogService.open(DeckFormComponent, {
      header: 'Criar novo baralho',
      width: '50vw',
      modal: true,
    });
  }

  public openDeck() {
    this.router.navigate(['../visualizar/1'], {
      relativeTo: this.route
    });
  }
}
