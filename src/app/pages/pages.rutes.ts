import { RouterModule, Routes } from "@angular/router";

import { PagesComponent } from "./pages.component";
import { HomeComponent } from "./home/home.component";
import { AssignmentComponent } from "./assignment/assignment.component";
import { ClinicalHistoryComponent } from "./clinical-history/clinical-history.component";
import { PreventionComponent } from "./prevention/prevention.component";
import { ReportsComponent } from "./reports/reports.component";
import { SupportComponent } from "./support/support.component";
import { GeolocationComponent } from "./geolocation/geolocation.component";

const pagesRoutes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "assignment", component: AssignmentComponent },
      { path: "clinical-history", component: ClinicalHistoryComponent },
      { path: "prevention", component: PreventionComponent },
      { path: "reports", component: ReportsComponent },
      { path: "support", component: SupportComponent },
      { path: "geolocation", component: GeolocationComponent },
    ],
  },
];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
