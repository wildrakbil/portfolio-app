import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "./header/header.component";
import { WebMenuComponent } from "./web-menu/web-menu.component";
import { FooterComponent } from "./footer/footer.component";
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';

@NgModule({
  declarations: [HeaderComponent, WebMenuComponent, FooterComponent, LeftSidebarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class ComponentsModule {}
