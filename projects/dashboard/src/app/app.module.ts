import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { EmptyComponent } from "./empty/empty.component";
import { DashboardModule } from "./dashboard/dashboard.module";

@NgModule({
  declarations: [AppComponent, EmptyComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "**", component: EmptyComponent }], {
      useHash: true
    }),
    DashboardModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const dashboardElement = createCustomElement(AppComponent, {
      injector: this.injector
    });

    customElements.define("taxpayer-dashboard", dashboardElement);
  }

  ngDoBootstrap() {}
}
