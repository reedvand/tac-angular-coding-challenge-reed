import {NgModule} from "@angular/core";
import {EditPersonComponent} from "./edit-person.component";
import {RouterModule, Routes} from "@angular/router";
import {AsyncPipe, NgIf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {UserFormModule} from "../../../../shared/user-form/user-form.module";

const routes: Routes = [
  {path: '', component: EditPersonComponent}
];

@NgModule({
  declarations: [
    EditPersonComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    NgIf,
    AsyncPipe,
    ReactiveFormsModule,
    UserFormModule
  ]
})
export class EditPersonModule {}
