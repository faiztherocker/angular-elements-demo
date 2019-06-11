import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { DashboardSubComponent } from "./dashboard-sub/dashboard-sub.component";
import { DashboardSub1Component } from "./dashboard-sub1/dashboard-sub1.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "dashboard",
        component: DashboardComponent,
        children: [
          { path: "sub", component: DashboardSubComponent },
          { path: "sub1", component: DashboardSub1Component }
        ]
      }
    ])
  ],
  declarations: [
    DashboardComponent,
    DashboardSubComponent,
    DashboardSub1Component
  ]
})
export class DashboardModule {}
