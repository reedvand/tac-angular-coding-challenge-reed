import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Person} from "../../models/person.model";
import {PeopleBusiness} from "../../business/people.business";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'edit-person-app',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {

  userId: string;
  person: Person;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private peopleBusiness: PeopleBusiness) {
    this.userId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this.peopleBusiness.getPersonById(this.userId).subscribe(
      {
        next: (person: Person) => this.person = person,
        error: err => console.log(err)
      }
    );
  }

  onSaveUser(userForm: FormGroup) {
      const person = {
        ...this.person,
        name: userForm.value.name,
        isActive: userForm.value.isActive,
        age: userForm.value.age,
        about: userForm.value.about,
        gender: userForm.value.gender
      };

      this.peopleBusiness.updatePerson(person)
        .subscribe({
          next: () => this.router.navigate(['/people', this.person.id]),
          error: err => console.log(err)
        });
  }

}
