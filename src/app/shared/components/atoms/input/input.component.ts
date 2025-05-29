import {
  Component,
  DestroyRef,
  forwardRef,
  inject,
  input,
  OnInit
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  AbstractControl,
  ControlContainer,
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    FormsModule,
    InputTextareaModule,
    ReactiveFormsModule,
    InputTextModule,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor {
  public label = input.required<string>();
  public placeholder = input<string>('Digite aqui');
  public type = input.required<'text' | 'email' | 'password'>();
  public errorMessage = input<string>('Mensagem de erro padrão.');
  public formControlName = input.required<string>();
  protected controlContainer = inject(ControlContainer);
  public errors!: ValidationErrors | null;
  protected value: unknown;
  protected disabled: boolean = false;
  protected abstractControl!: AbstractControl;
  protected destroyRef = inject(DestroyRef);

  onChanged: (value: unknown) => void = () => {};
  onTouched: () => void = () => {};

  ngOnInit(): void {
    const control = this.getAbstractControl();
    if (!control) {
      throw new Error('FormControl não encontrado');
    }
    this.abstractControl = control;
    this.abstractControl.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.updateErrors());
  }

  private updateErrors(): void {
    const control = this.abstractControl;
    this.errors = control.touched && control.dirty ? control.errors : null;
  }

  getAbstractControl() {
    return this.controlContainer.control?.get(this.formControlName());
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  updateValue(value: unknown) {
    this.onChanged(value);
    this.onTouched();
  }
}
