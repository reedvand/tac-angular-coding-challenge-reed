import {Component, ElementRef, ViewChild} from '@angular/core';
import {PeopleBusiness} from "../../business/people.business";
import {Observable} from "rxjs";
import {People} from "../../models/people.model";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {map} from 'rxjs/operators';

@Component({
  selector: 'people-list-app',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent {

  filterString = '';
  peopleList$: Observable<People[]> = this.peopleBusiness.getPeople();
  @ViewChild('closeModal') private closeModal: ElementRef;

  constructor(private router: Router,
              private toast: ToastrService,
              private peopleBusiness: PeopleBusiness) {
  }

  onSaveUser(userForm: FormGroup) {
    const person = {
      name: userForm.value.name,
      isActive: userForm.value.isActive,
      age: userForm.value.age,
      about: userForm.value.about,
      gender: userForm.value.gender,
      registered: new Date()
    };

    this.peopleBusiness.addPerson(person)
      .subscribe({
        next: response => {
          this.closeModal.nativeElement.click();

          this.router.navigate(['people', response.id])
            .then(() => this.toast.success('User Added Successfully'));
        },
        error: err => console.log(err)
      });
  }

  searchUsers() {
    this.peopleList$ = this.peopleList$.pipe(
      map(people => people.filter(p => p.name.toLowerCase().indexOf(this.filterString.toLowerCase()) > -1))
    );
  }
}
