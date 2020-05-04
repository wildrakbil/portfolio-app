import { RouterModule, Routes } from "@angular/router";

import { PagesComponent } from "./pages.component";
import { HomeComponent } from "./home/home.component";
import { FormationComponent } from "./formation/formation.component";
import { ExperienceComponent } from "./experience/experience.component";

const pagesRoutes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "formation", component: FormationComponent },
      { path: "experience", component: ExperienceComponent },
    ],
  },
];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
