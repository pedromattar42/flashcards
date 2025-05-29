import { Component, DestroyRef, forwardRef, inject, input, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  AbstractControl,
  ControlContainer,
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';

interface TextAreaConfiguration {
  rows: number;
  cols: number;
}

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [FormsModule, InputTextareaModule, ReactiveFormsModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
})
export class TextareaComponent implements OnInit, ControlValueAccessor {
  public label = input.required<string>();
  public placeholder = input<string>('Digite aqui');
  public errorMessage = input<string>('Mensagem de erro padrão.');
  public formControlName = input.required<string>();
  public configuration = input<TextAreaConfiguration>({ rows: 5, cols: 30 });
  public errors!: ValidationErrors | null;
  protected value: unknown;
  protected controlContainer = inject(ControlContainer);
  protected disabled: boolean = false;
  protected abstractControl!: AbstractControl;
  protected destroyRef = inject(DestroyRef);

  onChanged: (value: unknown) => void = () => {};
  onTouched: () => void = () => {};

  ngOnInit(): void {
    const control = this.getAbstractControl();
    console.log(control)
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
