import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSnackBarModule,
  MatStepperModule,
  MatToolbarModule,
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ComponentsModule } from "../components/components.module";

import { PagesComponent } from "./pages.component";
import { HomeComponent } from "./home/home.component";
import { ClinicalHistoryComponent } from "./clinical-history/clinical-history.component";
import { AssignmentComponent } from "./assignment/assignment.component";
import { PreventionComponent } from "./prevention/prevention.component";
import { ReportsComponent } from "./reports/reports.component";
import { SupportComponent } from './support/support.component';
import { GeolocationComponent } from './geolocation/geolocation.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ClinicalHistoryComponent,
    AssignmentComponent,
    PreventionComponent,
    ReportsComponent,
    SupportComponent,
    GeolocationComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatSnackBarModule,
  ],
})
export class PagesModule {}
