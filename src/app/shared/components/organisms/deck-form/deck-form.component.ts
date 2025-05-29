import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { InputComponent } from '../../atoms/input/input.component';
import { TextareaComponent } from '../../atoms/textarea/textarea.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-deck-form',
  standalone: true,
  imports: [
    InputComponent,
    TextareaComponent,
    ReactiveFormsModule,
    ButtonModule,
  ],
  templateUrl: './deck-form.component.html',
  styleUrl: './deck-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeckFormComponent implements OnInit {
  public model!: FormGroup;
  private fb: FormBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.model = this.getForm();
  }

  private getForm() {
    return this.fb.group({
      titulo: [undefined, [Validators.required]],
      descricao: [undefined],
    });
  }
}
