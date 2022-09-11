import {NgModule} from "@angular/core";
import {EditPersonComponent} from "./edit-person.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: EditPersonComponent}
];

@NgModule({
  declarations: [
    EditPersonComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class EditPersonModule {}
