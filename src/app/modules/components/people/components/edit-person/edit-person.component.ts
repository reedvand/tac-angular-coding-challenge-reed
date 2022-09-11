import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {Person} from "../../models/person.model";
import {PeopleBusiness} from "../../business/people.business";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'edit-person-app',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {

  userId: string;
  userForm: FormGroup;
  person: Person = null;

  constructor(private activatedRoute: ActivatedRoute,
              private peopleBusiness: PeopleBusiness) {
    this.userId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this.peopleBusiness.getPersonById(this.userId).subscribe(
      {
        next: (person: Person) => {
          this.person = person;
          this.setUserForm();
        },
        error: err => console.log(err)
      }
    );
  }

  setUserForm() {
    this.userForm = new FormGroup({
      name: new FormControl(this.person.name,
        [Validators.required, Validators.max(70)]),
      isActive: new FormControl(this.person.isActive),
      age: new FormControl(this.person.age,
        [Validators.required, Validators.min(18), Validators.max(110)]),
      about: new FormControl(this.person.about, Validators.max(250)),
      gender: new FormControl(this.person.gender, Validators.required),
    });
  }

  onSaveUser() {
    this.userForm.markAllAsTouched();

    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }

}
