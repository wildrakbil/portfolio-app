import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";

import { HeaderComponent } from "./header/header.component";
import { WebMenuComponent } from "./web-menu/web-menu.component";

@NgModule({
  declarations: [HeaderComponent, WebMenuComponent],
  imports: [CommonModule, MatToolbarModule, MatMenuModule, MatIconModule],
  exports: [HeaderComponent],
})
export class ComponentsModule {}
