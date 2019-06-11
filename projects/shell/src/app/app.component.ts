import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  Renderer2
} from "@angular/core";
import { NgElement, WithProperties } from "@angular/elements";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  @ViewChild("microappContainer", { read: ElementRef })
  public container: ElementRef<any>;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  public buttonClick(event: any) {
    console.log(event.detail);
  }

  public loadDashboard() {
    const dashboardAppScript = this.renderer.createElement("script");
    this.renderer.setAttribute(
      dashboardAppScript,
      "src",
      "http://172.16.3.92:8081/main.js"
    );
    this.renderer.setAttribute(dashboardAppScript, "type", "text/javascript");
    this.renderer.appendChild(document.body, dashboardAppScript);
    this.renderDashboard();
  }

  public renderDashboard() {
    const taxpayerDashboardElement = this.renderer.createElement(
      "taxpayer-dashboard"
    ) as NgElement & WithProperties<{ container: string }>;
    this.renderer.appendChild(
      this.container.nativeElement,
      taxpayerDashboardElement
    );
    this.renderer.setAttribute(
      taxpayerDashboardElement,
      "container",
      "Shell Application"
    );
    this.renderer.listen(
      taxpayerDashboardElement,
      "buttonClick",
      this.buttonClick
    );
  }
}
