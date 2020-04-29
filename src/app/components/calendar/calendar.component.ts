import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

import { ModalAddEventComponent } from "../modal-add-event/modal-add-event.component";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"],
})
export class CalendarComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openModalAddEvent() {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(ModalAddEventComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      (result) => {
        console.log("The dialog was closed");
      },
      (error) => console.log(error)
    );
  }
}
