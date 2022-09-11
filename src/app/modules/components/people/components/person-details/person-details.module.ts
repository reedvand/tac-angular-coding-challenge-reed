import {NgModule} from "@angular/core";
import {PersonDetailsComponent} from "./person-details.component";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule, DatePipe} from "@angular/common";

const routes: Routes = [
  {path: '', component: PersonDetailsComponent}
];

@NgModule({
  declarations: [
    PersonDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DatePipe
  ]
})
export class PersonDetailsModule {}
