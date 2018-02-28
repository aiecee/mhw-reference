import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { environment } from "../environments/environment";

const routes: Routes = [
  { path: "", redirectTo: "/monsters", pathMatch: "full" },
  { path: "**", redirectTo: "/monsters", pathMatch: "full" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      //enableTracing: !environment.production,
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
