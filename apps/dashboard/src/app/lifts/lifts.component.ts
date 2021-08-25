import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emptyLift, Lift } from '@exercises/api-interfaces';
import { LiftsFacade } from '@exercises/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'exercises-lifts',
  templateUrl: './lifts.component.html',
  styleUrls: ['./lifts.component.scss'],
})
export class LiftsComponent implements OnInit {
  form: FormGroup;
  lifts$: Observable<Lift[]> = this.liftsFacade.allLifts$;
  selectedLift$: Observable<Lift> = this.liftsFacade.selectedLift$;
  constructor(
    private liftsFacade: LiftsFacade,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
    this.liftsFacade.loadLifts();
    this.reset();
  }

  reset() {
    this.selectLift(emptyLift);
    this.form.reset();
  }

  selectLift(lift: Lift) {
    this.liftsFacade.selectLift(lift.id);
    this.form.patchValue(lift);
  }

  createLift(lift: Lift) {
    this.liftsFacade.createLift(lift);
    this.reset();
  }

  updateLift(lift: Lift) {
    this.liftsFacade.updateLift(lift);
    this.reset();
  }

  saveLift(lift: Lift) {
    lift.id
      ? this.liftsFacade.updateLift(lift)
      : this.liftsFacade.createLift(lift);
  }

  deleteLift(lift: Lift) {
    this.liftsFacade.deleteLift(lift);
    this.reset();
  }

  cancel() {
    this.reset();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.required],
      muscleGroups: ['', Validators.required],
      myOneRep: ['', Validators.required],
      currentSetRep: ['', Validators.required],
      percentOfOneRep: ['', Validators.required],
    });
  }
}
