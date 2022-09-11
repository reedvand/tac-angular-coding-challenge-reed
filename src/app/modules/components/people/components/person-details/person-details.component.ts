import {Component} from "@angular/core";
import {PeopleBusiness} from "../../business/people.business";
import {Person} from "../../models/person.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'person-details-app',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent {

  userId: string;
  person$: Observable<Person>;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private peopleBusiness: PeopleBusiness) {
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.person$ = this.peopleBusiness.getPersonById(this.userId);
  }

}
