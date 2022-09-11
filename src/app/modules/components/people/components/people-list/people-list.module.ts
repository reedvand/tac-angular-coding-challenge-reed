import {NgModule} from "@angular/core";
import {PeopleListComponent} from "./people-list.component";
import {RouterModule, Routes} from "@angular/router";
import {AsyncPipe, CommonModule} from "@angular/common";

const routes: Routes = [
  {path: '', component: PeopleListComponent}
];

@NgModule({
  declarations: [
    PeopleListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AsyncPipe
  ]
})
export class PeopleListModule {
}
