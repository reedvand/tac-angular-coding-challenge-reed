import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PeopleComponent} from "./people.component";

const routes: Routes = [
  {path: '', component: PeopleComponent,
    children: [
      {path: '', loadChildren: () => import('./components/people-list/people-list.module').then(m => m.PeopleListModule)},
      {path: ':id', loadChildren: () => import('./components/person-details/person-details.module').then(m => m.PersonDetailsModule)},
      {path: ':id/edit', loadChildren: () => import('./components/edit-person/edit-person.module').then(m => m.EditPersonModule)}
    ]
  }
];

@NgModule({
  declarations: [
    PeopleComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PeopleModule {}
