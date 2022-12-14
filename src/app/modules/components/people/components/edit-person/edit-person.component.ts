import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Person} from "../../models/person.model";
import {PeopleBusiness} from "../../business/people.business";
import {FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'edit-person-app',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {

  userId: string;
  person: Person;

  constructor(private router: Router,
              private toast: ToastrService,
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
        next: () => {
          this.router.navigate(['/people', this.person.id])
            .then(() => this.toast.success('User Updated Successfully'));
        },
        error: err => console.log(err)
      });
  }

  onDeleteUser() {
    this.peopleBusiness.deletePerson(this.person.id)
      .subscribe({
        next: () => {
          this.router.navigate(['/'])
            .then(() => this.toast.success('User Deleted Successfully'));
        },
        error: err => console.log(err)
      });
  }

}
