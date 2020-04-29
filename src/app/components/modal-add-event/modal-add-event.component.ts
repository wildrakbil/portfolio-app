import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-modal-add-event",
  templateUrl: "./modal-add-event.component.html",
  styleUrls: ["./modal-add-event.component.scss"],
})
export class ModalAddEventComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalAddEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  closeModal() {
    this.dialogRef.close("Pizza!");
  }
}

export interface DialogData {
  animal: string;
  name: string;
}
