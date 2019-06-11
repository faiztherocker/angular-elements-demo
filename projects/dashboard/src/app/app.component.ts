import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @Input() public container: string;
  @Output() public buttonClick: EventEmitter<number>;

  constructor(private router: Router) {
    this.router.initialNavigation();
    this.buttonClick = new EventEmitter<number>();
  }

  public emitEvent() {
    this.buttonClick.emit(55);
  }
}
