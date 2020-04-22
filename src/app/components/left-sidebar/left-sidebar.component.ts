import { Component, OnInit } from "@angular/core";
import * as classie from "classie";

@Component({
  selector: "app-left-sidebar",
  templateUrl: "./left-sidebar.component.html",
  styleUrls: ["./left-sidebar.component.scss"],
})
export class LeftSidebarComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    var ul = document.getElementById("sidebarnav");
    var lis = ul.getElementsByTagName("li");
    for (var i = 0; i < lis.length; i++) {
      classie.remove(lis[i], "active");
      classie.remove(lis[i].getElementsByTagName("a"), "active");
    }
  }

  public hideMenu(idElement: string) {
    console.log(idElement);
    classie.toggle(document.getElementById(idElement), "in");
    classie.remove(document.getElementById(idElement), "invisible");
    if (
      document.getElementById(idElement).getAttribute("aria-expanded") ==
      "false"
    ) {
      document.getElementById(idElement).setAttribute("aria-expanded", "true");
      document
        .getElementById(idElement + "1")
        .setAttribute("aria-expanded", "true");
    } else {
      document.getElementById(idElement).setAttribute("aria-expanded", "false");
      document
        .getElementById(idElement + "1")
        .setAttribute("aria-expanded", "false");
    }
  }
}
