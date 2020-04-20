import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-web-menu",
  templateUrl: "./web-menu.component.html",
  styleUrls: ["./web-menu.component.scss"],
})
export class WebMenuComponent implements OnInit {
  constructor(public _router: Router, public _location: Location) {}

  ngOnInit() {}
}
