import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiftsFacade } from './lifts/lifts.facades';

@NgModule({
  imports: [CommonModule],
  providers: [LiftsFacade],
})
export class CoreStateModule {}
