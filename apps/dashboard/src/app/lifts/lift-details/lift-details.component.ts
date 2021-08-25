import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Lift } from '@exercises/api-interfaces';

@Component({
  selector: 'exercises-lift-details',
  templateUrl: './lift-details.component.html',
  styleUrls: ['./lift-details.component.scss'],
})
export class LiftDetailsComponent {
  currentLift: Lift;
  originalName: string;

  @Input() set lift(value: Lift | null) {
    if (value) this.originalName = value.name;
    this.currentLift = Object.assign({}, value);
  }
  @Input() form: FormGroup;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  save(lift: Lift) {
    this.saved.emit(lift);
  }

  cancel() {
    this.cancelled.emit();
  }

  saveForm(formDirective: FormGroupDirective) {
    if (this.form.invalid) return;
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  }
}
