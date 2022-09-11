import {Component} from '@angular/core';
import {PeopleBusiness} from "../../business/people.business";
import {Observable} from "rxjs";
import {People} from "../../models/people.model";

@Component({
  selector: 'people-list-app',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent {

  peopleList$: Observable<People[]> = this.peopleBusiness.getPeople();

  constructor(private peopleBusiness: PeopleBusiness) {
  }

}
