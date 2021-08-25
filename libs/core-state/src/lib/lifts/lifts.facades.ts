import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Lift } from '@exercises/api-interfaces';
import { LiftsService } from '@exercises/core-data';
import { NotifyService } from '@exercises/core-data';
import { take, tap } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class LiftsFacade {
  private _allLiftsSource$ = new BehaviorSubject<Lift[]>([]);
  allLifts$: Observable<Lift[]> = this._allLiftsSource$.asObservable();
  private _selectedLiftSource$ = new BehaviorSubject<Lift>({} as Lift);
  selectedLift$: Observable<Lift> = this._selectedLiftSource$.asObservable();

  constructor(
    private liftsService: LiftsService,
    private notify: NotifyService
  ) {}

  loadLifts() {
    this.liftsService
      .all()
      .pipe(
        tap((lifts) => this._allLiftsSource$.next(lifts)),
        take(1)
      )
      .subscribe();
  }

  selectLift(liftId: string) {
    return this.liftsService
      .find(liftId)
      .pipe(
        tap((liftId) => this._selectedLiftSource$.next(liftId)),
        take(1)
      )
      .subscribe(() => {
        this.loadLifts();
      });
  }

  createLift(lift: Lift) {
    return this.liftsService
      .create(lift)
      .pipe(
        tap((lift) => this._selectedLiftSource$.next(lift)),
        take(1)
      )
      .subscribe(() => {
        this.loadLifts();
        this.notify.notification(`Created ${lift.name} successfully!`);
      });
  }

  updateLift(lift: Lift) {
    return this.liftsService
      .update(lift)
      .pipe(
        tap((lift) => this._selectedLiftSource$.next(lift)),
        take(1)
      )
      .subscribe(() => {
        this.loadLifts();
        this.notify.notification(`Updated ${lift.name} successfully!`);
      });
  }

  deleteLift(lift: Lift) {
    return this.liftsService
      .delete(lift)
      .pipe(
        tap((lift) => this._selectedLiftSource$.next(lift)),
        take(1)
      )
      .subscribe(() => {
        this.loadLifts();
        this.notify.notification(`Deleted ${lift.name} successfully!`);
      });
  }
}
